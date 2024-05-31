import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Product from './Components/Product';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Product />}></Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
