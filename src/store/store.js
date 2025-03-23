import {configureStore} from "@reduxjs/toolkit";
import projectSlice from "../features/projectSlice/projectSlice";

const store = configureStore({
    reducer: {
        project: projectSlice
    }
});

export default store;