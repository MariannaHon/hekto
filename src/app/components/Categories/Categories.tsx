'use client';

import CategoriesCard from '../CategoriesCard/CategoriesCard';
import { Product } from '@/redux/products/slice';
import css from './Categories.module.scss';

import { useSelector } from 'react-redux';
import {
    selectProducts,
    selectError,
    selectLoading,
} from '@/redux/products/selectors';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Categories: React.FC = () => {
    const products = useSelector(selectProducts);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectLoading);

    if (isLoading) {
        return <p>Loading...</p>;
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
                <h2 className="subtitle mb-48">Top Categories</h2>
                <>
                    <Swiper
                        slidesPerView={4}
                        modules={[Scrollbar, Keyboard, Mousewheel, Pagination]}
                        keyboard={{ enabled: true }}
                        mousewheel={true}
                        scrollbar={{ draggable: true }}
                        pagination={{ clickable: true }}
                        initialSlide={6}
                        className={`${css.list} categories-swiper`}
                    >
                        {products.map((product: Product) => (
                            <SwiperSlide
                                className={css.item}
                                key={product.name}
                            >
                                <CategoriesCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <style jsx global>{`
                        .categories-swiper .swiper-pagination-bullet {
                            border: 1px solid #ff66b2;
                            border-radius: 100%;
                            width: 1rem;
                            height: 1rem;
                            background: transparent;
                            margin: 6rem 0.4rem;
                        }
                        .categories-swiper .swiper-pagination-bullet-active {
                            background-color: #ff66b2;
                        }
                    `}</style>
                </>
            </div>
        </section>
    );
};

export default Categories;
