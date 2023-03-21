import {createAsyncThunk } from "@reduxjs/toolkit";

import {CategoriesDto} from "../types/category-dto.type";

import repository from "../../../repository";
import categoriesSlice from "./categories.slice";

const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
    }
}


export const getCategories = createAsyncThunk<CategoriesDto[]>("GET/categories", async (_, { rejectWithValue }) => {
    try {
        const response = await repository.get("/categories", headers);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error);
    }
});

// export const getCategory = createAsyncThunk<CategoriesDto, { categoryId: number }>("GET/users/:userId", async ({ userId }, { rejectWithValue }) => {
//     try {
//         const response = await repository.get(`/users/${userId}`);
//         return response.data;
//     } catch (error: any) {
//         return rejectWithValue(error);
//     }
// });

export const { } = categoriesSlice.actions;