import { useRef, useState } from 'react'
import FormButton from '../buttons/formButton/FormButton'
import Circle from '../circle/Circle'
import DefaultInput from '../defaultInput/DefaultInput'
import styles from './Form.module.css'

function Form(){

    const [numOfCicles, setNumOfCicles] = useState(0)
    const teste = useRef<HTMLInputElement>(null)
    console.log(teste.current)

    function changeCounter(event: React.SyntheticEvent){
        event.preventDefault()
        numOfCicles === 8 ? setNumOfCicles(0) : setNumOfCicles(numOfCicles + 1)
    }



    return(
        <form onSubmit={changeCounter} className={styles.formSection}>
            <DefaultInput type='text' labelTxt='TaskName' id="taskInput" ref={teste}/>
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
            <FormButton numOfCicles={numOfCicles} />
        </form>
    )
}

export default Form