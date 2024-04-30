import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import KidetLight from "../../media/img/kidetLight.png";
import KidetDark from "../../media/img/kidetDark.png";
import { LiaSun, LiaMoon } from "react-icons/lia";
import { useFormik } from 'formik';
import * as yup  from 'yup'

const Signup = () => {

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
      dob: "",
      fullname: ""
    },
    validationSchema: yup.object({
      fullname: yup.string().required('Required'),
      email: yup.string().required('Required').email('not a valid mail'),
      phone: yup.number().required('Required').min(9, 'not valid number'),
      dob: yup.date().required('Required'),
      password: yup.string().required('Required')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <div className="w-full h-fit">
      <div className=" flex justify-end">
      <div
        className="hs-dropdown p-2 ml-8"
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
      </div>
      <div className="w-full h-fit flex justify-center items-center py-24">
        <div className="form rounded-3xl bg-white dark:bg-slate-800 w-80 h-auto flex-col py-8 justify-center items-center m-auto">
          <img
            src={KidetDark}
            alt={KidetDark}
            className="dark:hidden block w-24 m-auto"
            loading="lazy"
          />
          <img
            src={KidetLight}
            alt={KidetLight}
            className="dark:block hidden w-24 m-auto"
            loading="lazy"
          />
          <form
            className=" h-auto w-full caret-blue-600 p-6 pb-2 grid gap-2"
            onSubmit={formik.handleSubmit}
          >
            <div className="grid gap-2">
              <p className="text-xs dark:text-gray-300 text-gray-600 font-bold">Basic info</p>
            <div className="w-full">
              <input
                id="fullname"
                name="fullname"
                type="text"
                className="peer py-1 px-2 w-full h-10 bg-gray-100 border-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:text-gray-400"
                placeholder="fullname"
                onChange={formik.handleChange}
                value={formik.values.fullname}
              />
              {formik.touched.fullname && formik.errors.fullname ? <p className=" text-sm text-red-500">{formik.errors.fullname}</p> : null}
            </div>
            </div>
            <div className="grid gap-2">
            <p className="text-xs dark:text-gray-300 text-gray-600 font-bold">Basic info</p>
            <div className="w-full">
              <input
                type="email"
                className="peer py-1 px-2 w-full h-10 bg-gray-100 border-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:text-gray-400"
                placeholder="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                id="email"
                name="email"
              />
              {formik.touched.email && formik.errors.email ? <p className=" text-sm text-red-500">{formik.errors.email}</p> : null}
            </div>
            <div className="w-full">
              <input
                id="phone"
                name="phone"
                type="number"
                className="peer py-1 px-2 w-full h-10 bg-gray-100 border-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:text-gray-400"
                placeholder="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? <p className=" text-sm text-red-500">{formik.errors.phone}</p> : null}
            </div>
            </div>
            <div className="grid gap-2">
            <div className="w-full">
              <input
                id="password"
                name="password"
                type="password"
                className="peer py-1 px-2 w-full h-10 bg-gray-100 border-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:text-gray-400"
                placeholder="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? <p className=" text-sm text-red-500">{formik.errors.password}</p> : null}
            </div>
            </div>
            <button
              type="submit"
              className="w-full h-10 py-2 px-4 mt-1 inline-flex justify-center items-center gap-x-2 text-base font-semibold rounded-3xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
            >
              Register
            </button>
          </form>
          <p className="text-gray-800 dark:text-gray-200 text-sm text-center">
            Already have an account 
            <Link className="text-blue-500 underline" to="../login">
              Login
            </Link>
          </p>
          <p className="text-gray-800 dark:text-gray-200 text-center">
            <Link to="terms" className="text-sm w-full underline">
              terms & conditions
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup
