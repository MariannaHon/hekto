'use client';

import Image from 'next/image';
import css from './ProductCard.module.scss';
import { Product } from '@/redux/products/slice';
import { useAppDispatch } from '@/redux/hooks';
import { addItem } from '@/redux/cart/slice';
import toast from 'react-hot-toast';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { addToWishList, removeFromWishList } from '@/redux/wishlist/slice';
import { selectWishListItems } from '@/redux/wishlist/selectors';
import { useSelector } from 'react-redux';

export interface ProductCardProps {
    product: Product;
    view?: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, view }) => {
    const dispatch = useAppDispatch();
    const [isZoomed, setIsZoomed] = useState(false);
    const wish = useSelector(selectWishListItems);

    const handleAddToCart = () => {
        dispatch(
            addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                img: product.img,
            })
        );
        toast.success('Product successfully added to cart!');
    };

    const isFavorite = useMemo(
        () => wish.some(item => item.id === product.id),
        [wish, product.id]
    );

    const handleAddToFavorites = () => {
        if (isFavorite) {
            dispatch(removeFromWishList(product.id));
        } else {
            dispatch(addToWishList(product));
        }
        toast.success('Product successfully added to favorites!');
    };
    return (
        <div
            className={`${css.card} ${
                view === 'list' ? css.listCard : css.gridCard
            }`}
        >
            <Image
                className={isZoomed ? css['img-zoomed'] : css.img}
                src={product.img}
                alt="Product"
                width={288}
                height={200}
                priority
                onClick={() => setIsZoomed(false)}
            />

            <div
                className={`${
                    view === 'list' ? css.listContainer : css.gridContainer
                }`}
            >
                <Link href={`/products/${product.id}`}>
                    <div>
                        <div
                            className={`${
                                view === 'list' ? css.listTop : css.gridTop
                            }`}
                        >
                            <h3 className="text-bold">{product.name}</h3>
                            <div
                                className={`${
                                    view === 'list'
                                        ? css.listStars
                                        : css.gridStars
                                }`}
                            >
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
                        </div>
                        <div className={css.box}>
                            <p className={css.text}>
                                ${product.price.toFixed(2)}
                            </p>
                            <p className="placeholder out">
                                ${product.oldPrice.toFixed(2)}
                            </p>
                        </div>
                        <p className="text">{product.description}</p>
                    </div>
                </Link>

                <ul
                    className={`${
                        view === 'list' ? css.listList : css.gridList
                    }`}
                >
                    <li className={css.item} onClick={handleAddToCart}>
                        <svg className={css.icon} width="22" height="22">
                            <use href="/img/sprite.svg#icon-busket"></use>
                        </svg>
                    </li>
                    <li className={css.item} onClick={handleAddToFavorites}>
                        <svg
                            className={`${
                                isFavorite ? css.favorite : css.icon
                            }`}
                            width="22"
                            height="22"
                        >
                            <use href="/img/sprite.svg#icon-heart"></use>
                        </svg>
                    </li>
                    <li
                        className={css.item}
                        onClick={() => setIsZoomed(!isZoomed)}
                    >
                        <svg className={css.icon} width="22" height="22">
                            <use href="/img/sprite.svg#icon-scale"></use>
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductCard;
