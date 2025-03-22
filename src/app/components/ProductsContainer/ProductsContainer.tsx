'use client;';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { fetchProducts } from '@/redux/products/operations';
import { Product } from '@/redux/products/slice';
import {
    selectProducts,
    selectError,
    selectLoading,
} from '@/redux/products/selectors';

interface ProductsContainerProps {
    children: (
        products: Product[],
        error: string | null,
        isLoading: boolean
    ) => React.ReactNode;
}

const ProductsContainer: React.FC<ProductsContainerProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const error = useAppSelector(selectError);
    const isLoading = useAppSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return <>{children(products, error, isLoading)}</>;
};

export default ProductsContainer;
