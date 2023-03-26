import {createAsyncThunk} from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import repository from "../../../repository";
import Cookies from "js-cookie";

const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}



export const getUserOrders = createAsyncThunk(
    'user/orders/get',
    async (_, thunkAPI) => {
        try{
            const access_token = Cookies.get('access_token');
            let decoded = null;
            if (access_token) {
                decoded = jwt_decode(access_token);
            }
            // @ts-ignore
            const response = await repository.get(`/orders/user/${decoded.id}`, headers);
            console.log(response.data);
            return response.data;

        }   catch (e) {
            return  thunkAPI.rejectWithValue('Can`t get order')
        }
    }
);