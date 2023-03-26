import {createAsyncThunk} from "@reduxjs/toolkit";
import repository from "../../../repository";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

export const getUserCart = createAsyncThunk(
    'user/cart/get',
    async (_, thunkAPI) => {
        try{
            const response = await repository.get('/cart/user', headers);
            console.log(response.data)
            return response.data;

        }   catch (e) {
            return  thunkAPI.rejectWithValue('Can`t get user cart')
        }
    }
);



