import {useState} from "react";

const Home =()=>{

    const [name,setname] = useState('Muhammad');
    const [age,setage] = useState('23')
    const HandleClick=()=>{
        setname('Masab');
        setage('25')
    }
    return(
        <div className="home">
            <h3>HomePage</h3>
            <p>{'name is' +  name + 'age is ' + age }</p>
            <button onClick={HandleClick}>Click Me</button>
        </div>
    );
}

export default Home
