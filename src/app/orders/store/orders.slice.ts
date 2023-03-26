import {CategoryState} from "../../categories/types/category-state.type";
import {createSlice} from "@reduxjs/toolkit";
import {getCategories} from "../../categories/store/categories.actions";
import {OrderStateType} from "../types/order-state.type";
import {getUserOrders} from "./orders.actions";

const initialState: OrderStateType = {
    orders: [],
    order: null,
    pending: {
        orders: false,
        order: false,
    },
    errors: {
        orders: null,
        order: null
    }
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserOrders.pending, (state) => {
                state.pending.order = true;
                state.errors.order = null;
            })
            .addCase(getUserOrders.fulfilled, (state, { payload }) => {
                state.pending.order = false;
                state.orders = payload;
            })
            .addCase(getUserOrders.rejected, (state, action: any & { payload: any }) => {
                state.pending.order = false;
                state.errors.order = action.payload.message;
            })
    },
});

export default orderSlice.reducer;