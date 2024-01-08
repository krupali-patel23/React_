import React from 'react';
import {useNavigate} from 'react-router-dom';

const Navbar = () =>{
  const navigate = useNavigate();
  return (
  
      <div>
             <button type="button" onClick={()=>navigate('/home')}>Home</button>
             <button type="button" onClick={()=>navigate('/about')}>About</button>
             <button type="button" onClick={()=>navigate('/contact')}>Contact</button>
             <button type="button" onClick={()=>navigate('/signup')}>Signup</button>
             <button type="button" onClick={()=>navigate('/login')}>Login</button>
      </div>
  )
};
export default Navbar;
