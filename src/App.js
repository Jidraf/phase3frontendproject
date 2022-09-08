import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Coaches from './Components/Coaches/Coaches';
import Players from './Components/Players/Players';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
    <NavBar/>

    <Routes>

    <Route path='/' element={<Home />}/>
    <Route path='/Players' element={<Players />}/>
    <Route path='/Coaches' element={<Coaches />}/>
    <Route path='/Teams' element={<Teams />}/>
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
