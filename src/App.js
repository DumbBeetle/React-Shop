import "./App.css";

import {Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import NotFound from "./views/NotFound";
import SingleProduct from "./views/SingleProduct";
import React from "react";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="products/:id" element={<SingleProduct/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
