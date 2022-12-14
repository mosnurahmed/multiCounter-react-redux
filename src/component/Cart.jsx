import { INCREMENT, DECREMENT } from "../store/actionType";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";

function Cart({ item }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div className="flex justify-between border-b-2 mb-2">
          <div className="text-lg py-2">
            <p>{item.title} </p>
          </div>

          <div className="text-lg py-2">
            <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
              <button
                onClick={() => dispatch({ type: DECREMENT, payload: item.id })}
                className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                </svg>
              </button>

              <p>{item.quantity}</p>

              <button
                onClick={() => dispatch({ type: INCREMENT, payload: item.id })}
                className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
