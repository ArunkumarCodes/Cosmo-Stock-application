
import './App.css';
import Home from './Components/Home/Home';
import StockDetails from './Components/StockDetails/StockDetails';
import Header from './Components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { NoMatch } from './Components/StockDetails/NoMatch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>

      {/* {all my routes} */}
      <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/stock:symbol" element={IBM}/> */}
      <Route path="/stock:symbol" element={<StockDetails/>}/>
      <Route path='*' element={<NoMatch/>}/>
      
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
