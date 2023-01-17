import "./App.css";

import {Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import NotFound from "./views/NotFound";
import SingleProduct from "./views/SingleProduct/SingleProduct";
import React from "react";
import {CartProvider} from "./hooks/CartContext";
import {Experimental_CssVarsProvider as CssVarsProvider} from '@mui/material/styles';
import {createTheme} from "@mui/material";

function App() {
        const theme = createTheme({
            fitImg: {
                objectFit: "contain"
            },
            primary:{
                main:"#649a55"
            }
        })
    return (
        <div className="App">
            <CssVarsProvider theme={theme}>
                <CartProvider>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="products/:id" element={<SingleProduct/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </CartProvider>
            </CssVarsProvider>
        </div>
    );
}

export default App;
