'use client';

import css from './page.module.scss';
import { fetchProducts } from '@/redux/products/operations';
import { useAppDispatch } from '@/redux/hooks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectWishlistItems } from '@/redux/wishlist/selectors';
import { Product } from '@/redux/products/slice';
import ProductCard from '../components/ProductCard/ProductCard';

const Wishlist = () => {
    const dispatch = useAppDispatch();
    const wish = useSelector(selectWishlistItems);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <main className="container">
            <section className="wrapper">
                <h1 className={css.title}>Wishlist</h1>
                <ul className={css.list}>
                    {wish.map((product: Product) => (
                        <li key={product.id}>
                            <ProductCard product={product} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};
export default Wishlist;
