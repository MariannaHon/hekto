import Link from 'next/link';
import css from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.wrapper}>
                <div className={css.left}>
                    <Link href="/">
                        <svg width="103" height="30">
                            <use href="/img/sprite.svg#icon-logo"></use>
                        </svg>
                    </Link>
                    <div className={css.email}>
                        <input
                            className={css.input}
                            type="email"
                            placeholder="Enter Email Address"
                        />
                        <button className={css.btn} type="submit">
                            Sign Up
                        </button>
                    </div>
                    <p className="text">
                        17 Princess Road, London, Greater London NW1 8JR, UK
                    </p>
                </div>
                <table className={css.table}>
                    <thead>
                        <tr>
                            <td className={css.title}>Categories</td>
                            <td className={css.title}>Customer Care</td>
                            <td className={css.title}>Pages</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text">Laptops & Computers</td>
                            <td className="text">My Account</td>
                            <td className="text">Blog</td>
                        </tr>
                        <tr>
                            <td className="text">Cameras & Photography</td>
                            <td className="text">Discount</td>
                            <td className="text">Browse the Shop</td>
                        </tr>
                        <tr>
                            <td className="text">Smart Phones & Tablets</td>
                            <td className="text">Returns</td>
                            <td className="text">Category</td>
                        </tr>
                        <tr>
                            <td className="text">Video Games & Consoles</td>
                            <td className="text">Orders History</td>
                            <td className="text">Pre-Built Pages</td>
                        </tr>
                        <tr>
                            <td className="text">Waterproof Headphones</td>
                            <td className="text">Order Tracking</td>
                            <td className="text">Visual Composer Elements</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </footer>
    );
};

export default Footer;
