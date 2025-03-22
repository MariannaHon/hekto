'use client';

import css from './Sort.module.scss';
import { useRef, useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import {
    changePage,
    changeLimit,
    changeSortOrder,
    changeViewMode,
} from '@/redux/products/slice';

const Sort: React.FC<React.HTMLAttributes<HTMLElement>> = ({ ...props }) => {
    const paginationRef = useRef<HTMLDivElement>(null);
    const priceRef = useRef<HTMLDivElement>(null);
    const [showPaginationOptions, setShowPaginationOptions] = useState(false);
    const [showPriceOptions, setShowPriceOptions] = useState(false);
    const [perPageValue, setPerPageValue] = useState('10');
    const [sortOrder, setSortOrder] = useState<'high' | 'low' | null>(null);
    const [activeViewMode, setActiveViewMode] = useState<'grid' | 'list'>(
        'list'
    );

    const dispatch = useAppDispatch();

    const handlePaginationClick = () => {
        setShowPaginationOptions(!showPaginationOptions);
    };

    const handlePriceClick = () => {
        setShowPriceOptions(!showPriceOptions);
    };

    const handlePerPageChange = (limit: number, value: string) => {
        dispatch(changeLimit(limit));
        dispatch(changePage(1));
        setShowPaginationOptions(false);
        setPerPageValue(value);
    };

    const handleSortChange = (order: 'high' | 'low') => {
        dispatch(changeSortOrder(order));
        setSortOrder(order);
        setShowPriceOptions(false);
    };

    const handleViewModeChange = (mode: 'grid' | 'list') => {
        dispatch(changeViewMode(mode));
        setActiveViewMode(mode);
    };

    return (
        <div {...props} className={`${css.container} ${props.className}`}>
            <div className={css.wrapper}>
                <label className="text" htmlFor="pagination">
                    Per Page
                </label>
                <div className={css.select}>
                    <input
                        className={css.input}
                        name="pagination"
                        id="pagination"
                        readOnly
                        placeholder={perPageValue}
                    />
                    <svg
                        onClick={handlePaginationClick}
                        className={css.arrow}
                        width="16"
                        height="16"
                    >
                        <use href="/img/sprite.svg#icon-arrow"></use>
                    </svg>
                    <div
                        ref={paginationRef}
                        className={css.options}
                        style={{
                            display: showPaginationOptions ? 'flex' : 'none',
                        }}
                    >
                        <div
                            className={css.option}
                            data-value="5"
                            onClick={() => handlePerPageChange(5, '5')}
                        >
                            5
                        </div>
                        <div
                            className={css.option}
                            data-value="10"
                            onClick={() => handlePerPageChange(10, '10')}
                        >
                            10
                        </div>
                        <div
                            className={css.option}
                            data-value="15"
                            onClick={() => handlePerPageChange(15, '15')}
                        >
                            15
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.wrapper}>
                <label className="text" htmlFor="sort">
                    Sort by
                </label>
                <div className={css.selectSort}>
                    <input
                        className={css.inputSort}
                        name="sort"
                        id="sort"
                        readOnly
                        placeholder={
                            sortOrder === 'high'
                                ? 'Price: High -> Low'
                                : sortOrder === 'low'
                                ? 'Price: Low -> High'
                                : 'Price: High -> Low'
                        }
                    />
                    <svg
                        onClick={handlePriceClick}
                        className={css.arrow}
                        width="16"
                        height="16"
                    >
                        <use href="/img/sprite.svg#icon-arrow"></use>
                    </svg>
                    <div
                        ref={priceRef}
                        className={css.optionsSort}
                        style={{ display: showPriceOptions ? 'flex' : 'none' }}
                    >
                        <div
                            className={css.option}
                            data-value="high"
                            onClick={() => handleSortChange('high')}
                        >
                            Price: High {'->'} Low
                        </div>
                        <div
                            className={css.option}
                            data-value="low"
                            onClick={() => handleSortChange('low')}
                        >
                            Price: Low {'->'} High
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.wrapper}>
                <p className="text">View</p>
                <span
                    className={`${
                        activeViewMode === 'grid' ? css.active : css.icon
                    }`}
                    onClick={() => handleViewModeChange('grid')}
                >
                    <svg width="24" height="24">
                        <use href="/img/sort.svg#icon-grid"></use>
                    </svg>
                </span>
                <span
                    className={`${
                        activeViewMode === 'list' ? css.active : css.icon
                    }`}
                    onClick={() => handleViewModeChange('list')}
                >
                    <svg width="24" height="24">
                        <use href="/img/sort.svg#icon-list"></use>
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default Sort;
