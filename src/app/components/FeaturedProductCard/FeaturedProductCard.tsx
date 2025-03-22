import { useState, useMemo } from 'react';
import Image from 'next/image';
import css from './FeaturedProductCard.module.scss';
import { ProductCardProps } from '../ProductCard/ProductCard';
import { useAppDispatch } from '@/redux/hooks';
import { addItem } from '@/redux/cart/slice';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { addToWishlist, removeFromWishlist } from '@/redux/wishlist/slice';
import { selectWishlistItems } from '@/redux/wishlist/selectors';
import { useSelector } from 'react-redux';

const FeaturedProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const dispatch = useAppDispatch();
    const wish = useSelector(selectWishlistItems);

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
            dispatch(removeFromWishlist(product.id));
        } else {
            dispatch(addToWishlist(product));
        }
        toast.success('Product successfully added to favorites!');
    };

    return (
        <div className={`${css.card} ${isZoomed ? css['card-zoomed'] : ''}`}>
            <div className={css.top}>
                <Image
                    className={isZoomed ? css['img-zoomed'] : ''}
                    src={product.img}
                    alt="Product"
                    width={304}
                    height={232}
                />
                <ul className={css.list}>
                    <li className={css.item} onClick={handleAddToCart}>
                        <svg className={css.icon} width="16" height="16">
                            <use href="/img/sprite.svg#icon-busket"></use>
                        </svg>
                    </li>
                    <li className={css.item} onClick={handleAddToFavorites}>
                        <svg
                            className={`${
                                isFavorite ? css.favorite : css.icon
                            }`}
                            width="16"
                            height="16"
                        >
                            <use href="/img/sprite.svg#icon-heart"></use>
                        </svg>
                    </li>
                    <li
                        className={css.item}
                        onClick={() => setIsZoomed(!isZoomed)}
                    >
                        <svg className={css.icon} width="16" height="16">
                            <use href="/img/sprite.svg#icon-scale"></use>
                        </svg>
                    </li>
                </ul>
                <Link
                    className={isZoomed ? css.hidden : ''}
                    href={`/products/${product.id}`}
                >
                    <button id="details" className={css.btn} type="button">
                        View Details
                    </button>
                </Link>
            </div>
            <div className={`${css.bottom} ${isZoomed ? css.hidden : ''}`}>
                <h4 className="pink-title mb-24">{product.name}</h4>
                <p className="placeholder">{product.code}</p>
                <p className={css.text}>${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default FeaturedProductCard;
