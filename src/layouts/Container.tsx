import styles from './Container.module.css'

type ChildrenProps = {
    children: React.ReactNode
}

function Container({children}:ChildrenProps){

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Container