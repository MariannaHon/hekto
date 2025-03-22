import Image from 'next/image';
import css from './Unique.module.scss';
import AddBtn from '../AddBtn/AddBtn';

import { useSelector } from 'react-redux';
import { selectProducts } from '@/redux/products/selectors';

const Unique = () => {
    const products = useSelector(selectProducts);

    const product = products.find(item => item.id?.toString() === '14');

    if (!product) return <p>Product not found</p>;

    return (
        <section className={css.unique}>
            <div className="container">
                <Image
                    className={css.img}
                    alt="Unique product"
                    src={product.img}
                    width={640}
                    height={576}
                />
                <div className={css.right}>
                    <h2 className="small-title mb-48">
                        Unique Features Of latest & Trending Poducts
                    </h2>
                    <ul className={css.list}>
                        <li className={css.item}>
                            <p>
                                All frames constructed with hardwood solids and
                                laminates
                            </p>
                        </li>
                        <li className={css.item}>
                            <p>
                                Reinforced with double wood dowels, glue, screw
                                - nails corner
                            </p>
                        </li>
                        <li className={css.item}>
                            <p>
                                Arms, backs and seats are structurally
                                reinforced
                            </p>
                        </li>
                    </ul>
                    <div className={css.box}>
                        <AddBtn product={product} />
                        <p className={css.text}>B&B Italian Sofa $32.00</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Unique;
