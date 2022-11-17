import {useEffect} from 'react';
import { useNavigate , Link , Navigate } from 'react-router-dom'; //en react v6 para el redireccionamiento se usa el navigate y useNavigate


function Listado() {
    const token = localStorage.getItem('token');
    const history = useNavigate();
    
  /*Una manera de redireccionar 
    useEffect(() => {
        if(token == null){
        history("/");
        }
    } , []) */

  return (
    <>
    {!token && <Navigate to="/" /> }
    <div className='row'>
        <div className='col-3' style={{border:'1px solid red'}}>
        <div className="card" style={{width: "18rem"}}>
  <img href="..." className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">Movie title</h5>
    <p className="card-text">Reviw movie Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quae id quis architecto obcaecati vel amet iste tempora, similique non enim ex, optio necessitatibus ullam expedita nihil odit totam quod.
    Commodi perferendis labore dignissimos deserunt, dolores, quod eum aliquid distinctio eveniet mollitia nihil iure quas beatae quia tenetur possimus ex? Quam a dicta at, commodi incidunt quia dolorem facere reprehenderit. </p>
    <Link to="/" className="btn btn-primary">View Detail</Link>
  </div>
</div>
        </div>


    </div>
    </>
  )
}

export default Listado