import Link from 'next/link';
import css from './Header.module.scss';
import Lang from './Lang';
import Currency from './Currency';

const Header = () => {
    return (
        <header className={css.header}>
            <nav className="container">
                <ul className={css.contacts}>
                    <li className="white-text">
                        <Link
                            className={css.link}
                            href="mailto:mhhasanul@gmail.com"
                        >
                            <svg
                                className={css.contactIcon}
                                width="16"
                                height="16"
                            >
                                <use href="/img/sprite.svg#icon-mail"></use>
                            </svg>
                            mhhasanul@gmail.com
                        </Link>
                    </li>
                    <li className="white-text">
                        <Link className={css.link} href="tel:+1234567890">
                            <svg
                                className={css.contactIcon}
                                width="16"
                                height="16"
                            >
                                <use href="/img/sprite.svg#icon-phone"></use>
                            </svg>
                            (12345)67890
                        </Link>
                    </li>
                </ul>
                <ul className={css.list}>
                    <li className={`white-text && ${css.item}`}>
                        <Lang />
                    </li>
                    <li className="white-text">
                        <Currency />
                    </li>
                    <li className="white-text">
                        <Link href="" className={css.link}>
                            Login
                            <svg className={css.icon} width="16" height="16">
                                <use href="/img/sprite.svg#icon-user"></use>
                            </svg>
                        </Link>
                    </li>
                    <li className="white-text">
                        <Link className={css.link} href="/wishlist">
                            Wishlist
                            <svg className={css.icon} width="16" height="16">
                                <use href="/img/sprite.svg#icon-heart"></use>
                            </svg>
                        </Link>
                    </li>
                    <li className="white-text">
                        <Link className={css.link} href="/cart">
                            <svg className={css.icon} width="16" height="16">
                                <use href="/img/sprite.svg#icon-busket"></use>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
