import ProductCard from '../ProductCard/ProductCard';
import css from './ProductsList.module.scss';
import { Product } from '@/redux/products/slice';
import { useSelector } from 'react-redux';
import {
    selectFilteredProducts,
    selectLimit,
    selectPage,
    selectOrder,
    selectView,
} from '@/redux/products/selectors';
import NoFound from '../ProductCard/NoFound';

const ProductList: React.FC<React.HTMLAttributes<HTMLElement>> = ({
    ...props
}) => {
    const filteredProducts = useSelector(selectFilteredProducts);
    const currentPage = useSelector(selectPage);
    const limit = useSelector(selectLimit);
    const sortOrder = useSelector(selectOrder);
    const view = useSelector(selectView);

    enum SortOrder {
        High = 'high',
        Low = 'low',
    }

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === SortOrder.High) {
            return b.price - a.price;
        } else if (sortOrder === SortOrder.Low) {
            return a.price - b.price;
        }
        return 0;
    });

    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;

    const products = sortedProducts.slice(startIndex, endIndex);

    return (
        <ul
            {...props}
            className={`${view === 'list' ? css.listMode : css.gridMode}`}
        >
            {products.length === 0 ? (
                <NoFound />
            ) : (
                products.map((product: Product) => (
                    <li
                        className={`${
                            view === 'list' ? css.listItem : css.gridItem
                        }`}
                        key={product.id}
                    >
                        <ProductCard product={product} view={view} />
                    </li>
                ))
            )}
        </ul>
    );
};

export default ProductList;
