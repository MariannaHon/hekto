'use client';

import { Blog } from '@/redux/blog/slice';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { fetchBlog } from '@/redux/blog/operations';
import { selectPost, selectError, selectLoading } from '@/redux/blog/selectors';

import css from './BlogList.module.scss';

import BlogCard from '../BlogCard/BlogCard';

const BlogList: React.FC = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(selectPost);
    const error = useAppSelector(selectError);
    const isLoading = useAppSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchBlog());
    }, [dispatch]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <ul className={css.list}>
            {posts.map((post: Blog) => (
                <li key={post.id}>
                    <BlogCard post={post} />
                </li>
            ))}
        </ul>
    );
};

export default BlogList;
