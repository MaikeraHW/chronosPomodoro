import styles from './Circle.module.css'

type CircleProps = {
    subclasse: string
}

function Circle({subclasse}:CircleProps){

    return(
        <div className={`${styles.circleSize} ${subclasse === 'green' ? styles.circleGreen : subclasse === 'yellow' ? styles.circleYellow : styles.circleBlue}`}></div>
    )
}

export default Circle