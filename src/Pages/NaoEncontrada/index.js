import { Link } from "react-router-dom"
import styles from "./NaoEncontrada.module.css"

const NaoEncontrada = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.titulo}>
                Ops, nenhum conteúdo foi encontrado!
            </h1>
            <h3 className={styles.subtitulo}>
                Clique no botão abaixo para voltar:
            </h3>
            <Link 
                to="/"
                className={styles.botao}
            >
                Voltar
            </Link>
        </section>

    )
}

export default NaoEncontrada