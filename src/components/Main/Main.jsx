import React from "react";
import Products from "../../api/products";
import Department from "../../api/departments";
import { Link } from 'react-router-dom';

const stock = () => {
  let addon = ["Top sale", "Top Deal"];
  let Legend = [];
  Department.map((department) => Legend.unshift(department.name));
  Legend.sort();
  addon.map((arr) => Legend.unshift(arr));

  let Currency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products?skip=5&limit=100", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => console.log(json))
  //     .catch((err) => console.log(err, " error"));
  // });

  return (
    <div className="h-auto w-full px-3 pt-2 gap-2 flex-col">
      {Legend.map((legend, index) => (
        <div
          key={index}
          className=" bg-white rounded-xl dark:bg-slate-900 w-full h-auto p-3 mb-4"
        >
          <Link className="pb-1 text-sm font-bold text-gray-400 dark:text-gray-400"
                            to={"../catlog/?q=" + legend }> 
                            {legend}
                          </Link>
          <div className=" w-full h-auto overscroll-contain p-1 overflow-x-scroll   flex gap-2.5">
            {Products.map((product) => (
              <Link
                key={product.id}
                className="relative bg-gray-200 rounded-xl dark:bg-slate-600 w-40 h-60 p-1"
                to={"../catlog/?q="+product.category+"/"+product.brand+"/"+product.title+"&id="+product.id }
              >
                <img
                  className="w-full h-[120px] rounded-xl objecct-contain"
                  src={product.thumbnail}
                  alt={product.title}
                  loading="lazy"
                />
                <span className="absolute top-0 end-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium  bg-blue-600 text-white me-2 mt-2">
                  -{Math.floor(product.discountPercentage)}%
                </span>
                <div className="p-2 w-full h-auto">
                  <h3 className=" font-medium text-sm text-gray-600 text-ellipsis truncate">
                    {product.title}
                  </h3>
                  <p className=" text-xs line-through">
                    {Currency.format(product.price)}
                  </p>
                  <p className=" text-xs font-medium">
                    {Currency.format(
                      product.price -
                        (product.discountPercentage / 100) * product.price
                    )}
                  </p>
                  <p className=" text-xs font-medium float-right">
                    {product.stock} in stock
                  </p>
                  <button className=" bg-blue-600 text-sm rounded-xl font-semibold text-white w-full py-1 mt-1">
                    Add to cart
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default stock;
