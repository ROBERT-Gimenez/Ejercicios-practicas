import Login from './components/Login';
import {Routes , Route} from 'react-router-dom'
import Listado from './components/Listado';
import Detalle from './components/Detalle';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container mt-3' style={{height:"69%"}}>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/listado" element={<Listado/>}></Route>
      <Route path="/detalle" element={<Detalle/>}></Route>
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
