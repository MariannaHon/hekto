import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface cartItem {
    id?: number;
    quantity: number;
    img: string;
    name: string;
    price: number;
}

interface cartState {
    items: cartItem[];
    totalQuantity: number;
    totalAmount: number;
}

const initialState: cartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action: PayloadAction<cartItem>) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                item => item.id === newItem.id
            );

            state.totalQuantity++;
            state.totalAmount += newItem.price;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    name: newItem.name,
                    img: newItem.img,
                });
            } else {
                existingItem.quantity++;
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
            localStorage.removeItem('cartItems');
        },
        increaseItemQuantity(state, action: PayloadAction<number>) {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity++;
                state.totalQuantity++;
                state.totalAmount += item.price;
            }
        },
        decreaseItemQuantity(state, action: PayloadAction<number>) {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity--;
                state.totalQuantity--;
                state.totalAmount -= item.price;
                if (item.quantity === 0) {
                    state.items = state.items.filter(item => item.id !== id);
                }
            }
        },
    },
});

export const {
    addItem,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
