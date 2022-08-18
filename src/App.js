import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { INCREMENT } from "./store/actionType";
import Product from "./component/Product";
import Cart from "./component/Cart";

function App() {
  const product = useSelector((item) => item.cart);

  let totalItem=0 ,
    totalPrice = 0;

  product.forEach((value) => {
    totalItem += value.quantity;
    totalPrice += value.totalPrice;
  });

 

  return (
    <div className="App">
      <div className="bg-gray-50 h-full md:h-screen">
        <div className="grid place-items-center">
          <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
            Shopping Cart
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              {product.map((item) => (
                <Product item={item} />
              ))}
            </div>
          </div>

          <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            {product.map((item) => (
              <Cart item={item} />
            ))}
            <div class="text-xl font-semibold">
              <p>Total Item </p>
              <p className="text-5xl">{totalItem} </p>
            </div>
            <div className="flex justify-center items-center text-center"></div>
            <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <div class="flex justify-center items-center text-center">
                <div class="text-xl font-semibold">
                  <p>Total Price</p>
                  <p class="text-5xl">{totalPrice} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
