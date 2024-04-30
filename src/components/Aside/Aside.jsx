import React from "react";
import Departments from "../../api/departments";
import {
  IoChevronDown  ,
  IoChevronUp 
} from "react-icons/io5";
import {Link} from 'react-router-dom'

const Aside = () => {


  return (
    <aside className=" w-1/5 sm-none ps-3">
      <nav
        className="hs-accordion-group w-full flex flex-col flex-wrap bg-white dark:bg-gray-800 dark:border-transparent dark:text-gray-400 rounded-2xl p-2"
        data-hs-accordion-always-open
      >
        <ul className="max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scroll bar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
          {Departments.map((departments) => (
            <li
              key={departments.id}
              className="hs-accordion  "
              id="users-accordion"
            >
              <button
                type="button"
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3 py-1 px-3 text-sm text-slate-700 rounded-lg dark:text-slate-400 dark:hs-accordion-active:text-blue-600 dark:focus:outline-none hover:text-[13px] hover:text-blue-600  dark:hover:text-blue-600" id="department"
              >
                {departments.name}
                <IoChevronUp  className="hs-accordion-active:block ms-auto hidden w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" />
                <IoChevronDown   className="hs-accordion-active:hidden ms-auto block w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" />
              </button>
              <div
                id="users-accordion"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul
                  className="hs-accordion-group ps-4"
                  data-hs-accordion-always-open
                >
                  {departments.category.map((category, index) => (
                    <li className="hs-accordion py-[1.5px]" id="users-accordion-sub-1" key={index}>
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-2.5 px-2 text-sm text-slate-700 rounded-lg dark:bg-gray-800 dark:text-slate-400 dark:hs-accordion-active:text-blue-400 hover:text-[13px] hover:text-blue-600  dark:hover:text-blue-600"
                    >
                      {category.name}
                    </button>
                    <div
                      id="users-accordion-sub-1"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                      <ul className="ps-3">
                        {category.segment.map((segment, index) => (
                          <li key={index} className=" py-[2px]">
                            <Link className="flex hs-accordion-active:text-blue-600  items-center gap-x-3.5 px-2.5 text-sm text-slate-700 rounded-lg dark:bg-gray-800 dark:text-slate-400 dark:focus:outline-nonehover:text-[13px] hover:text-blue-600  dark:hover:text-blue-600"
                            to={"catlog/?q=" + segment.name }> 
                            {segment.name}
                          </Link>
                        </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

const Filter = () => {


  return (
    <aside className=" w-1/5 sm-none ps-3">
      <nav
        className="hs-accordion-group w-full flex flex-col flex-wrap bg-white dark:bg-gray-800 dark:border-transparent dark:text-gray-400 rounded-2xl p-2"
      >
        <ul className="max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scroll bar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
          {Departments.map((departments) => (
            <li
              key={departments.id}
              className="hs-accordion  "
              id="users-accordion"
            >
              <button
                type="button"
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3 py-1 px-3 text-sm text-slate-700 rounded-lg dark:text-slate-400 dark:hs-accordion-active:text-blue-600 dark:focus:outline-none hover:text-[13px] hover:text-blue-600  dark:hover:text-blue-600" id="department"
              >
                {departments.name}
                <IoChevronUp  className="hs-accordion-active:block ms-auto hidden w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" />
                <IoChevronDown   className="hs-accordion-active:hidden ms-auto block w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" />
              </button>
              <div
                id="users-accordion"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul
                  className="hs-accordion-group ps-4"
                  data-hs-accordion-always-open
                >
                  {departments.category.map((category, index) => (
                    <li className="hs-accordion py-[1.5px]" id="users-accordion-sub-1" key={index}>
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-2.5 px-2 text-sm text-slate-700 rounded-lg dark:bg-gray-800 dark:text-slate-400 dark:hs-accordion-active:text-blue-400 hover:text-[13px] hover:text-blue-600  dark:hover:text-blue-600"
                    >
                      {category.name}
                    </button>
                    <div
                      id="users-accordion-sub-1"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                      <ul className="ps-3">
                        {category.segment.map((segment, index) => (
                          <li key={index} className=" py-[2px]">
                            <Link className="flex hs-accordion-active:text-blue-600  items-center gap-x-3.5 px-2.5 text-sm text-slate-700 rounded-lg dark:bg-gray-800 dark:text-slate-400 dark:focus:outline-nonehover:text-[13px] hover:text-blue-600  dark:hover:text-blue-600"
                            to={"../catlog/?q=" + segment.name }> 
                            {segment.name}
                          </Link>
                        </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hs-accordion-group w-full flex flex-col flex-wrap bg-white dark:bg-gray-800 dark:border-transparent dark:text-gray-400 rounded-2xl p-2 h-48 mt-3">
      <p className="py-1 px-2 text-sm font-bold text-gray-400 dark:text-gray-400"> 
      Filter
          </p>
      </div>
    </aside>
  );
};

export {Aside, Filter};
