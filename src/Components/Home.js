import {useState} from "react";

const Home =()=>{

    const [count,setcount] = useState(0);

   function Increament(){
        setcount(count + 1)
    }

    function Decrement(){
        if(count>0){
            setcount(count - 1)
        }
    }

    function Reset(){
        setcount(0)
    }

    return(
        <div className="home">
            <h3>HomePage</h3>
            <button onClick={Increament}>Increament</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
            <h1>{count}</h1>
        </div>
    );
}

export default Home
