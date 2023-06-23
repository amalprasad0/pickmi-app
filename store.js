import { configureStore } from "@reduxjs/toolkit";
import navRducer from "./slices//navSlices";

export const store = configureStore({
    reducer: {
        nav: navRducer,
    },
}); 