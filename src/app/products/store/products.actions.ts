import {createAsyncThunk} from "@reduxjs/toolkit";
import repository from "../../../repository";
import { ProductDto } from "../types/product-dto.type";
import {CreateOrderDtoType} from "../../orders/types/create-order-dto.type";

const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyQWRtaW5AbWFpbC5ydSIsImlkIjoiZTMyMmEzYzUtZjkyNy00Yjg0LThiZmQtNzk0NzZlYjJlNTEzIiwicm9sZUlkIjoiMSIsImlhdCI6MTY3OTUwOTM0NCwiZXhwIjoxNjc5NTEyOTQ0fQ.sQWIjwknqi0llg177XoWllgiB11Koxn0c4fy860cqKY'
    }
}

export const getProducts = createAsyncThunk(
  'products/getAll',
  async (_, thunkAPI) => {
      try{
          const response = await repository.get("/products", headers);
          return response.data;

      }   catch (e) {
          return  thunkAPI.rejectWithValue('Can`t get products.')
      }
  }
);

export const getProductsByCategoryId = createAsyncThunk<ProductDto[], { categoryId: number }>(
  'products/getByCategoryId',
  async ({categoryId}, thunkAPI) => {
      try{
          const response = await repository.get(`/categories/products/${categoryId}`, headers);
          return response.data;

      }   catch (e) {
          return  thunkAPI.rejectWithValue('Can`t get products.')
      }
  }
);
