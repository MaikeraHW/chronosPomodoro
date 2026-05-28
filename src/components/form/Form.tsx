import Circle from '../circle/Circle'
import DefaultInput from '../defaultInput/DefaultInput'
import styles from './Form.module.css'

function Form(){

    return(
        <section className={styles.formSection}>
            <DefaultInput type='text' labelTxt='labelTxt'/>
            <p className={styles.nextTask}>A próxima tarefa é:</p>
            <p className={styles.cicleCounter}>Ciclos:</p>
            <div className={styles.circleHolder}>
                <Circle subclasse='yellow'/>
                <Circle subclasse='green'/>
                <Circle subclasse='yellow'/>
                <Circle subclasse='green'/>
                <Circle subclasse='yellow'/>
                <Circle subclasse='green'/>
                <Circle subclasse='blue'/>
            </div>
        </section>
    )
}

export default Form