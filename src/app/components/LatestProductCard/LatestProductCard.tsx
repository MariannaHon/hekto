import Image from 'next/image';
import css from './LatestProductCard.module.scss';
import { ProductCardProps } from '../ProductCard/ProductCard';
import { useState, useMemo } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { addItem } from '@/redux/cart/slice';
import toast from 'react-hot-toast';
import { addToWishlist, removeFromWishlist } from '@/redux/wishlist/slice';
import { selectWishlistItems } from '@/redux/wishlist/selectors';
import { useSelector } from 'react-redux';

const LatestProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
            {product.sale === true && (
                <Image
                    className={css.sale}
                    alt="Sale"
                    src="/img/sale.png"
                    width={85}
                    height={56}
                />
            )}

            <Image
                className={isZoomed ? css['img-zoomed'] : ''}
                alt="Cheap product"
                src={product.img}
                width={416}
                height={272}
            />
            <ul className={css.utils}>
                <li className={css.item} onClick={handleAddToCart}>
                    <svg className={css.icon} width="16" height="16">
                        <use href="/img/sprite.svg#icon-busket"></use>
                    </svg>
                </li>
                <li className={css.item} onClick={handleAddToFavorites}>
                    <svg
                        className={`${isFavorite ? css.favorite : css.icon}`}
                        width="16"
                        height="16"
                    >
                        <use href="/img/sprite.svg#icon-heart"></use>
                    </svg>
                </li>
                <li className={css.item} onClick={() => setIsZoomed(!isZoomed)}>
                    <svg className={css.icon} width="16" height="16">
                        <use href="/img/sprite.svg#icon-scale"></use>
                    </svg>
                </li>
            </ul>
            <div className={`${css.bottom} ${isZoomed ? css.hidden : ''}`}>
                <p className={css.name}>{product.name}</p>
                <p className={css.text}>${product.price.toFixed(2)}</p>
                <p className={css.price}>${product.oldPrice.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default LatestProductCard;
