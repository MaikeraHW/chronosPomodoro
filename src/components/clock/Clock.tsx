import { useContext } from 'react'
import styles from './Clock.module.css'
import { TaskContext } from '../../contexts/taskContext/TaskContext'

function Clock(){

    const {state} = useContext(TaskContext)

    return (
        <section className={styles.clockSection}>
            <p className={styles.clock}>{state.formattedSecondsRemaining}</p>
        </section>
    )
}

export default Clock