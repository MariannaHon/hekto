import css from './Additional.module.scss';

const Description = () => {
    return (
        <div>
            <h4 className={css.title}>Varius tempor.</h4>
            <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                quam dolor. In dignissim lectus sed nisl tempor, ac porttitor
                libero consectetur. Pellentesque diam dolor, tincidunt nec ante
                congue, tincidunt facilisis tortor. Mauris vitae massa molestie,
                sagittis ligula vel, egestas massa. Phasellus quis sodales
                augue. Donec nec ultricies diam. Integer feugiat odio ut dictum
                viverra. Donec vehicula nisi placerat cursus mollis. Nunc
                aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis
                nisl sed dictum. Maecenas quam risus, congue quis accumsan at,
                imperdiet sed lectus. Aliquam in est purus
            </p>
            <h4 className={css.title}>More details</h4>
            <ul>
                <li className={css.details}>
                    <svg className={css.icon} width="16" height="16">
                        <use href="/img/sprite.svg#icon-check"></use>
                    </svg>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras ac quam dolor. In dignissim lectus sed nisl tempor,
                        ac porttitor libero consectetur.
                    </p>
                </li>
                <li className={css.details}>
                    <svg className={css.icon} width="16" height="16">
                        <use href="/img/sprite.svg#icon-check"></use>
                    </svg>
                    <p className="text">
                        Cras ac quam dolor. In dignissim lectus sed nisl tempor,
                        ac porttitor libero consectetur. Pellentesque diam
                        dolor, tincidunt nec ante.
                    </p>
                </li>
                <li className={css.details}>
                    <svg className={css.icon} width="16" height="16">
                        <use href="/img/sprite.svg#icon-check"></use>
                    </svg>
                    <p className="text">
                        Pellentesque diam dolor, tincidunt nec ante congue,
                        tincidunt facilisis tortor.
                    </p>
                </li>
                <li className={css.details}>
                    <svg className={css.icon} width="16" height="16">
                        <use href="/img/sprite.svg#icon-check"></use>
                    </svg>
                    <p className="text">
                        Mauris vitae massa molestie, sagittis ligula vel,
                        egestas massa. Phasellus quis sodales augue. Donec nec
                        ultricies diam.
                    </p>
                </li>
                <li className={css.details}>
                    <svg className={css.icon} width="16" height="16">
                        <use href="/img/sprite.svg#icon-check"></use>
                    </svg>
                    <p className="text">
                        Phasellus quis sodales augue. Integer feugiat odio ut
                        dictum viverra.
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Description;
