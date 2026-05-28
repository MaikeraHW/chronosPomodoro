import { CirclePlay, CircleStop } from 'lucide-react'
import styles from './FormButton.module.css'

type FormButtonProps = {
    numOfCicles: number
    onClick: () => void
}

function FormButton({numOfCicles, onClick}:FormButtonProps){

    return (
        <>
        <button className={`${(numOfCicles) % 2 === 0 ? styles.formButtonGreen : styles.formButtonRed} ${styles.formButton}`} onClick={onClick}>
            {(numOfCicles) % 2 === 0 ? <CirclePlay size={44}/> : <CircleStop size={44} />}
        </button>
        <p>{numOfCicles}</p>
        </>
    )
}

export default FormButton