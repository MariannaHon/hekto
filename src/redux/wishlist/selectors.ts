import { RootState } from '../store';

export const selectWishListItems = (state: RootState) => state.wish.items;
