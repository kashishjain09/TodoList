import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducer/todoSlice";

const store=configureStore({
    reducer:{
        task:taskReducer
    }
})
export default store