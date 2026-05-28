import type { LucideIcon } from 'lucide-react'
import styles from './Button.module.css'

type ButtonProps ={
    icon: LucideIcon
}

function Button({icon: Icon }:ButtonProps){

    return (
        <button className={styles.btn}><Icon size={40}/></button>
    )
}

export default Button