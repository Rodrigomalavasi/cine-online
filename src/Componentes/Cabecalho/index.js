import styles from "./Cabecalho.module.css"

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <h1 className={styles.titulo}>O que você quer assistir hoje?</h1>
            <h3 className={styles.subtitulo}>Aqui você encontra várias indicações de opções de filmes para assistir, desde os mais populares aos que estão ainda por vir!</h3>
        </header>
    )
}

export default Cabecalho