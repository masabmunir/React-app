import {useEffect, useState} from 'react';
import Blogdata from './Blogdata';

const Home =()=>{
    const [blog,setblog] = useState()
        // [
        //     {Name:"Masab", Age:12, Gender:"Male",id:1},
        //     {Name:"Ali", Age:13, Gender:"Male",id:2},
        //     {Name:"Hamza", Age:15, Gender:"Male",id:3}

        // ]);

    const handleDelete=(id)=>{
        const blogdata = blog.filter(blogs=>blogs.id !==id)
        setblog(blogdata)
    }
    
    useEffect(()=>{
        fetch("http://localhost:3000/Employees").then(res=>{
            return res.json;
        }).then(data=>{
            setblog(data);
        })
    })
    return(
        <div className="home">
            <h3>HomePage</h3>
            {blog && <Blogdata blogs={blog} title="My Blogs" handleDelete={handleDelete} />}
        </div>
    );
}

export default Home;
