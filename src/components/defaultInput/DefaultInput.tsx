import styles from './DefaultInput.module.css'

type DefaulInputProps = {
    type: string
    labelTxt: string
}

function DefaultInput({type, labelTxt}:DefaulInputProps){
    return (
    <>
    <label className={styles.inputLabel}>{labelTxt}</label>
    <input type={type} placeholder="Digite aqui" className={styles.inputField} />
    </>
    )
}

export default DefaultInput