'use client';

import FeaturedProductCard from '../FeaturedProductCard/FeaturedProductCard';
import css from './Featured.module.scss';
import { Product } from '@/redux/products/slice';

import { useSelector } from 'react-redux';
import {
    selectProducts,
    selectError,
    selectLoading,
} from '@/redux/products/selectors';

import Loader from '../Loader/Loader';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Featured: React.FC = () => {
    const products = useSelector(selectProducts);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectLoading);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!products) {
        return <p>No products found</p>;
    }

    return (
        <section className="container">
            <div className="wrapper">
                <h2 className="subtitle mb-48">Featured Products</h2>
                <>
                    <Swiper
                        slidesPerView={4}
                        modules={[Scrollbar, Keyboard, Mousewheel, Pagination]}
                        keyboard={{ enabled: true }}
                        mousewheel={true}
                        scrollbar={{ draggable: true }}
                        pagination={{ clickable: true }}
                        className={css.list}
                    >
                        {products.map((product: Product) => (
                            <SwiperSlide className={css.item} key={product.id}>
                                <FeaturedProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <style jsx global>{`
                        .swiper-pagination-bullet {
                            border-radius: 1rem;
                            width: 1.6rem;
                            height: 0.4rem;
                            background: #febad7;
                            margin: 6rem 0.4rem;
                        }
                        .swiper-pagination-bullet-active {
                            background-color: #ff66b2;
                            width: 2.4rem;
                        }
                    `}</style>
                </>
            </div>
        </section>
    );
};
export default Featured;
