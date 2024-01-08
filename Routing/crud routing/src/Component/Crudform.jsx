import React,{useState} from "react";

export const Crudform =()=>{
      const [info,setInfo]=useState({fname:"",email:"",g1:"",psw:""});
      const [array,setArray]=useState(JSON.parse(localStorage.getItem("Array")) || []);
      const [isEdit,setIsEdit] = useState(-1);

      const Handlechange = (e) => {
          console.log(e.target);
          setInfo({...info,[e.target.name]:e.target.value});
      }

      const HandleSubmit = (e) => {
        if(isEdit === -1){
          console.log(e.target);
          setArray([...array,info]);
          localStorage.setItem("Array",JSON.stringify([...array,info]));
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

      const hendledelete = (idx) => {
          const deletdata = array.filter((item,index)=>index !== idx);
          setArray(deletdata);
      };
   
      const hendleEdit = (iddx) =>{
        setIsEdit(iddx);
        const record = array.find((item,index)=> index === iddx)
        setInfo(record);  
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


<table className="table table-bordered">
  <thead>
        <th>Full name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Password</th>
  </thead>
  <tbody>
        {array.map((item,index)=>{
                      return(
                        <tr>
                          <td>{item.fname}</td>
                          <td>{item.email}</td>
                          <td>{item.g1}</td>
                          <td>{item.psw}</td>
                          <td>
                          <button type="button" className="btn btn-danger" onClick={()=>hendledelete(index)}>Delete</button>
                          <button type="button" className="btn btn-danger" onClick={()=>hendleEdit(index)}>Edit</button>
                          </td>
                        </tr>
                      )

})}
  </tbody>
</table>

    </>
  )
}
