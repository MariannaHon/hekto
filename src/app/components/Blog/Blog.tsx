import BlogList from '../BlogList/BlogList';

const Blog = () => {
    return (
        <section className="container">
            <div className="wrapper">
                <h2 className="subtitle mb-48">Latest Blog</h2>
                <BlogList />
            </div>
        </section>
    );
};

export default Blog;
