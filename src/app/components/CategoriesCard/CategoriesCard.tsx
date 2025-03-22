import css from './CategoriesCard.module.scss';
import { ProductCardProps } from '../ProductCard/ProductCard';
import Image from 'next/image';
import Link from 'next/link';

const CategoriesCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className={css.card}>
            <div className={css.box}>
                <Image
                    className={css.img}
                    src={product.img}
                    alt="Product"
                    width={272}
                    height={272}
                />
                <svg className={css.shadow} width="237" height="237">
                    <use href="/img/sprite.svg#icon-shadow"></use>
                </svg>
                <Link href={`/products/${product.id}`}>
                    <button className={css.btn} type="button">
                        View Category
                    </button>
                </Link>
            </div>
            <h4>{product.name}</h4>
            <div className={css.dots}></div>
        </div>
    );
};

export default CategoriesCard;
