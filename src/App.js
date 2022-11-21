import Login from './components/Login';
import {Routes , Route} from 'react-router-dom'
import Listado from './components/Listado';
import Detalle from './components/Detalle';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import Resultado from './components/Resultado';
import Favoritos from './components/Favoritos';
function App() {
  const endpoint ='https://api.themoviedb.org/3/discover/movie?api_key=d6c22a610db913393d63611f4566f0a1&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
  return (
    <div className="App">
      <Header/>
      <div className='container mt-3' style={{height:"69%"}}>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/listado" element={<Listado url={endpoint}/>}></Route>
      <Route path="/detalle" element={<Detalle/>}></Route>
      <Route path="/favoritos" element={<Favoritos/>}></Route>
      <Route path="/Resultado" element={<Resultado/>}></Route>
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
