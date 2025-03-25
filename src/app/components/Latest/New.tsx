import { Product } from '@/redux/products/slice';
import LatestProductCard from '../LatestProductCard/LatestProductCard';

import { useSelector } from 'react-redux';
import {
    selectProducts,
    selectError,
    selectLoading,
} from '@/redux/products/selectors';

import css from './Latest.module.scss';
import Loader from '../Loader/Loader';

const New = () => {
    const products = useSelector(selectProducts).slice(4, 10);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectLoading);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!products) {
        return <p>No products found</p>;
    }

    return (
        <div>
            <ul className={css.products}>
                {products.map((product: Product) => (
                    <li key={product.id}>
                        <LatestProductCard product={product} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default New;
