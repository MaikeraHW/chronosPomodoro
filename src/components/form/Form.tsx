import { useState } from 'react'
import FormButton from '../buttons/formButton/FormButton'
import Circle from '../circle/Circle'
import DefaultInput from '../defaultInput/DefaultInput'
import styles from './Form.module.css'

function Form(){

    const [numOfCicles, setNumOfCicles] = useState(0)

    function changeCounter(){

        numOfCicles === 8 ? setNumOfCicles(0) : setNumOfCicles(numOfCicles + 1)
    }

    return(
        <section className={styles.formSection}>
            <DefaultInput type='text' labelTxt='labelTxt'/>
            <p className={styles.nextTask}>A próxima tarefa é:</p>
            <p className={styles.cicleCounter}>Ciclos:</p>
            <div className={styles.circleHolder}>
                <Circle subclasse='yellow'/>
                <Circle subclasse='green'/>
                <Circle subclasse='yellow'/>
                <Circle subclasse='green'/>
                <Circle subclasse='yellow'/>
                <Circle subclasse='green'/>
                <Circle subclasse='yellow'/>
                <Circle subclasse='blue'/>
            </div>
            <FormButton numOfCicles={numOfCicles} onClick={() => changeCounter()}/>
        </section>
    )
}

export default Form