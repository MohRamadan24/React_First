
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
            })
            .catch((e) => {
                
            });
    }, []);

    return (  
        <div className="home">
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={ blogs } title="All Blogs!"/>}
            {/* <BlogList blogs={ blogs.filter((blog) => blog.author === 'mario') } title="Mario's Blogs!" /> */}
        </div>
    );
}
 
export default Home;