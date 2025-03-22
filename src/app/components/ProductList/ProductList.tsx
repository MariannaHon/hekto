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

const ProductList: React.FC<React.HTMLAttributes<HTMLElement>> = ({
    ...props
}) => {
    const filteredProducts = useSelector(selectFilteredProducts);
    const currentPage = useSelector(selectPage);
    const limit = useSelector(selectLimit);
    const sortOrder = useSelector(selectOrder);
    const view = useSelector(selectView);

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === 'high') {
            return b.price - a.price;
        } else if (sortOrder === 'low') {
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
            {products.map((product: Product) => (
                <li
                    className={`${
                        view === 'list' ? css.listItem : css.gridItem
                    }`}
                    key={product.id}
                >
                    <ProductCard product={product} view={view} />
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
