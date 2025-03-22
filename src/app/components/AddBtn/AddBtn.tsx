'use client';

import { toast } from 'react-hot-toast';

import css from './AddBtn.module.scss';
import { useAppDispatch } from '@/redux/hooks';
import { addItem } from '@/redux/cart/slice';

import { cartItem } from '@/redux/cart/slice';
interface AddBtnProps {
    product: cartItem;
}

const AddBtn: React.FC<AddBtnProps> = ({ product }) => {
    const dispatch = useAppDispatch();

    const notify = () => toast.success('Product successfully added to cart!');

    const handleAddToCart = () => {
        dispatch(
            addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                img: product.img,
            })
        );
        notify();
    };

    return (
        <>
            <button onClick={handleAddToCart} className={css.btn} type="submit">
                Add To Cart
            </button>
        </>
    );
};

export default AddBtn;
