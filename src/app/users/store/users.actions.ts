import {createAsyncThunk} from "@reduxjs/toolkit";
import repository from "../../../repository";
import jwt_decode from "jwt-decode";
import {UserInfoDto} from "../types/user-info-dto.type";
import {UpdateUserInfoDtoType} from "../types/update-user-info-dto.type";

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
            // const access_token = sessionStorage.get('access_token');
            const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Q3QG1haWwucnUiLCJpZCI6ImU2NzIxNzI0LTEwMzktNGQ5Ni04Y2VkLWViMGZjODIwYzAyOCIsInJvbGVJZCI6IjEiLCJpYXQiOjE2Nzk2NjM0NTAsImV4cCI6MTY3OTY2NzA1MH0.l4O7-LPjfgbdUpgpqR_wlt4sc20hYR8mh1y-REoTm-U';
            const decoded = jwt_decode(access_token);
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
            // const access_token = sessionStorage.get('access_token');
            const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Q3QG1haWwucnUiLCJpZCI6ImU2NzIxNzI0LTEwMzktNGQ5Ni04Y2VkLWViMGZjODIwYzAyOCIsInJvbGVJZCI6IjEiLCJpYXQiOjE2Nzk2NzUyNzcsImV4cCI6MTY3OTY3ODg3N30.9s096IifwW-MnFMKbMP0zu2MfpZJoOmwUUXo7uBXOZE';
            const decoded = jwt_decode(access_token);
            // @ts-ignore
            const response = await repository.put(`/users/info/${decoded.id}`,dto, headers);
            return response.data;

        }   catch (e) {
            return  thunkAPI.rejectWithValue('Can`t update user info')
        }
    }
);

