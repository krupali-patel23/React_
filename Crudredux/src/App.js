import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addData, deleteData, updateData } from './Redux/Action';

function App() {
  const userinfo = useSelector((state) => state.userData || []);
  const [id, setId] = useState("")
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    name: '',
    email: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData(input));
    setInput({
      name: '',
      email: '',
    });
  };

  const DeleteData = (id) => {
    dispatch(deleteData(id));
  }
  const EditData = (id) => {
    const selectedData = userinfo[id];
    if (selectedData) {
      setId(id);
      setInput({
        name: selectedData.name || '',
        email: selectedData.email || '',
      })

    }
  };
  const UpdateUser = (e) => {
    e.preventDefault();

    const updatevalue = {
      id: id,
      name: input.name,
      email: input.email,
    };
    dispatch(updateData(updatevalue));
    setInput({
      name: '',
      email: '',
    })
    setId('');
  };

  return (
    <>
      <h2 >Redux Crud Demo</h2>
      <form action=""  onSubmit={id !== "" ? UpdateUser : handleSubmit}>
        <label htmlFor="">Name :  </label>
        <input type="text" name='name' value={input.name} onChange={handleChange}
          placeholder='Enter Your Name' required />
        <br />
        <br />
        <label htmlFor="">Email :  </label>
        <input type="email" name='email' value={input.email} onChange={handleChange}
          placeholder='Enter Your Email' required />
        <br />
        <br />
        <button type="submit" value={id !== "" ? "Update Data" : "Save"}>Save</button>
      </form>

      <table className='table table-bordered'>
        <thead >
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            userinfo.map((i, index) => {
              return <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <button type='button' onClick={() => EditData(index)}>Edit</button>
                <button type='button' onClick={() => DeleteData(index)}>Delete</button>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
