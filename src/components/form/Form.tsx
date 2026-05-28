import styles from './Form.module.css'

function Form(){

    return(
        <section className={styles.formSection}>
            <h2 className={styles.currentTask}>Current task</h2>
            <input type="text" placeholder="Digite aqui" className={styles.taskInput} />
            <p className={styles.nextTask}>A próxima tarefa é:</p>
        </section>
    )
}

export default Form