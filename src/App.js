import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import Shop from "./screens/Shop";
import ProductScreen from "./screens/ProductScreen";
import AboutBrand from "./screens/AboutBrand";
import Contacts from "./screens/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Header className=""></Header>

      <Routes>
        <Route path="/product" element={<Shop />} />
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/product/about" element={<AboutBrand />} />
        <Route path="/product/contacts" element={<Contacts />} />
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
