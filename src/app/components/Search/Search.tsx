'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import css from './Search.module.scss';
import { useSelector } from 'react-redux';
import { selectNameFilter } from '@/redux/filters/selectors';
import { search } from '@/redux/filters/slice';
import { useAppDispatch } from '@/redux/hooks';

const Search = () => {
    const dispatch = useAppDispatch();
    const filter = useSelector(selectNameFilter);
    const router = useRouter();

    useEffect(() => {
        if (filter) {
            router.push('/products');
        }
    }, [filter, router]);

    return (
        <div className={css.box}>
            <input
                className={css.input}
                value={filter}
                onChange={e => dispatch(search(e.target.value))}
                type="text"
                placeholder="Search"
            />
            <button className={css.search} type="submit">
                <svg className={css.icon} width="24" height="24">
                    <use href="/img/sprite.svg#icon-search"></use>
                </svg>
            </button>
        </div>
    );
};

export default Search;
