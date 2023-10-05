import { useParams } from "react-router-dom"
import styles from "./Detalhes.module.css"
import { useEffect, useState } from "react"
import APIKey from "config/key"
import imagePath from "config/imagePath"
import NaoEncontrada from "Pages/NaoEncontrada"

const Detalhes = () => {
    const { id } = useParams()
    const [filme, setFilme] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
            .then(resposta => resposta.json())
            .then((dado) => {
                setFilme(dado)
            })
    }, [id])

    if(filme.success === false) {
        return <NaoEncontrada />
    }

    const dataLancamento = new Date(filme.release_date)
    const dataFormatada = dataLancamento.toLocaleDateString()

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Detalhes</h1>
            <div className={styles.detalhesFilme}>
                <img
                    className={styles.imagemDetalhes}
                    src={`${imagePath}${filme.poster_path}`}
                    alt={filme.title}
                />
                <div>
                    <h1 className={styles.titulo}>{filme.title}</h1>
                    <p className={styles.descricaoFilme}>{filme.overview}</p>
                    <p className={styles.descricaoFilme}>Data de lançamento: {dataFormatada}</p>
                </div>
            </div>
        </div>
    )
}

export default Detalhes