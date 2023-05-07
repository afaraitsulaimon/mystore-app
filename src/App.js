import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { ProductProvider } from './context/ProductContext';



function App() {
  return (
    <ProductProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
    </ProductProvider>
   
  );
}

export default App;
