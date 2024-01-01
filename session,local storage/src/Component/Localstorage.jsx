import React, { useState } from "react";

export const LocalStorage = () => {
  const [initialInfo] = useState({fname: "",email: "",psw: ""});
  const [array, setArray] = useState(JSON.parse(localStorage.getItem("Array")) || []);
  const [info, setInfo] = useState(initialInfo);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const Handlechange = (e) => {
    console.log(e.target);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    if (editMode) {
      const updatedArray = [...array];
      updatedArray[editIndex] = info;
      setArray(updatedArray);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setArray([...array, info]);
    }

    localStorage.setItem("Array", JSON.stringify(array));
    setInfo(initialInfo);

    localStorage.setItem("Array", JSON.stringify([...array, info]));
    if (!info.fname || !info.email || !info.psw ) {
      alert("Please fill in all fields");
      return;
    }
  };

  const handledelete  = (idx) =>{
    const deleteData = array.filter((item,index)=>index !== idx);
    setArray(deleteData);
    localStorage.setItem("Array", JSON.stringify(deleteData));
};

  const HandleEdit = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setInfo(array[index]);
  };

  return (
    <>
      <div>
        <form action="">
          <label htmlFor="fname">Full Name :{" "}</label>
          <input type="text" name="fname" id="fname" placeholder="Enter Your Name"
          required value={info.fname} onChange={Handlechange}/><br /><br />

<label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Enter your email Id" value={info.email} onChange={Handlechange}/><br/><br/>

            <label htmlFor="psw">Password:</label>
            <input type="password" name="psw" id="psw" placeholder="Password" value={info.psw} onChange={Handlechange} /><br/><br/>

          <button type="submit" onClick={HandleSubmit}className="btn btn-warning">Submit
          </button>
        </form>
      </div>
      <table className="table table-bordered border-dark w-75 mt-5">
        <thead>
          <th className="ps-5 border border-dark text-dark">Name</th>
          <th className="ps-5 border border-dark text-dark">Email</th>
          <th className="ps-5 border border-dark text-dark">Password</th>
          <th className="ps-5 border border-dark text-dark">Button</th>
        </thead>
        <tbody>
          {array.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.fname}</td>
                <td>{item.email}</td>
                <td>{item.psw}</td>
                <td className=" text-dark fw-bold">
                <button type="button" className=" btn btn-danger" onClick={()=>handledelete(index)}>Delete</button>
                  <button onClick={() => HandleEdit(index)}
                    className="btn btn-primary ms-1 fw-bold">
                    Edit </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default localStorage;
