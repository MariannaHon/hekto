import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchBlog } from './operations';

export interface Blog {
    id?: number;
    img: string;
    name: string;
    date: string;
    title: string;
    description: string;
}

interface BlogState {
    items: Blog[];
    loading: boolean;
    error: string | null;
}

function handleLoading(state: BlogState) {
    state.loading = true;
    state.error = null;
}

function handleError(state: BlogState, action: PayloadAction<unknown>) {
    state.loading = false;
    state.error = action.payload as string | null;
}

const initialState: BlogState = {
    items: [],
    loading: false,
    error: null,
};

const blogSlice = createSlice({
    name: 'blog',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchBlog.pending, handleLoading)
            .addCase(fetchBlog.fulfilled, (state, action) => {
                state.error = null;
                state.loading = false;

                if (Array.isArray(action.payload)) {
                    state.items = action.payload;
                } else {
                    state.items = [];
                    state.error = 'The received data is not an array.';
                }
            })
            .addCase(fetchBlog.rejected, handleError),
});

export const blogReducer = blogSlice.reducer;
