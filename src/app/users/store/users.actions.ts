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

            const response = await repository.get('/users/info/user', headers);
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
            const response = await repository.put('/users/info/user',dto, headers);
            return response.data;

        }   catch (e) {
            return  thunkAPI.rejectWithValue('Can`t update user info')
        }
    }
);

