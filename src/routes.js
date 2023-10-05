import Inicio from "Pages/Inicio/Index"
import PaginaBase from "Pages/PaginaBase"
import Detalhes from "Pages/Detalhes"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NaoEncontrada from "Pages/NaoEncontrada"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />} >
                    <Route index element={<Inicio />}></Route>
                    <Route path="detalhes/:id" element={<Detalhes />}></Route>
                </Route>
                <Route path="detalhes/:id/*" element={<NaoEncontrada />}></Route>
                <Route path="*" element={<NaoEncontrada />} ></Route>
            </Routes>
        </BrowserRouter>
    )   
}

export default AppRoutes