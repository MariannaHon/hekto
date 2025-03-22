'use client';

import { useState } from 'react';

import Best from './Best';
import Featured from './Featured';
import css from './Latest.module.scss';
import New from './New';
import Special from './Special';

const Latest: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('New Arrival');

    const renderContent = () => {
        switch (activeTab) {
            case 'New Arrival':
                return <New />;
            case 'Best Seller':
                return <Best />;
            case 'Featured':
                return <Featured />;
            case 'Special Offer':
                return <Special />;
            default:
                return null;
        }
    };
    const list = ['New Arrival', 'Best Seller', 'Featured', 'Special Offer'];

    return (
        <section className="container">
            <div className="wrapper">
                <h2 className="subtitle mb-16">Leatest Products</h2>
                <ul className={css.list}>
                    {list.map(tab => (
                        <li
                            key={tab}
                            className={`${css.item} ${
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

export default Latest;
