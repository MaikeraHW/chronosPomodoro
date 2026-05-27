import styles from './Button.module.css'

type ButtonProps ={
    icon: React.ReactNode
}

function Button({icon}:ButtonProps){

    return (
        <button className={styles.btn}>{icon}</button>
    )
}

export default Button