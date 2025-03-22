import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBlog = createAsyncThunk('blog/fetch', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`/products.json`);
        return response.data.blog;
    } catch (error) {
        if (error instanceof Error) {
            return thunkAPI.rejectWithValue(error.message);
        } else {
            return thunkAPI.rejectWithValue('An unknown error occurred.');
        }
    }
});
