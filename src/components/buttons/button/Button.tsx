import type { LucideIcon } from 'lucide-react'
import styles from './Button.module.css'

type ButtonProps ={
    icon: LucideIcon
    title: string
    onClick?: () => void
}

function Button({icon: Icon, title, onClick }:ButtonProps){

    return (
        <a className={styles.btn} title={title} onClick={onClick}><Icon size={32}/></a>
    )
}

export default Button