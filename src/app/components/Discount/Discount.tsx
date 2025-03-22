'use client';

import css from './Discount.module.scss';
import Headphones from './Headphones';
import Laptop from './Laptop';
import Other from './Other';

import { useState } from 'react';

const Discount = () => {
    const [activeTab, setActiveTab] = useState<string>('Headphones');

    const renderContent = () => {
        switch (activeTab) {
            case 'Headphones':
                return <Headphones />;
            case 'Laptop':
                return <Laptop />;
            case 'Other':
                return <Other />;
            default:
                return null;
        }
    };

    const list = ['Headphones', 'Laptop', 'Other'];

    return (
        <section className="container">
            <div className="wrapper">
                <h2 className="subtitle mb-24">Discount Item</h2>
                <ul className={css.list}>
                    {list.map(tab => (
                        <li
                            key={tab}
                            className={`${css.link} ${
                                activeTab === tab ? css.active : ''
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
                <div className={css.content}>{renderContent()}</div>
            </div>
        </section>
    );
};
export default Discount;
