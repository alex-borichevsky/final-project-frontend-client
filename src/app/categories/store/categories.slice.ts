import { createSlice } from "@reduxjs/toolkit";
import {CategoriesState} from "../types/user-state.type";
import {getCategories} from "./categories.actions";

const initialState: CategoriesState = {
    categories: [],
    category: null,
    pending: {
        categories: false,
        category: false,
    },
    errors: {
        categories: null,
        category: null,
    },
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // ============ GET USERS ============ //
            .addCase(getCategories.pending, (state) => {
                state.pending.categories = true;
                state.errors.categories = null;
            })
            .addCase(getCategories.fulfilled, (state, { payload }) => {
                state.pending.categories = false;
                state.categories = payload;
            })
            .addCase(getCategories.rejected, (state, action: any & { payload: any }) => {
                state.pending.categories = false;
                state.errors.categories = action.payload.message;
            })
    },
});

export default categoriesSlice;