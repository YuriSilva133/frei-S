import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";

import Ex01 from "./pages/ex01";
import Ex02 from "./pages/ex02";
import Ex03 from "./pages/ex03";
import Ex04 from "./pages/ex04";
import Ex05 from "./pages/ex05";
import Ex06 from "./pages/ex06";
import Ex07 from "./pages/ex07";
import Ex08 from "./pages/ex08";
import Ex09 from "./pages/ex09";
import Ex10 from "./pages/ex10";
import Ex11 from "./pages/ex11";
import Ex12 from "./pages/ex12";

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/sobre" element={<Sobre />} />

                <Route path="/ex01" element={<Ex01 />} />
                <Route path="/ex02" element={<Ex02 />} />
                <Route path="/ex03" element={<Ex03 />} />
                <Route path="/ex04" element={<Ex04 />} />
                <Route path="/ex05" element={<Ex05 />} />
                <Route path="/ex06" element={<Ex06 />} />
                <Route path="/ex07" element={<Ex07 />} />
                <Route path="/ex08" element={<Ex08 />} />
                <Route path="/ex09" element={<Ex09 />} />
                <Route path="/ex10" element={<Ex10 />} />
                <Route path="/ex11" element={<Ex11 />} />
                <Route path="/ex12" element={<Ex12 />} />
            </Routes>
        </BrowserRouter>
    );
}

export { Navigation }