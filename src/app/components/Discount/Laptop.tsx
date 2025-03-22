import Image from 'next/image';
import ShopBtn from '../ShopBtn/ShopBtn';
import css from './Discount.module.scss';

const Laptop = () => {
    return (
        <div className={css.box}>
            <div className={css.left}>
                <h3 className="small-title">20% Discount Of All Products</h3>
                <h4 className={css.title}>Laptop Compact</h4>
                <p className={css.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                    eget feugiat habitasse nec, bibendum condimentum.
                </p>
                <ul className={css.props}>
                    <li className={css.item}>
                        <svg className={css.icon} width="24" height="24">
                            <use href="/img/sprite.svg#icon-check"></use>
                        </svg>
                        Material expose like metals
                    </li>
                    <li className={css.item}>
                        <svg className={css.icon} width="24" height="24">
                            <use href="/img/sprite.svg#icon-check"></use>
                        </svg>
                        Simple neutral colours.
                    </li>
                    <li className={css.item}>
                        <svg className={css.icon} width="24" height="24">
                            <use href="/img/sprite.svg#icon-check"></use>
                        </svg>
                        Clear lines and geomatric figures
                    </li>
                    <li className={css.item}>
                        <svg className={css.icon} width="24" height="24">
                            <use href="/img/sprite.svg#icon-check"></use>
                        </svg>
                        Material expose like metals
                    </li>
                </ul>
                <ShopBtn />
            </div>
            <Image
                src="/img/laptop.jpg"
                priority
                width="529"
                height="498"
                alt="Product with discount"
            />
        </div>
    );
};
export default Laptop;
