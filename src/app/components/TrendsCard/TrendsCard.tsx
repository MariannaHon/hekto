import css from './TrendsCard.module.scss';
import { ProductCardProps } from '../ProductCard/ProductCard';
import Image from 'next/image';

const TrendsCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className={css.card}>
            <Image
                className={css.img}
                src={product.img}
                alt="Product"
                width={272}
                height={232}
            />
            <h4 className="pink-title">{product.name}</h4>
            <div className={css.box}>
                <p className={css.text}>${product.price}</p>
                <p className="placeholder out">${product.oldPrice}</p>
            </div>
        </div>
    );
};

export default TrendsCard;
