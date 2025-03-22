'use client';

import Image from 'next/image';
import css from './Item.module.scss';
import { cartItem } from '@/redux/cart/slice';
import { useAppDispatch } from '@/redux/hooks';
import { increaseItemQuantity, decreaseItemQuantity } from '@/redux/cart/slice';
interface ItemProps {
    item: cartItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
    const cartAmount = item.quantity * item.price;
    const dispatch = useAppDispatch();

    const handleIncrease = () => {
        if (item.id) {
            dispatch(increaseItemQuantity(item.id));
        }
    };

    const handleDecrease = () => {
        if (item.id) {
            dispatch(decreaseItemQuantity(item.id));
        }
    };

    return (
        <div className={css.item}>
            <Image src={item.img} alt={item.name} width={149} height={104} />
            <div className={css.container}>
                <div className={css.name}>
                    <h2 className={css.title}>{item.name}</h2>
                    <p className={css.text}>${item.price.toFixed(2)}</p>
                </div>
                <div className={css.amount}>
                    <button onClick={handleDecrease} className={css.btn}>
                        -
                    </button>
                    <p className={css.number}>{item.quantity}</p>
                    <button onClick={handleIncrease} className={css.btn}>
                        +
                    </button>
                </div>
                <p className={css.text}>${cartAmount.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Item;
