import css from './ShopBtn.module.scss';
import Link from 'next/link';

const ShopBtn = () => {
    return (
        <Link href="/products" className={css.btn}>
            Shop now
        </Link>
    );
};

export default ShopBtn;
