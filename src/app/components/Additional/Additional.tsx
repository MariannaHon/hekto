'use client';

import css from './Additional.module.scss';
import Description from './Description';
import Info from './Info';
import Reviews from './Reviews';
import Video from './Video';

import { useState } from 'react';

const Additional = () => {
    const [activeTab, setActiveTab] = useState<string>('Description');

    const renderContent = () => {
        switch (activeTab) {
            case 'Description':
                return <Description />;
            case 'Additional Info':
                return <Info />;
            case 'Reviews':
                return <Reviews />;
            case 'Video':
                return <Video />;
            default:
                return null;
        }
    };

    const list = ['Description', 'Additional Info', 'Reviews', 'Video'];

    return (
        <div className={css.add}>
            <div className={css.container}>
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
        </div>
    );
};

export default Additional;
