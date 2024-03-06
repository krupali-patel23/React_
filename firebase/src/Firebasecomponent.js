import React,{useEffect, useState} from "react";
import { db } from './firebase/firebase';
import { collection, addDoc, onSnapshot,deleteDoc,query,doc } from 'firebase/firestore';

export default function Firebasecomponent() {
    const [Subject, setSubject] = useState("");
    const [AllUsers, setAllUsers] = useState([]);
    const [id,setid] = useState("");

    // inset//
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Subject !== "") {
         addDoc(collection(db, "category"), {
                Subject,
                completed: true,
            });
            setSubject("");
        }
    }

    //display//
        useEffect(() =>{
            const q = query(collection(db,"category"));
            const unsub = onSnapshot(q,(querySnapshot)=>{
                let todosArray = [];
                querySnapshot.forEach((doc)=>{
                  todosArray.push({...doc.data(),id: doc.id});
                });
                setAllUsers(todosArray);
            });
            return () => unsub();
        },[]);

     //delete//
     const handleDelete = async (id) =>{
        await deleteDoc(doc(db,"category",id));
     }

     //edit//
     const handleEdit = async (id) => {
          let q = query (collection(db,"category"))
          const unsub = onSnapshot(q,(querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
              if(doc.id==id){
                setSubject(doc.data().Subject);
              }
            })
          })
          setid(id);
     }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          placeholder="what do you want to do?"
          value={Subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="btn-container">
        <button>Add-Todo</button>
      </div>
    </form>
    <table className="table table-bordered">
        <thead>
          <th>#</th>
          <th>Id</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Action</th>
        </thead>
        <tbody>
          {AllUsers.map((i,index)=>{
                return(
                  <tr key={i.id}>
                    <td>{index + 1}</td>
                    <td>{i.id}</td>
                    <td>{i.Subject}</td>
                    <td>{(i.completed)? "yes":"No"}</td>
                    <td>
                      <button type="button"
                       onClick={()=>handleDelete(i.id)}>Delete</button>
                      <button type="button" onClick={()=> 
                        handleEdit(i.id)}>Edit</button>
                    </td>
                  </tr>
                )}
          )}      
        </tbody>
    </table>
    </>
  );
}
