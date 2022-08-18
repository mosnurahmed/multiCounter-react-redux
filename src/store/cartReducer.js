import { INCREMENT, DECREMENT } from "./actionType";

const initialProduct = [
  {
    id: 1,
    title: "Asus Vivobook X515MA",

    price: 35500,
    quantity: 0,
    stock: 35,
    totalPrice: 0,
  },
  {
    id: 2,
    title: "Dell E1916HV 18.5 Inch",
    price: 9300,
    quantity: 0,
    stock: 37,
    totalPrice: 0,
  },
  {
    id: 3,
    title: "Canon Eos 4000D 18MP",
    price: 36500,
    quantity: 0,
    stock: 40,
    totalPrice: 0,
  },
];

export const cartReducer = (products = initialProduct, action) => {
  switch (action.type) {
    case INCREMENT: {
      return products.map((item) => {
        if (item.id === action.payload) {
          if (item.stock > 0) {
            item.quantity = item.quantity + 1;
            item.stock = item.stock - 1;
            item.totalPrice = item.price * item.quantity;
          }
        }
        return item;
      });
    }
    case DECREMENT: {
      return products.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity > 0) {
            item.quantity = item.quantity - 1;
            item.stock = item.stock + 1;
            item.price = item.price * item.quantity;
          }
        }
        return item;
      });
    }
    default: {
      return products;
    }
  }
};
