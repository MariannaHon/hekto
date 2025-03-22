'use client';

import Item from '../components/Item/Item';
import Image from 'next/image';
import Link from 'next/link';
import css from './page.module.scss';

import { cartItem } from '@/redux/cart/slice';
import { useAppDispatch } from '@/redux/hooks';
import { useSelector } from 'react-redux';
import { selectCart, selectAmount } from '@/redux/cart/selectors';
import { clearCart } from '@/redux/cart/slice';

const Cart: React.FC = () => {
    const cartItems = useSelector(selectCart);
    const cartAmount = useSelector(selectAmount);

    const total = cartAmount + 100;

    const dispatch = useAppDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    if (cartItems.length === 0) {
        return (
            <section className={css.box}>
                <Image
                    className={css.img}
                    src="/img/empty.png"
                    alt="Empty cart"
                    width={387}
                    height={286}
                />
                <h2 className="small-title">Your cart is empty</h2>
                <Link href="/" className={css.start}>
                    Start Shopping
                </Link>
            </section>
        );
    }

    return (
        <main className="container">
            <section className={css.wrapper}>
                <ul className={css.list}>
                    {cartItems.map((item: cartItem) => (
                        <li key={item.id}>
                            <Item item={item} />
                        </li>
                    ))}
                </ul>
                <div className={css.right}>
                    <div className={css.summary}>
                        <ul className={css.list}>
                            <li className={css.item}>
                                <p className={css.text}>Subtotal:</p>
                                <p className={css.price}>
                                    ${cartAmount.toFixed(2)}
                                </p>
                            </li>
                            <li className={css.item}>
                                <p className={css.text}>Total:</p>
                                <p className={css.price}>${total.toFixed(2)}</p>
                            </li>
                            <li className={css.item}>
                                <p className="text">Shipping:</p>
                                <p className="text">$100.00</p>
                            </li>
                        </ul>

                        <button className={css.btn}>Proceed to checkout</button>
                    </div>
                    <button onClick={handleClearCart} className={css.clear}>
                        Clear cart
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Cart;
