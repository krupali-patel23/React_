import { useState } from 'react';

 function Formgoogle() {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [age,setAge] = useState('')
    const [mobile,setMobile] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

      function  validateForm(){
        
          if (firstName.length == 0) {
            alert('Invalid Form, First Name can not be empty')
            return
          }

          if (email.length == 0) {
            alert('Invalid Form, Email Address can not be empty')
            return
          }
          if (password.length < 8) {
            alert(
              'Invalid Form, Password must contain greater than or equal to 8 characters.',
            )
            return
          }
          alert('Form is valid')

      }
  return (
    <div className='main'>
        <form>
            <input placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
            /><br></br>
            <input placeholder='Last name'
            onChange={(e) => setLastName(e.target.value)} 
            /><br></br>
            <input placeholder='Age'
            onChange={(e) => setAge(e.target.value)}
            /><br></br>
            <input placeholder='Mobile number'
            onChange={(e) => setMobile(e.target.value)}
            /><br></br>
            <input placeholder='Email'
            onChange={(e)   => setEmail(e.target.value)}
            /><br></br>
            <input placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            /><br></br>
            <button type='submit' className='btn btn-success'
            onClick={() => {
              validateForm()
            }}>
              Submit</button>

        </form>
    </div>
  )

} 
export default Formgoogle;