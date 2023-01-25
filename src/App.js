import "./App.css";

import {Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import NotFound from "./views/NotFound";
import SingleProduct from "./views/SingleProduct/SingleProduct";
import React from "react";
import {CartProvider} from "./hooks/CartContext";

function App() {
    return (
        <div className="App">
                <CartProvider>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="products/:id" element={<SingleProduct/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </CartProvider>
        </div>
    );
}

export default App;
