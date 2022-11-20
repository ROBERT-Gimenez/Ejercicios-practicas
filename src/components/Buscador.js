import React from 'react';
import swal from '@sweetalert/with-react';
import { useNavigate , Navigate } from 'react-router-dom'; 

export default function Buscador() {
    const history = useNavigate()
    const submithandle = (e) => {
        const refreshPage = ()=>{
            window.location.reload();
         }
        e.preventDefault()
        const keyword = e.target.search.value.trim()
        if(keyword.length < 4){
            swal(<h3>ingrese una palabra clave valida</h3>)
        }else{
            e.target.search.value = '';
            /* {<Navigate to={`/Resultado?keyword=${keyword}`} />} */
            history(`/Resultado?keyword=${keyword}`);
            refreshPage()
            console.log(keyword)
        }
    }

  return (
    <>
    <form onSubmit={submithandle} className='d-flex align-items-center'>
        <input className='mb-0 mx-2' type="search" name="search" placeholder="Buscar.."/>
        <button className='btn btn-success' type='submit' >Enviar</button>
     </form>
    </>
  )
}
