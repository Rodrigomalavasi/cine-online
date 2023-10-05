import styles from "./Referencia.module.css"

const Referencia = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.titulo}>Referência API</h2>
            <div className={styles.divReferencia}>
                <p className={styles.subtitulo}>Você pode conhecer ver mais sobre a API utilizada para a realização deste projeto clicando <a href="https://www.themoviedb.org" className={styles.link}>aqui</a>.</p>
                <a href="https://www.themoviedb.org" className={styles.linkImagem}>
                    <img
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                        alt="Logo Primário completo (azul) da API TMDB"
                        className={styles.imagem}
                    />
                </a>
            </div>
        </section>
    )
}

export default Referencia