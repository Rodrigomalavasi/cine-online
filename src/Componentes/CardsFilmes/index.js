import { Link } from "react-router-dom"
import styles from "./CardsFilmes.module.css"
import imagens from "config/imagePath"

const CardsFilmes = ({ titulo, item, id}) => {
    return (
        <>
            <h2
                className={styles.titulo} 
                id={id}>
                {titulo}
            </h2>
            <ul className={styles.listaFilmes}>
                {item.map((filme) => (
                    <li className={styles.itemLista} key={filme.id}>
                        <Link to={`detalhes/${filme.id}`}>
                            <img
                                src={`${imagens}${filme.poster_path}`}
                                alt={filme.title}
                                className={styles.imagemFilme}
                            />
                        </Link>
                        <Link
                            to={`detalhes/${filme.id}`}
                            className={styles.tituloFilme}
                        >
                            {filme.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}


export default CardsFilmes
