'use client';

import Link from 'next/link';
import Filters from '../components/Filters/Filters';
import ProductList from '../components/ProductList/ProductList';
import Sort from '../components/Sort/Sort';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchProducts } from '@/redux/products/operations';
import {
    selectProducts,
    selectLimit,
    selectPage,
} from '@/redux/products/selectors';
import { changePage } from '@/redux/products/slice';

import css from './page.module.scss';
import { usePathname } from 'next/navigation';

const ProductsPage = () => {
    const path = usePathname();
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const limit = useAppSelector(selectLimit);
    const currentPage = useAppSelector(selectPage);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const totalPages = Math.ceil(products.length / limit);

    const handlePageClick = (pageNumber: number) => {
        dispatch(changePage(pageNumber));
    };

    return (
        <main className="container">
            <section className={css.wrapper}>
                <h1 className="main-title mb-24">Products</h1>
                <nav>
                    <ul className={css.nav}>
                        <li
                            className={
                                path === '/' ? `${css.active}` : `${css.item}`
                            }
                        >
                            <Link href="/">Home</Link>
                        </li>
                        <span className={css.dot}></span>
                        <li
                            className={
                                path === '/products'
                                    ? `${css.active}`
                                    : `${css.item}`
                            }
                        >
                            <Link href="/products">Products</Link>
                        </li>
                    </ul>
                </nav>
                <div className={css.main}>
                    <Sort className={css.sort} />
                    <Filters className={css.filters} />
                    <ProductList className={css.products} />
                </div>
                <div className={css.pages}>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageClick(index + 1)}
                            className={
                                currentPage === index + 1
                                    ? css.activePage
                                    : css.pageButton
                            }
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ProductsPage;
