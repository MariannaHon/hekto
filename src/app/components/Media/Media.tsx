import Link from 'next/link';
import css from './Media.module.scss';

const Media = () => {
    return (
        <footer className={css.footer}>
            <div className="container">
                <p className="placeholder">©Webecy - All Rights Reserved</p>
                <ul className={css.list}>
                    <li className={css.item}>
                        <Link className={css.link} href="">
                            <svg className={css.icon} width="16" height="16">
                                <use href="/img/sprite.svg#icon-fb"></use>
                            </svg>
                        </Link>
                    </li>
                    <li className={css.item}>
                        <Link className={css.link} href="">
                            <svg className={css.icon} width="16" height="16">
                                <use href="/img/sprite.svg#icon-tw"></use>
                            </svg>
                        </Link>
                    </li>
                    <li className={css.item}>
                        <Link className={css.link} href="">
                            <svg className={css.icon} width="16" height="16">
                                <use href="/img/sprite.svg#icon-inst"></use>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Media;
