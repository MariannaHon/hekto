import { RootState } from '../store';

export const selectBrandFilter = (state: RootState) => state.filters.brand;
export const selectDiscountFilter = (state: RootState) =>
    state.filters.discount;
export const selectPriceFilter = (state: RootState) => state.filters.price;
export const selectRatingFilter = (state: RootState) => state.filters.rating;
export const selectCategoriesFilter = (state: RootState) =>
    state.filters.categories;
export const selectNameFilter = (state: RootState) => state.filters.name;
