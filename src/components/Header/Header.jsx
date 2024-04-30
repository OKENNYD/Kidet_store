import React, {useState, useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
import {
  LiaOpencart,
  LiaSun,
  LiaMoon,
  LiaWalletSolid,
  LiaSearchSolid,
} from "react-icons/lia";
import { IoChevronDown } from "react-icons/io5";
import Departments from "../../api/departments";
import Cart from "../../api/cart";
import Light from "../../media/img/light.png";
import Dark from "../../media/img/dark.png";

const Header = () => {
  const HSThemeAppearance = {
    init() {
      const defaultTheme = "default";
      let theme = localStorage.getItem("hs_theme") || defaultTheme;

      if (document.querySelector("html").classList.contains("dark")) return;
      this.setAppearance(theme);
    },
    _resetStylesOnLoad() {
      const $resetStyles = document.createElement("style");
      $resetStyles.innerText = `*{transition: unset !important;}`;
      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");
      document.head.appendChild($resetStyles);
      return $resetStyles;
    },
    setAppearance(theme, saveInStore = true, dispatchEvent = true) {
      const $resetStylesEl = this._resetStylesOnLoad();

      if (saveInStore) {
        localStorage.setItem("hs_theme", theme);
      }

      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "default";
      }

      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.remove("default");
      document.querySelector("html").classList.remove("auto");

      document
        .querySelector("html")
        .classList.add(this.getOriginalAppearance());

      setTimeout(() => {
        $resetStylesEl.remove();
      });

      if (dispatchEvent) {
        window.dispatchEvent(
          new CustomEvent("on-hs-appearance-change", { detail: theme })
        );
      }
    },
    getAppearance() {
      let theme = this.getOriginalAppearance();
      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "default";
      }
      return theme;
    },
    getOriginalAppearance() {
      const defaultTheme = "default";
      return localStorage.getItem("hs_theme") || defaultTheme;
    },
  };
  HSThemeAppearance.init();

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (HSThemeAppearance.getOriginalAppearance() === "auto") {
        HSThemeAppearance.setAppearance("auto", false);
      }
    });

  window.addEventListener("load", () => {
    const $clickableThemes = document.querySelectorAll(
      "[data-hs-theme-click-value]"
    );
    const $switchableThemes = document.querySelectorAll(
      "[data-hs-theme-switch]"
    );

    $clickableThemes.forEach(($item) => {
      $item.addEventListener("click", () =>
        HSThemeAppearance.setAppearance(
          $item.getAttribute("data-hs-theme-click-value"),
          true,
          $item
        )
      );
    });

    $switchableThemes.forEach(($item) => {
      $item.addEventListener("change", (e) => {
        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");
      });

      $item.checked = HSThemeAppearance.getAppearance() === "dark";
    });

    window.addEventListener("on-hs-appearance-change", (e) => {
      $switchableThemes.forEach(($item) => {
        $item.checked = e.detail === "dark";
      });
    });
  });

  let [inCart, setInCart] = useState()

  useEffect(()=>{
    Cart.map(cart=> (
      setInCart(++cart.ammount)
    ))
  },[])

  return (
    <header className="w-full py-1">
      <div className="inline-flex gap-2.5 w-full justify-center items-center">
        <NavLink to="/ " className="logo w-1/5 px-4 block sm-none">
          <img src={Light} alt={Light} loading="lazy" className="block dark:hidden h-10" />
          <img src={Dark} alt={Dark} loading="lazy" className="hidden dark:block h-10" />
          </NavLink>
        <div className="inline-flex gap-2 lg:w-4/5 pe-3 sm-gap sm-width">
          <div className="inline-flex w-full search my-2 p-3 h-10 bg-white rounded-full dark:bg-gray-800 dark:text-gray-400 justify-center items-center">
            <LiaSearchSolid className="text-blue-600 h-10 w-10" />
            <input
              type="search"
              className="block mx-2 text-sm h-full w-full disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none bg-transparent"
              placeholder="Search store"
            />
            <select className="dark:bg-gray-800 w-auto text-gray-500 sm-none md-none">
              {Departments.map((department) => (
                <option className=" w-auto" key={department.id}>{department.name}</option>
              ))}
            </select>
          </div>
          <NavLink to="/wallet "
              className="relative inline-flex justify-center items-center text-sm font-semibold text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:focus:outline-none"
            >
              <LiaWalletSolid className="flex-shrink-0 h-9 w-9 disabled:opacity-50 disabled:pointer-events-none " />
          </NavLink>
          <NavLink to="/cart"
              className="relative inline-flex justify-center items-center text-sm font-semibold text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:focus:outline-none"
            >
              <LiaOpencart className="flex-shrink-0 h-9 w-9 disabled:opacity-50 disabled:pointer-events-none " />
              <span className="absolute inline-flex items-center rounded-full text-xs font-medium">
                {inCart}
              </span>
          </NavLink>
          <div
            className="hs-dropdown py-2"
            data-hs-dropdown-placement="bottom-right"
            data-hs-dropdown-offset="30"
          >
            <button
              type="button"
              className="hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
            >
              <LiaMoon className="hs-dark-mode-active:hidden block w-8 h-8" />
              <LiaSun className="hs-dark-mode-active:block hidden w-8 h-8" />
            </button>
            <div
              id="selectThemeDropdown"
              className="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
            >
              <button
                type="button"
                className="hs-auto-mode-active:bg-gray-100 w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                data-hs-theme-click-value="auto"
              >
                Auto (system default)
              </button>
              <button
                type="button"
                className="hs-default-mode-active:bg-gray-100 w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                data-hs-theme-click-value="default"
              >
                Default (light mode)
              </button>
              <button
                type="button"
                className="hs-dark-mode-active:bg-gray-700 w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                data-hs-theme-click-value="dark"
              >
                Dark
              </button>
            </div>
          </div>
          <div className="hs-dropdown h-10 w-auto relative inline-flex my-2 ">
            <button
              id="hs-dropdown-custom-trigger"
              type="button"
              className="hs-dropdown-toggle py-1 px-1 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none sm-btn"
            >
              <img
                className="w-9 h-9 rounded-full sm-img "
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Maria"
              />
              <span className="text-gray-600 font-medium truncate max-w-auto dark:text-gray-400 sm-none">
                Okennyd
              </span>
              <IoChevronDown className="hs-dropdown-open:rotate-180 w-7 h-7 sm-none" />
            </button>

            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[200px] bg-white rounded-lg p-2 mt-2 dark:bg-gray-800 sm:min-w-[100px] z-[20]"
              aria-labelledby="hs-dropdown-custom-trigger"
            >
              <a
                className="flex items-center gap-x-3.5 py-1 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="https://www.all.com"
              >
                Profile
              </a>
              <a
                className="flex items-center gap-x-3.5 py-1 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="https://www.all.com"
              >
                Help
              </a>
              <a
                className="flex items-center gap-x-3.5 py-1 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="https://www.all.com"
              >
                Settings
              </a>
              <Link
                className="flex items-center gap-x-3.5 py-1 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                to="login"
              >
                Signout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-3 pb-2 w-full hidden sm-show">
        <nav className="flex space-x-2 overflow-x-auto scroll">
          {Departments.map((department) => (
            <button
              key={department.id}
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 px-2 py-1 inline-flex items-center gap-x-2 rounded-2xl justify-center w-auto text-center text-lg whitespace-nowrap text-gray-900 hover:text-blue-600 focus:outline-none focus:text-violet-800 disabled:opacity-50 disabled:pointer-events-none bg-white dark:text-gray-200 dark:hover:text-violet-400 dark:bg-gray-800 dark:hover:bg-gray-900"
            >
              {department.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
