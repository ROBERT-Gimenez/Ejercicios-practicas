import Login from './components/Login';
import {Routes , Route} from 'react-router-dom'
import Listado from './components/Listado';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/listado" element={<Listado/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
