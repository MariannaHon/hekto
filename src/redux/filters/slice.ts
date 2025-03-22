import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const filtersInitialState = {
    brand: [] as Array<string>,
    discount: [] as Array<string>,
    rating: [] as Array<number>,
    categories: [] as Array<string>,
    price: [] as Array<number>,
    name: '',
};

export type FilterKey = keyof typeof filtersInitialState;

const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
        search(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        changeFilter(
            state,
            action: PayloadAction<{
                filter: FilterKey;
                value: string | string[] | number[];
            }>
        ) {
            const { filter, value } = action.payload;
            switch (filter) {
                case 'brand':
                case 'discount':
                case 'categories':
                    state[filter] = value as string[];
                    break;
                case 'rating':
                case 'price':
                    state[filter] = value as number[];
                    break;
                case 'name':
                    state.name = value as string;
                    break;
                default:
                    break;
            }
        },
    },
});

export const { changeFilter, search } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
