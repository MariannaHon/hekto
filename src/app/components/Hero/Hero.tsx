import ShopBtn from '../ShopBtn/ShopBtn';
import css from './Hero.module.scss';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className={css.hero}>
            <Image
                className={css.img}
                priority
                src="/img/lamp.png"
                width="387"
                height="387"
                alt="Black lamp"
            />
            <div className={css.box}>
                <div className={css.text}>
                    <h3 className="pink-title mb-16 spec">
                        Best Headphones For Your Life....
                    </h3>
                    <h1 className="main-title mb-16">
                        New Trendy Collection Headphones
                    </h1>
                    <p className="text mb-24">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magna in est adipiscing in phasellus non in justo.
                    </p>
                    <ShopBtn />
                </div>
                <div className={css.product}>
                    <Image
                        src="/img/white-headphones.png"
                        priority
                        width="706"
                        height="692"
                        alt="New product with discount"
                    />
                    <Image
                        className={css.discount}
                        src="/img/discount.png"
                        width="136"
                        height="138"
                        alt="Discount 50%"
                    />
                </div>
            </div>
            <div className={css.dots}>
                <svg className={css.dot} width="12" height="12">
                    <use href="/img/sprite.svg#icon-rectangle"></use>
                </svg>
                <svg className={css.dot} width="12" height="12">
                    <use href="/img/sprite.svg#icon-rectangle"></use>
                </svg>
                <svg className={css.dot} width="12" height="12">
                    <use href="/img/sprite.svg#icon-rectangle"></use>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
