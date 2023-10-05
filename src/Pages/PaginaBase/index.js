import Container from "Componentes/Container"
import Rodape from "Componentes/Rodape"
import { Outlet } from "react-router-dom"

const PaginaBase = () => {
    return (
        <main>
            <Container>
                <Outlet />
            </Container>
            <Rodape />
        </main>
    )
}

export default PaginaBase