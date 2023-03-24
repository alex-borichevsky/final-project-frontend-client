import {createAsyncThunk} from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import repository from "../../../repository";

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
            // const access_token = sessionStorage.get('access_token');
            const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5ydSIsImlkIjoiNjI2M2ZlYWYtNTU0NS00ZWZmLTg4MWEtODM2MjFjNThiYWFhIiwicm9sZUlkIjoiMiIsImlhdCI6MTY3OTY4MTIyMiwiZXhwIjoxNjc5Njg0ODIyfQ.sZQTCnXLzH6mGvXFIo8SgHoictmlN7d32ZLSQ8fvsPY';
            const decoded = jwt_decode(access_token);
            // @ts-ignore
            const response = await repository.get(`/orders/user/${decoded.id}`, headers);
            console.log(response.data);
            return response.data;

        }   catch (e) {
            return  thunkAPI.rejectWithValue('Can`t get order')
        }
    }
);