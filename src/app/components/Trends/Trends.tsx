'use client';

import TrendsCard from '../TrendsCard/TrendsCard';
import css from './Trends.module.scss';
import { Product } from '@/redux/products/slice';
import Link from 'next/link';

import { useSelector } from 'react-redux';
import {
    selectProducts,
    selectError,
    selectLoading,
} from '@/redux/products/selectors';

const Trends: React.FC = () => {
    const products = useSelector(selectProducts).slice(0, 4);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectLoading);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!products) {
        return <p>No products found</p>;
    }

    return (
        <section className="container">
            <div className="wrapper">
                <h2 className="subtitle">Trending Products</h2>
                <ul className={css.list}>
                    {products.map((product: Product) => (
                        <li key={product.id}>
                            <Link href={`/products/${product.id}`}>
                                <TrendsCard product={product} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Trends;
