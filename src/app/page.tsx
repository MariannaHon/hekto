'use client';

import Hero from './components/Hero/Hero';
import Featured from './components/Featured/Featured';
import Latest from './components/Latest/Latest';
import Unique from './components/Unique/Unique';
import '../css/index.css';
import css from './page.module.scss';
import Trends from './components/Trends/Trends';
import Discount from './components/Discount/Discount';
import Categories from './components/Categories/Categories';
import Subscribe from './components/Subscribe/Subscribe';
import Blog from './components/Blog/Blog';

import React, { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { fetchProducts } from '@/redux/products/operations';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <main className={css.main}>
            <Hero />
            <Featured />
            <Latest />
            <Unique />
            <Trends />
            <Discount />
            <Categories />
            <Subscribe />
            <Blog />
        </main>
    );
}

export default App;
