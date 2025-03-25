'use client';

import css from './Filters.module.scss';
import { changeFilter } from '@/redux/filters/slice';
import { useAppDispatch } from '@/redux/hooks';
import { useSelector } from 'react-redux';
import {
    selectBrandFilter,
    selectCategoriesFilter,
    selectDiscountFilter,
    selectPriceFilter,
    selectRatingFilter,
} from '@/redux/filters/selectors';
import { useState, useEffect } from 'react';
import { FilterType } from '@/redux/filters/slice';

const Filters: React.FC<React.HTMLAttributes<HTMLElement>> = ({ ...props }) => {
    const dispatch = useAppDispatch();

    const brand = useSelector(selectBrandFilter);
    const categories = useSelector(selectCategoriesFilter);
    const discount = useSelector(selectDiscountFilter);
    const price = useSelector(selectPriceFilter);
    const rating = useSelector(selectRatingFilter);

    const [brandFilters, setBrandFilters] = useState<string[]>(brand);
    const [categoriesFilters, setCategoriesFilters] =
        useState<string[]>(categories);
    const [discountFilters, setDiscountFilters] = useState<string[]>(discount);
    const [priceFilters, setPriceFilters] = useState<number[]>(price);
    const [ratingFilters, setRatingFilters] = useState<number[]>(rating);

    useEffect(() => {
        setBrandFilters(brand);
    }, [brand]);

    useEffect(() => {
        setCategoriesFilters(categories);
    }, [categories]);

    useEffect(() => {
        setDiscountFilters(discount);
    }, [discount]);

    useEffect(() => {
        setPriceFilters(price);
    }, [price]);

    useEffect(() => {
        setRatingFilters(rating);
    }, [rating]);

    const handleCheckboxChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        filterType: FilterType
    ) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        switch (filterType) {
            case FilterType.Brand:
                const newBrandFilters = isChecked
                    ? [...brandFilters, value]
                    : brandFilters.filter(item => item !== value);
                setBrandFilters(newBrandFilters);
                dispatch(
                    changeFilter({ filter: filterType, value: newBrandFilters })
                );
                break;
            case FilterType.Categories:
                const newCategoriesFilters = isChecked
                    ? [...categoriesFilters, value]
                    : categoriesFilters.filter(item => item !== value);
                setCategoriesFilters(newCategoriesFilters);
                dispatch(
                    changeFilter({
                        filter: filterType,
                        value: newCategoriesFilters,
                    })
                );
                break;
            case FilterType.Discount:
                const newDiscountFilters = isChecked
                    ? [...discountFilters, value]
                    : discountFilters.filter(item => item !== value);
                setDiscountFilters(newDiscountFilters);
                dispatch(
                    changeFilter({
                        filter: filterType,
                        value: newDiscountFilters,
                    })
                );
                break;
            case FilterType.Price:
                const priceValue = parseInt(value);
                const newPriceFilters = isChecked
                    ? [...priceFilters, priceValue]
                    : priceFilters.filter(item => item !== priceValue);

                setPriceFilters(newPriceFilters);
                dispatch(
                    changeFilter({ filter: filterType, value: newPriceFilters })
                );
                break;
            case FilterType.Rating:
                const ratingValue = parseInt(value);
                const newRatingFilters = isChecked
                    ? [...ratingFilters, ratingValue]
                    : ratingFilters.filter(item => item !== ratingValue);
                setRatingFilters(newRatingFilters);
                dispatch(
                    changeFilter({
                        filter: filterType,
                        value: newRatingFilters,
                    })
                );
                break;
            default:
                break;
        }
    };

    return (
        <aside {...props} className={`${css.aside} ${props.className}`}>
            <fieldset className={css.field}>
                <legend className={css.legend}>Product Brand</legend>
                {['casio', 'apple', 'sony', 'nike', 'vke', 'glossiness'].map(
                    brandName => (
                        <div className={css.label} key={brandName}>
                            <label className="text">
                                <input
                                    className={css.input}
                                    type="checkbox"
                                    id={brandName}
                                    name={brandName}
                                    value={brandName}
                                    checked={brandFilters.includes(brandName)}
                                    onChange={e =>
                                        handleCheckboxChange(
                                            e,
                                            FilterType.Brand
                                        )
                                    }
                                />
                                <span className={css.violet}>
                                    <svg width="18" height="18">
                                        <use href="/img/sprite.svg#icon-checked"></use>
                                    </svg>
                                    <svg
                                        className={css.check}
                                        width="10"
                                        height="8"
                                    >
                                        <use href="/img/sprite.svg#icon-vector"></use>
                                    </svg>
                                </span>
                                {brandName.charAt(0).toUpperCase() +
                                    brandName.slice(1)}
                            </label>
                        </div>
                    )
                )}
            </fieldset>
            <fieldset className={css.field}>
                <legend className={css.legend}>Discount Offer</legend>
                {['20', '5', '25'].map(discountValue => (
                    <div className={css.label} key={discountValue}>
                        <label className="text">
                            <input
                                className={css.input}
                                type="checkbox"
                                id={discountValue}
                                name={discountValue}
                                value={discountValue}
                                checked={discountFilters.includes(
                                    discountValue
                                )}
                                onChange={e =>
                                    handleCheckboxChange(e, FilterType.Discount)
                                }
                            />
                            <span className={css.pink}>
                                <svg width="18" height="18">
                                    <use href="/img/sprite.svg#icon-checked"></use>
                                </svg>
                                <svg
                                    className={css.check}
                                    width="10"
                                    height="8"
                                >
                                    <use href="/img/sprite.svg#icon-vector"></use>
                                </svg>
                            </span>
                            {discountValue}% Cashback
                        </label>
                    </div>
                ))}
            </fieldset>
            <fieldset className={css.field}>
                <legend className={css.legend}>Rating</legend>
                {[5, 4, 3, 2, 1].map(ratingValue => (
                    <div className={css.label} key={ratingValue}>
                        <label className="text">
                            <input
                                className={css.input}
                                type="checkbox"
                                id={'ratingValue'}
                                name={'ratingValue'}
                                value={ratingValue}
                                checked={ratingFilters.includes(ratingValue)}
                                onChange={e =>
                                    handleCheckboxChange(e, FilterType.Rating)
                                }
                            />
                            <span className={css.yellow}>
                                <svg width="18" height="18">
                                    <use href="/img/sprite.svg#icon-checked"></use>
                                </svg>
                                <svg
                                    className={css.check}
                                    width="10"
                                    height="8"
                                >
                                    <use href="/img/sprite.svg#icon-vector"></use>
                                </svg>
                            </span>
                            <div className={css.stars}>
                                {Array.from({ length: 5 }, (_, index) => (
                                    <svg
                                        key={index}
                                        className={
                                            index < ratingValue
                                                ? css.bright
                                                : css.star
                                        }
                                        width="18"
                                        height="18"
                                    >
                                        <use href="/img/sprite.svg#icon-star"></use>
                                    </svg>
                                ))}
                            </div>
                        </label>
                    </div>
                ))}
            </fieldset>
            <fieldset className={css.field}>
                <legend className={css.legend}>Categories</legend>
                {[
                    'watches',
                    'headphones',
                    'laptop',
                    'console',
                    'clothe',
                    'jewellery',
                    'perfume',
                ].map(categoryValue => (
                    <div className={css.label} key={categoryValue}>
                        <label className="text">
                            <input
                                className={css.input}
                                type="checkbox"
                                id={categoryValue}
                                name={categoryValue}
                                value={categoryValue}
                                checked={categoriesFilters.includes(
                                    categoryValue
                                )}
                                onChange={e =>
                                    handleCheckboxChange(
                                        e,
                                        FilterType.Categories
                                    )
                                }
                            />
                            <span className={css.pink}>
                                <svg width="18" height="18">
                                    <use href="/img/sprite.svg#icon-checked"></use>
                                </svg>
                                <svg
                                    className={css.check}
                                    width="10"
                                    height="8"
                                >
                                    <use href="/img/sprite.svg#icon-vector"></use>
                                </svg>
                            </span>
                            {categoryValue.charAt(0).toUpperCase() +
                                categoryValue.slice(1)}
                        </label>
                    </div>
                ))}
            </fieldset>
            <fieldset className={css.field}>
                <legend className={css.legend}>Price</legend>
                {[150, 350, 500, 800].map((priceValue, index, array) => {
                    const minPrice = index === 0 ? 0 : array[index - 1];
                    const maxPrice = priceValue;
                    return (
                        <div className={css.label} key={priceValue}>
                            <label className="text">
                                <input
                                    className={css.input}
                                    type="checkbox"
                                    id={'priceValue'}
                                    name={'priceValue'}
                                    value={priceValue}
                                    checked={priceFilters.includes(priceValue)}
                                    onChange={e =>
                                        handleCheckboxChange(
                                            e,
                                            FilterType.Price
                                        )
                                    }
                                />
                                <span className={css.pink}>
                                    <svg width="18" height="18">
                                        <use href="/img/sprite.svg#icon-checked"></use>
                                    </svg>
                                    <svg
                                        className={css.check}
                                        width="10"
                                        height="8"
                                    >
                                        <use href="/img/sprite.svg#icon-vector"></use>
                                    </svg>
                                </span>
                                {`$${minPrice} - $${maxPrice}`}
                            </label>
                        </div>
                    );
                })}
                <div className={css.label}>
                    <label className="text">
                        <input
                            className={css.input}
                            type="checkbox"
                            id="900"
                            name="900"
                            value="900"
                            checked={priceFilters.includes(900)}
                            onChange={e =>
                                handleCheckboxChange(e, FilterType.Price)
                            }
                        />
                        <span className={css.pink}>
                            <svg width="18" height="18">
                                <use href="/img/sprite.svg#icon-checked"></use>
                            </svg>
                            <svg className={css.check} width="10" height="8">
                                <use href="/img/sprite.svg#icon-vector"></use>
                            </svg>
                        </span>
                        $800+
                    </label>
                </div>
            </fieldset>
        </aside>
    );
};

export default Filters;
