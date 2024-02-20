import {useNavigate} from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
  return (
   <>
    <button type="button" onClick={()=>navigate('/crud')}>Crud</button>
    <button type="button" onClick={()=>navigate('/table')}>Table</button>
   </>
  )
}
