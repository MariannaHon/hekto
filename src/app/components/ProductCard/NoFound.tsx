import css from './ProductCard.module.scss';

const NoFound = () => {
    return (
        <div className={css.not}>
            <h2 className={css.notTitle}>
                No products were found for your query!
            </h2>
        </div>
    );
};

export default NoFound;
