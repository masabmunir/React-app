import {useEffect, useState} from 'react';
import Blogdata from './Blogdata';

const Home =()=>{
    const [blog,setblog] = useState()
    const [isLoading,setIsLoading] = useState(true);
        // [
        //     {Name:"Masab", Age:12, Gender:"Male",id:1},
        //     {Name:"Ali", Age:13, Gender:"Male",id:2},
        //     {Name:"Hamza", Age:15, Gender:"Male",id:3}

        // ]);

    // const handleDelete=(id)=>{
    //     const blogdata = blog.filter(blogs=>blogs.id !==id)
    //     setblog(blogdata)
    // }
    
    useEffect(()=>{
        setTimeout(() => {
            fetch('http://localhost:8000/blog').then(res=>{
            return res.json();
        }).then(data=>{
            setblog(data)
            setIsLoading(false)
        }).catch(error=>{
            console.log("Error is ", error)
        })
        }, 1000); // Wait for 1000 milliseconds (1 seconds)
        
    },[])
    return(
        <div className="home">
            <h3>HomePage</h3>
            {isLoading && <div>Loading ...</div>}
            {blog && <Blogdata blogs={blog} title="My Blogs" />}
        </div>
    );
}

export default Home;
