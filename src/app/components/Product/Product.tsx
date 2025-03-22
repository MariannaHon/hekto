'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import AddBtn from '@/app/components/AddBtn/AddBtn';

import { useSelector } from 'react-redux';
import {
    selectProducts,
    selectError,
    selectLoading,
} from '@/redux/products/selectors';

import css from './Product.module.scss';

const Product: React.FC = () => {
    const products = useSelector(selectProducts);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectLoading);

    const pathname = usePathname();
    const productId = pathname.split('/').pop();

    const product = products.find(item => item.id?.toString() === productId);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!product) return <div>Product not found</div>;

    return (
        <div className={css.container}>
            <div className={css.box}>
                <div className={css.left}>
                    <Image
                        src={product.img2}
                        alt="Product"
                        width={192}
                        height={136}
                    />
                    <Image
                        src={product.img3}
                        alt="Product"
                        width={192}
                        height={136}
                    />
                    <Image
                        src={product.img4}
                        alt="Product"
                        width={192}
                        height={136}
                    />
                </div>
                <Image
                    className={css.img}
                    src={product.img}
                    alt={product.name}
                    width={528}
                    height={438}
                />
            </div>
            <div className={css.right}>
                <h1 className={css.title}>{product.name}</h1>
                <div className={css.stars}>
                    {Array.from({ length: 5 }, (_, index) => (
                        <svg
                            key={index}
                            className={
                                index < Math.round(product.rating)
                                    ? css.bright
                                    : css.star
                            }
                            width="16"
                            height="16"
                        >
                            <use href="/img/sprite.svg#icon-star"></use>
                        </svg>
                    ))}
                </div>
                <div className={css.price}>
                    <p className={css.text}>${product.price.toFixed(2)}</p>
                    <p className={css.pink}>${product.oldPrice.toFixed(2)}</p>
                </div>
                <p className="text">{product.description}</p>
                <div className={css.bottom}>
                    <AddBtn product={product} />
                    <svg className={css.heart} width="16" height="16">
                        <use href="/img/sprite.svg#icon-heart"></use>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Product;
