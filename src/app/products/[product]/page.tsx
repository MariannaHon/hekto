'use client';

import Product from '@/app/components/Product/Product';
import css from './page.module.scss';
import Additional from '@/app/components/Additional/Additional';
import Related from '@/app/components/Related/Related';

import React, { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { fetchProducts } from '@/redux/products/operations';

const ProductPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <main>
            <section className={css.wrapper}>
                <Product />
                <Additional />
                <Related />
            </section>
        </main>
    );
};

export default ProductPage;
