import DefaultInput from '../defaultInput/DefaultInput'
import styles from './Form.module.css'

function Form(){

    return(
        <section className={styles.formSection}>
            <DefaultInput type='text' labelTxt='labelTxt'/>
            <p className={styles.nextTask}>A próxima tarefa é:</p>
        </section>
    )
}

export default Form