import {createAsyncThunk} from "@reduxjs/toolkit";
import repository from "../../../repository";
import jwt_decode from "jwt-decode";
import {UpdateUserInfoDtoType} from "../types/update-user-info-dto.type";
import Cookies from "js-cookie";

const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

export const getUserInfo = createAsyncThunk(
    'user/info/get',
    async (_, thunkAPI) => {
        try{
            const access_token = Cookies.get('access_token');
            let decoded = null;
            if (access_token) {
                decoded = jwt_decode(access_token);
            }
            // @ts-ignore
            const response = await repository.get(`/users/info/${decoded.id}`, headers);
            return response.data;

        }   catch (e) {
            return  thunkAPI.rejectWithValue('Can`t get user info')
        }
    }
);


export const updateUserInfo = createAsyncThunk<UpdateUserInfoDtoType, {dto: UpdateUserInfoDtoType}>(
    'user/info/update',
    async ({dto}, thunkAPI) => {
        try{
            const access_token = Cookies.get('access_token');
            let decoded = null;
            if (access_token) {
                decoded = jwt_decode(access_token);
            }
            // @ts-ignore
            const response = await repository.put(`/users/info/${decoded.id}`,dto, headers);
            return response.data;

        }   catch (e) {
            return  thunkAPI.rejectWithValue('Can`t update user info')
        }
    }
);

