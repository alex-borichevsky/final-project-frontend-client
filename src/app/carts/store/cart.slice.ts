import {createSlice} from "@reduxjs/toolkit";
import {UserCartStateType} from "../types/user-cart-state.type";
import {getUserCart} from "./cart.actions";

const initialState: UserCartStateType = {
    userCart: null,
    pending: {
        userCart: false,
    },
    errors: {
        userCart: null
    }
}

const userCartSlice = createSlice({
    name: 'userCart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserCart.pending, (state) => {
                state.pending.userCart = true;
                state.errors.userCart = null;
            })
            .addCase(getUserCart.fulfilled, (state, { payload }) => {
                state.pending.userCart = false;
                state.userCart = payload;
            })
            .addCase(getUserCart.rejected, (state, action: any & { payload: any }) => {
                state.pending.userCart = false;
                state.errors.userCart = action.payload.message;
            })
    }
});

export default userCartSlice.reducer;