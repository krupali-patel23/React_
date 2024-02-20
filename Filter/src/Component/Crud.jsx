import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";

export const Crud =()=> {
    const [info,setInfo]=useState({fname:"",email:"",g1:"",psw:""});
    const [array,setArray]=useState(JSON.parse(localStorage.getItem("Array")) || []);
    const [isEdit,setIsEdit] = useState(-1);
    const navigate = useNavigate();

    const Handlechange = (e) => {
        console.log(e.target);
        setInfo({...info,[e.target.name]:e.target.value});
    }

    const HandleSubmit = (e) => {
        if(isEdit === -1){
          console.log(e.target);
          setArray([...array,info]);
          localStorage.setItem("Array",JSON.stringify([...array,info]));
         navigate('/table');
        }
        else{
          const updateData = array.map((item,index) => {
            if (index === isEdit){
                return info
            }
            return item;
          })
          setArray(updateData);
          localStorage.setItem("Array",JSON.stringify(updateData));
        }
      }

  return (
    <>
    <div>
        <label htmlFor="fname">Full Name:</label>
        <input type="text" name="fname" id="fname" placeholder="Full Name" value={info.fname} onChange={Handlechange}/><br/><br/>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="Enter your email Id" value={info.email} onChange={Handlechange}/><br/><br/>

        <label htmlFor="gender">Gender:</label>
        <input type="radio" name="g1" id="g1" value="male" defaultChecked='' 
        checked={info.g1 === "male"} onChange={Handlechange}/>male
        <input type="radio" name="g1" id="g1" value="female" defaultChecked='' 
        checked={info.g1 === "female"} onChange={Handlechange}/>female<br/><br/>

        <label htmlFor="psw">Password:</label>
        <input type="password" name="psw" id="psw" placeholder="Password" value={info.psw} onChange={Handlechange} /><br/><br/>
        
        <button type="submit" onClick={HandleSubmit}>Submit</button>
</div>
    </>
  )
}
