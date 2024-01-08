import { useNavigate } from 'react-router-dom'

const  Navbar = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button type="button" onClick={()=>navigate('/crudform')}>Crudform</button>
    </div>
  )
}
export default Navbar;