import styles from './Clock.module.css'

function Clock(){

    return (
        <section className={styles.clockSection}>
            <p className={styles.clock}>00:00</p>
        </section>
    )
}

export default Clock