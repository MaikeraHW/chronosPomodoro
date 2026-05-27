import { Clock } from 'lucide-react'
import styles from './Heading.module.css'

function Heading(){
    return (
    <div className={styles.head}>
        <div className={styles.clockIcon}>
            <Clock className={styles.icon} />
        </div>
        <h1 className={styles.title}>Chronos</h1>
    </div>
    )
}

export default Heading