import Login from './components/Login';
import {Routes , Route} from 'react-router-dom'
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container mt-3'>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/listado" element={<Listado/>}></Route>
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
