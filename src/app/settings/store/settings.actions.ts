import {createAsyncThunk} from "@reduxjs/toolkit";
import repository from "../../../repository";
import jwt_decode from "jwt-decode";
import {UpdateUserPasswordDtoType} from "../types/update-user-password-dto.type";

const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

export const updateUserPassword = createAsyncThunk<UpdateUserPasswordDtoType, {dto: UpdateUserPasswordDtoType}>(
    'user/settings/update',
    async ({dto}, thunkAPI) => {
        try{
            // const access_token = sessionStorage.get('access_token');
            const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Q3QG1haWwucnUiLCJpZCI6ImU2NzIxNzI0LTEwMzktNGQ5Ni04Y2VkLWViMGZjODIwYzAyOCIsInJvbGVJZCI6IjEiLCJpYXQiOjE2Nzk2NzUyNzcsImV4cCI6MTY3OTY3ODg3N30.9s096IifwW-MnFMKbMP0zu2MfpZJoOmwUUXo7uBXOZE';
            const decoded = jwt_decode(access_token);
            // @ts-ignore
            const response = await repository.put(`/users/${decoded.id}`,dto, headers);
            return response.data;

        }   catch (e) {
            return  thunkAPI.rejectWithValue('Can`t update user password');
        }
    }
);
