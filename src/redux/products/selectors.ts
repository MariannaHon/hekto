import { RootState } from '../store';
import {
    selectBrandFilter,
    selectCategoriesFilter,
    selectDiscountFilter,
    selectPriceFilter,
    selectRatingFilter,
    selectNameFilter,
} from '../filters/selectors';
import { createSelector } from '@reduxjs/toolkit';
import { Product } from './slice';

export const selectError = (state: RootState) => state.products.error;
export const selectLoading = (state: RootState) => state.products.loading;
export const selectProducts = (state: RootState) => state.products.items;
export const selectPage = (state: RootState) => state.products.page;
export const selectLimit = (state: RootState) => state.products.limit;
export const selectOrder = (state: RootState) => state.products.order;
export const selectView = (state: RootState) => state.products.view;

export const selectFilteredProducts = createSelector(
    [
        selectProducts,
        selectBrandFilter,
        selectCategoriesFilter,
        selectDiscountFilter,
        selectPriceFilter,
        selectRatingFilter,
        selectNameFilter,
    ],
    function (
        products,
        brandFilter,
        categoriesFilter,
        discountFilter,
        priceFilter,
        ratingFilter,
        nameFilter
    ) {
        if (!Array.isArray(products)) {
            return [];
        }

        let result: Product[] = products;

        if (nameFilter) {
            result = filterName(result, nameFilter);
        }

        if (brandFilter && brandFilter.length > 0) {
            result = filterBrand(result, brandFilter);
        }
        if (categoriesFilter && categoriesFilter.length > 0) {
            result = filterCategories(result, categoriesFilter);
        }
        if (discountFilter && discountFilter.length > 0) {
            result = filterDiscount(result, discountFilter);
        }
        if (priceFilter && priceFilter.length > 0) {
            result = filterPrice(result, priceFilter);
        }
        if (ratingFilter && ratingFilter.length > 0) {
            result = filterRating(result, ratingFilter);
        }
        return result;
    }
);

function filterName(products: Product[], name: string): Product[] {
    return products.filter(product =>
        product.name.toLowerCase().includes(name.toLowerCase())
    );
}

function filterBrand(products: Product[], values: string[]): Product[] {
    return products.filter(product =>
        values.some(value =>
            product.brand.toLowerCase().includes(value.toLowerCase())
        )
    );
}

function filterCategories(products: Product[], values: string[]): Product[] {
    return products.filter(product =>
        values.some(value =>
            product.categories.toLowerCase().includes(value.toLowerCase())
        )
    );
}

function filterRating(products: Product[], values: number[]): Product[] {
    return products.filter(product =>
        values.some(value => Number(product.rating) == value)
    );
}

function filterDiscount(products: Product[], values: string[]): Product[] {
    return products.filter(product =>
        values.some(value => {
            const discountValue = product.discount.replace('%', '');
            return discountValue === value;
        })
    );
}

function filterPrice(products: Product[], values: number[]): Product[] {
    return products.filter(product =>
        values.some(value => {
            if (value === 900) {
                return Number(product.price) >= 800;
            } else {
                const parts = getPriceRange(value);
                return (
                    Number(product.price) >= parts.min &&
                    Number(product.price) < parts.max
                );
            }
        })
    );
}

function getPriceRange(value: number): { min: number; max: number } {
    switch (value) {
        case 150:
            return { min: 0, max: 150 };
        case 350:
            return { min: 150, max: 350 };
        case 500:
            return { min: 350, max: 500 };
        case 800:
            return { min: 500, max: 800 };
        default:
            return { min: 0, max: 0 };
    }
}
