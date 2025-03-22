import css from './Subscribe.module.scss';

const Subscribe = () => {
    return (
        <section className={css.subscribe}>
            <div className={css.wrapper}>
                <h2 className="subtitle mb-60">
                    Get Latest Update By Subscribe 0ur Newsletter
                </h2>
                <button className={css.btn} type="button">
                    Subscribe
                </button>
            </div>
        </section>
    );
};

export default Subscribe;
