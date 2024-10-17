//? Libraries and hooks imports
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
  once: false,
});

//? Components imports
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { ThemeContextProvider } from "./context/ThemeContext";
import { CartContextProvider } from "./context/CartContext";
import Products from "./pages/Products";
import CheckOut from "./components/CheckOut";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
        </CartContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
};

export default App;
