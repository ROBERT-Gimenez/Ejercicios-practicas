import React from 'react'
import swal from '@sweetalert/with-react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const history = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail =/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(email === "" || password === ""){
            swal(<h2>Los campos no pueden estart vacios</h2>)
            return;
        }
        if(email !== '' && !regexEmail.test(email)){
        swal(<h2>Ingrese un email valido</h2>)
        }

        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            swal(<h2>Credenciales Invalidas</h2>)
        }
        
        axios.post('http://challenge-react.alkemy.org' , {email,password})
        .then(res => {
            swal(<h2>Perfecto,Ingresaste Correctamente</h2>)
            const tokenAdquirido = res.data.token;
            localStorage.setItem('token' , tokenAdquirido);// localStorage.getItem('token')
            history("/listado");//redireccionamos la pagina con useNavigate
        }).catch((err) => { console.log(err)})

        
    }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column mb-3' >
        <h2 className='mb-auto p-2'>Formulario de Login</h2>
        <br/>
        <form className='row g-3 col-md-6 ' onSubmit={handleSubmit}>
            <input className='form-control' type="email" name="email" placeholder='Ingrese su Email'/>
            <input className='form-control' type="password" name="password" placeholder='Ingrese su Contraseña' />
            <button variant="primary" className='btn btn-primary mb-3' type="submit" >Ingresar</button>

        </form>
{/*             <div className='containerDiv'><Modal title="Login" content="Debes iniciar sesion"/></div>
 */}    </div>
  )
}
