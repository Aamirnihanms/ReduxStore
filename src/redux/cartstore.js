import { configureStore } from "@reduxjs/toolkit";
import productslice from "./slices/productslice";
import wishlistslice from "./slices/wishlistslice";
import cartslice from "./slices/cartslice";

const cartstore = configureStore({
    reducer: {
        productreducer: productslice,
        wishlistreducer: wishlistslice,
        cartreducer : cartslice
    }
});

export default cartstore;
