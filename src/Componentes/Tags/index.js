import styles from "./Tags.module.css"
import tags from "./tags.json"

const Tags = () => {
    return (
        <ul className={styles.lista}>
            {tags.map(tag => {
                return (
                    <li
                        className={styles.itemLista}
                        key={tag.id}
                    >
                        <a 
                            href={`#${tag.id}`}
                            className={styles.tagLink}
                        >
                            {tag.titulo}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default Tags