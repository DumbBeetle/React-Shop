import "./App.css";

import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {


    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="products/:id"/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
