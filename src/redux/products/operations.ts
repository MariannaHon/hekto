import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'products/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`/products.json`);
            return response.data.products;
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            } else {
                return thunkAPI.rejectWithValue('An unknown error occurred.');
            }
        }
    }
);
