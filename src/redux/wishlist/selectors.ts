import { RootState } from '../store';

export const selectWishlistItems = (state: RootState) => state.wish.items;
