import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App/>}/>
                <Route path="*" element={<div>Empty</div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Main;