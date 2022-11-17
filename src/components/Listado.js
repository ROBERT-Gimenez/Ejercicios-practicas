import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function Listado() {
    const history = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token == null){
        history("/");
        }
    } , [])

  return (
    <div>Listado</div>
  )
}

export default Listado