import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { AddItem, EditItem, RemoveItem, UpdateItem } from './redux/action';

function App() {
const [name,setName] = useState('');
const [Email,setEmail] = useState('');
const [uid,setUid]  = useState('');
const Data = useSelector((state)=>state.items);
const edituserdata = useSelector((state)=>state.edituser);
console.log(edituserdata);
const dispatch = useDispatch();
const saveData=()=>{
  console.log("insert");
dispatch(AddItem({id:Date.now(),name:name,Email:Email}));
setName('');
setEmail('');
setUid('');
};

const updateData = (id) =>{
  dispatch(UpdateItem(id,{name}));
  setName('');
  setEmail('');
  setUid('');
}
  return (
    <div className="App">
    <h3>Redux exam</h3>
    <form>
    <input type="hidden" name="uid" value={edituserdata ? edituserdata.id :uid}/>

      <label htmlfor="">Name</label>
      <input type="text" name="name" value={edituserdata ? edituserdata.name :name} onChange={(i)=>setName(i.target.value)}/>
      <br/>

      <label htmlfor="">Email</label>
      <input type="text" name="Email" value={edituserdata ? edituserdata.Email :Email} onChange={(i)=>setEmail(i.target.value)}/>
   
      <br/>
  

      <input type="button" value="save" 
      onClick={edituserdata.length > 0 ? () => updateData(edituserdata.id)
      : saveData}/>
    </form>
    <br/><br/>
    <table className='table table-bordered'>
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Email</td>
        <td>Action</td>
      </tr>{
        Data.map((i)=>{
          return (
          <>
          <tr>
            <td>{i.id}</td>
            <td>{i.name}</td>
            <td>{i.Email}</td>
            <td>
                <button type="button" className="btn btn-success" 
                onClick={() => dispatch(RemoveItem(i.id))}>Delete</button>
              </td>
              <td>
                <button type="button" className="btn btn-danger"
                onClick={()=> dispatch(EditItem(i.id))}>
                Edit</button>
              </td>
              
          </tr>
          </>
          )
        })
      }
    </table>
  </div>
  );
}

export default App;
