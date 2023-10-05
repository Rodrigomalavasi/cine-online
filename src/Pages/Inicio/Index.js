import Cabecalho from "Componentes/Cabecalho"
import CardsFilmes from "Componentes/CardsFilmes"
import Tags from "Componentes/Tags"
import styles from "./Inicio.module.css"
import { useEffect, useState } from "react"
import APIKey from "config/key"
import Referencia from "Componentes/Referencia"

const Inicio = () => {

    const [maisPopulares, setMaisPopulares] = useState([])
    const [maisAvaliados, setMaisAvaliados] = useState([])
    const [porVir, setPorVir] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
            .then(resposta => resposta.json())
            .then((dados) => {
                setMaisPopulares(dados.results)
            })
    }, [])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=en-US`)
            .then(resposta => resposta.json())
            .then((dados) => {
                setMaisAvaliados(dados.results)
                })
    }, [])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKey}&language=en-US&page=1`)
        .then(resposta => resposta.json())
        .then(dados => {
            setPorVir(dados.results)
        })
    }, [])

    return (
        <section className={styles.container}>
            <Cabecalho />
            <Tags />
            <CardsFilmes item={maisPopulares} titulo="Mais populares" id={0} />
            <CardsFilmes item={maisAvaliados} titulo="Mais avaliados" id={1} />
            <CardsFilmes item={porVir} titulo="Por vir" id={2} />
            <Referencia />
        </section>
    )
}

export default Inicio