import "./App.css";
// import Home from "./pages/Home";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import Slider from "./pages/slider";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Electronics from "./pages/Electronics";
import Accessories from "./pages/Accessories";
import Details from "./pages/Details";
import ShopingCartProvider from "./context/ShopingCartContext";
import ShoppingCart from "./components/ShoppingCart";
import CartcontextProvider from "./context/Shopingcontext";
import HomePage from "./pages/Home/HomePage";
import LovePage from "./pages/love/LovePage";


function App ()
{
  return (
    <Router>
      <CartcontextProvider>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/Men" element={ <Men /> } />
          <Route path="/Women" element={ <Women /> } />
          <Route path="/Electronics" element={ <Electronics /> } />
          <Route path="/Accessories" element={ <Accessories /> } />
          <Route path="product/:productId" element={ <Details /> } />
          <Route path="/Cart" element={ <ShoppingCart /> } />
          <Route path="/love" element={ <LovePage /> } />
        </Routes>
      </CartcontextProvider>
    </Router>
  );
}

export default App;
