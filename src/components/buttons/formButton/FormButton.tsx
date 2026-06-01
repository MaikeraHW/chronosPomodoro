import { CirclePlay, CircleStop } from 'lucide-react'
import styles from './FormButton.module.css'

type FormButtonProps = {
    numOfCicles: number
}

function FormButton({numOfCicles}:FormButtonProps){

    return (
        <>
        <button type="submit" className={`${(numOfCicles) % 2 === 0 ? styles.formButtonGreen : styles.formButtonRed} ${styles.formButton}`}>
            {(numOfCicles) % 2 === 0 ? <CirclePlay size={44}/> : <CircleStop size={44} />}
        </button>
        <p>{numOfCicles}</p>
        </>
    )
}

export default FormButton