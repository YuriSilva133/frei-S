import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
import Ex01 from "./pages/ex01";
import Ex11 from "./pages/ex11";
import Ex10 from "./pages/ex10";

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/ex01' element={<Ex01 />} />
                <Route path='/ex10' element={<Ex10 />} />
                <Route path='/ex11' element={<Ex11 />} />
            </Routes>
        </BrowserRouter>
    );
}

export { Navigation }