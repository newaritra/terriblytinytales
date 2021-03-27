import React, {useState} from 'react'
import "./InputRoll.css";
import Result from "./Result"
function InputRoll(props) {
    const [roll, setRoll] = useState("");
    const [id,setId]=useState(false);
    const [newNum,setNewNum]=useState([]);
    const handleSubmit=(event)=>{
        const numRolls=roll;
        setNewNum(numRolls.split(",").map(item=>Number(item)))
        event.preventDefault();
    }
    const handleChange=()=>{
        setId(!id);
    };
    // const rend=;
 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Enter Rollnumbers</h2>
                <label>
                    Roll numbers
                    <input type="text" value={roll} onChange={e=>setRoll(e.target.value)} required></input>
                </label>
                {roll===""? <button>Submit</button>:<button onClick={handleChange}>Submit</button>}
            </form>
            {id ? 
               <div>
               <Result arrayRoll={newNum}/>
               <button className="btn" onClick={handleChange}>Go back</button>
           </div>
            : null}
        </div>
    )
}

export default InputRoll;
