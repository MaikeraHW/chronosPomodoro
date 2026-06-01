import styles from './DefaultInput.module.css'

type DefaulInputProps = {
    labelTxt: string
} & React.ComponentProps<'input'>

function DefaultInput({type, labelTxt, ref}:DefaulInputProps){
    return (
    <>
    <label className={styles.inputLabel}>{labelTxt}</label>
    <input type={type} placeholder="Digite aqui" className={styles.inputField} ref={ref}/>
    </>
    )
}

export default DefaultInput