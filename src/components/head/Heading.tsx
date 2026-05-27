import styles from './Heading.module.css'

type HeadingProps = {
    conteudo: string
    conteudo2: string
}

function Heading({conteudo, conteudo2}:HeadingProps){
    return (
    <div className={styles.title}>{conteudo} - {conteudo2}</div>
    )
}

export default Heading