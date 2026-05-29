import ButtonsHolder from '../components/buttons/buttonsHolder/ButtonsHolder'
import Heading from '../components/head/Heading'
import styles from './Container.module.css'

type ChildrenProps = {
    children: React.ReactNode
}

function Container({children}:ChildrenProps){

    return (
        <div className={styles.container}>
            <Heading />
            <ButtonsHolder />
            {children}
        </div>
    )
}

export default Container