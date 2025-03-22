import Image from 'next/image';
import css from './Additional.module.scss';

const Video = () => {
    return (
        <div className={css.box}>
            <video className={css.video}>
                <source src="/img/video.mp4" type="video/mp4" />
                <Image
                    src="/img/img.jpg"
                    width={478}
                    height={416}
                    alt="Your browser is not supported!"
                />
            </video>
            <Image
                className={css.play}
                src="/img/play.png"
                width={48}
                height={48}
                alt="play button"
            />
        </div>
    );
};

export default Video;
