import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cart.items;
export const selectQuantity = (state: RootState) => state.cart.totalQuantity;

export const selectAmount = (state: RootState) => state.cart.totalAmount;
