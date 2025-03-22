'use client';

import Link from 'next/link';
import css from './Navigation.module.scss';
import Search from '../Search/Search';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const path = usePathname();

    return (
        <header className={css.menu}>
            <nav className="container">
                <Link className={css.logo} href="/">
                    <svg width="100" height="28">
                        <use href="/img/sprite.svg#icon-logo"></use>
                    </svg>
                </Link>
                <ul className={css.list}>
                    <li>
                        <Link
                            className={
                                path === '/' ? `${css.active}` : `${css.link}`
                            }
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                path === '/products'
                                    ? `${css.active}`
                                    : `${css.link}`
                            }
                            href="/products"
                        >
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                path === '/blog'
                                    ? `${css.active}`
                                    : `${css.link}`
                            }
                            href="/blog"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                path === '/contact'
                                    ? `${css.active}`
                                    : `${css.link}`
                            }
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <Search />
            </nav>
        </header>
    );
};

export default Navigation;
