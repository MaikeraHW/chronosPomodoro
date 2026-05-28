import { HomeIcon, History, Settings, Sun } from 'lucide-react'
import Button from '../button/Button'
import styles from './ButtonsHolder.module.css'
import { useEffect, useState } from 'react'

type AvailableThemes = 'dark' | 'light'


function ButtonsHolder(){

    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const savedTheme = localStorage.getItem('theme')

        return savedTheme === 'dark' ? 'dark' : 'light'
    })

    function handleChangeTheme(){

        const newTheme = theme === 'dark' ? 'light' : 'dark'

        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect( () => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])


    return (
        <div className={styles.btnHolder}>
            <Button icon={HomeIcon} title="Ir para a Home"/>
            <Button icon={History} title="Ver histórico"/>
            <Button icon={Settings} title="Configurações"/>
            <Button icon={Sun} title="Mudar Tema" onClick={handleChangeTheme}/>
        </div>
    )
}

export default ButtonsHolder