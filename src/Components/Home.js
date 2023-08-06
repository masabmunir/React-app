import {useState} from "react";
import Blogdata from "./Blogdata";
const Home =()=>{

    const [blog,setblog] = useState(
        [
            {Name:"Masab", Age:12, Gender:"Male",id:1},
            {Name:"Ali", Age:13, Gender:"Male",id:2},
            {Name:"Hamza", Age:15, Gender:"Male",id:3}

        ]
    );

    return(
        <div className="home">
            <h3>HomePage</h3>
           
           <Blogdata blog={blog} />
                {/* {blog.map((info)=>(
                    <div key={info.id}>
                      <p>{info.Name}</p>
                      <p>{info.Gender}</p>
                    </div>
                ))} */}
        </div>
    );
}

export default Home
