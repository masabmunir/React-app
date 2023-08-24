import React from 'react';

const Blogdata = ({blogs,title,handleDelete}) => {

    return (
        <div>
            <h3>{title}</h3>
            {blogs?.map((blog) => (
                <div key={blog.id}>
                    <p>{blog.Name}</p>
                    <p>{blog.Gender}</p>
                    <button onClick={()=>{handleDelete(blog.id)}}>Delete data</button>
                </div>
            ))}
        </div>
    );
}

export default Blogdata;