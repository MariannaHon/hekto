'use client';

import css from './Related.module.scss';
import FeaturedProductCard from '../FeaturedProductCard/FeaturedProductCard';
import { Product } from '@/redux/products/slice';

import { useSelector } from 'react-redux';
import {
    selectProducts,
    selectError,
    selectLoading,
} from '@/redux/products/selectors';

const Related: React.FC = () => {
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
        <div className={css.container}>
            <h2 className="small-title">Related Products</h2>
            <ul className={css.list}>
                {products.map((product: Product) => (
                    <li key={product.name}>
                        <FeaturedProductCard product={product} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Related;
