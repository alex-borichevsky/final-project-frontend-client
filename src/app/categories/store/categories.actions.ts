import {createAsyncThunk} from "@reduxjs/toolkit";
import repository from "../../../repository";
import { CategoryDto } from "../types/category-dto.type";

const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyQWRtaW5AbWFpbC5ydSIsImlkIjoiZTMyMmEzYzUtZjkyNy00Yjg0LThiZmQtNzk0NzZlYjJlNTEzIiwicm9sZUlkIjoiMSIsImlhdCI6MTY3OTUwOTM0NCwiZXhwIjoxNjc5NTEyOTQ0fQ.sQWIjwknqi0llg177XoWllgiB11Koxn0c4fy860cqKY'
    }
}

export const getCategories = createAsyncThunk(
    'category/getAll',
    async (_, thunkAPI) => {
        try{
            const response = await repository.get("/categories", headers);
            return response.data;

        }   catch (e) {
            return  thunkAPI.rejectWithValue('Can`t get categories.')
        }
    }
);

export const getCategoryById = createAsyncThunk<CategoryDto, { categoryId: number }>(
    'category/getById',
    async ({categoryId}, thunkAPI) => {
        try{
            const response = await repository.get(`/categories/${categoryId}`, headers);
            return response.data;

        }   catch (e) {
            return  thunkAPI.rejectWithValue('Can`t get categories.')
        }
    }
);