import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../products/slice';

interface WishListState {
    items: Product[];
}

const initialState: WishListState = {
    items: [],
};

const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addToWishList: (state, action: PayloadAction<Product>) => {
            if (!state.items.find(item => item.id === action.payload.id)) {
                state.items.push(action.payload);
            }
        },
        removeFromWishList: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            );
        },
    },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export const wishListReducer = wishListSlice.reducer;
