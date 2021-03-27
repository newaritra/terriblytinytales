import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Loader from "./Loader"
import './Result.css'

function Result(props) {
    const [rollNumber,setRollNumber]=useState(props.arrayRoll);
    const [resData,setResData]=useState([]);
    useEffect(()=>{
        setRollNumber(props.arrayRoll)
        console.log(rollNumber.length)
        const postUsers= async ()=>
        {
            const res=await axios.post('http://localhost:3001/test',{rollNumber})
            const newRes=(res.data)
            setResData(newRes)
        }
        postUsers();
    },[rollNumber])
    return (
        <div>
            {rollNumber.length===0 ? <h3 style={{color:"white"}}>Please Click on the Submit button again</h3>:
            resData.length===0 ? <Loader/>:
            <table>
                <thead>
                <tr>
                    <th>Roll Number</th>
                    <th>Result</th>
                </tr>
                </thead>
                <tbody>
                {rollNumber.map((item,index) => {return(<tr key={item}><td>{item}</td><td>{resData=== [] ? "" : resData[index]}</td></tr>)})}
                </tbody>
            </table>}
        </div>
    )
}

export default Result
