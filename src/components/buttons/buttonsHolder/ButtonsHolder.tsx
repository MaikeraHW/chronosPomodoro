import { HomeIcon, History, Settings, Sun } from 'lucide-react'
import Button from '../button/Button'
import styles from './ButtonsHolder.module.css'

function ButtonsHolder(){

    return (
        <div className={styles.btnHolder}>
            <Button icon={HomeIcon}/>
            <Button icon={History}/>
            <Button icon={Settings}/>
            <Button icon={Sun}/>
        </div>
    )
}

export default ButtonsHolder