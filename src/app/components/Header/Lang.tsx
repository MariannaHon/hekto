'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import css from './Header.module.scss';
import { useState } from 'react';

const Lang = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const handleSelect = (language: string) => {
        setSelectedLanguage(language);
    };

    return (
        <Menu>
            <MenuButton className={css.select}>
                {selectedLanguage}
                <svg className={css.arrow} width="16" height="16">
                    <use href="/img/sprite.svg#icon-arrow"></use>
                </svg>
            </MenuButton>
            <MenuItems className={css.options} anchor="bottom">
                {['English', 'Polish', 'Ukrainian'].map(language => (
                    <MenuItem key={language}>
                        {({ active }) => (
                            <div
                                className={`${css.option} ${
                                    active ? css.active : ''
                                }`}
                                onClick={() => handleSelect(language)}
                            >
                                {language}
                            </div>
                        )}
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    );
};
export default Lang;
