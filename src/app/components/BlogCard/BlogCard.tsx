import Image from 'next/image';
import css from './BlogCard.module.scss';
import { Blog } from '@/redux/blog/slice';

interface BlogCardProps {
    post: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <div className={css.card}>
            <Image src={post.img} alt="Trend" width={416} height={255} />
            <div className={css.wrapper}>
                <div className={css.box}>
                    <div className={css.details}>
                        <svg className={css.icon} width="12" height="12">
                            <use href="/img/sprite.svg#icon-pen"></use>
                        </svg>
                        <p className="placeholder">{post.name}</p>
                    </div>
                    <div className={css.details}>
                        <svg className={css.icon} width="16" height="16">
                            <use
                                className={css.use}
                                href="/img/sprite.svg#icon-calendar"
                            ></use>
                        </svg>
                        <p className="placeholder">{post.date}</p>
                    </div>
                </div>
                <h4 className={css.title}>{post.title}</h4>
                <p className="text mb-32">{post.description}</p>
                <button className={css.btn} type="button">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default BlogCard;
