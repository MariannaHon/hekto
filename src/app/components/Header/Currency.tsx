'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import css from './Header.module.scss';
import { useState } from 'react';

const Currency = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('USD');

    const handleSelect = (cur: string) => {
        setSelectedCurrency(cur);
    };

    return (
        <Menu>
            <MenuButton className={css.select}>
                {selectedCurrency}
                <svg className={css.arrow} width="16" height="16">
                    <use href="/img/sprite.svg#icon-arrow"></use>
                </svg>
            </MenuButton>
            <MenuItems className={css.options} anchor="bottom">
                {['USD', 'PLN', 'UAH'].map(cur => (
                    <MenuItem key={cur}>
                        {({ active }) => (
                            <div
                                className={`${css.option} ${
                                    active ? css.active : ''
                                }`}
                                onClick={() => handleSelect(cur)}
                            >
                                {cur}
                            </div>
                        )}
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    );
};
export default Currency;
