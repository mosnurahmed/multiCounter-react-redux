import React from "react";
import { INCREMENT } from "../store/actionType";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";

function Product({ item }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-between px-4 items-center">
        <div className="text-lg font-semibold">
          <p >{item.title} ({item.stock})</p>
          <p className="text-gray-400 text-base">{item.price} </p>
        </div>
        <div className="text-lg font-semibold">
          <button 
           onClick={() => dispatch({ type: INCREMENT, payload: item.id })}
          className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              // width="24"
              // height="24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>

    </>
  );
}

export default Product;
