import {legacy_createStore } from "redux";
import { cartReducer } from "./Cart/cart.reducer";

export const store = legacy_createStore(cartReducer);
