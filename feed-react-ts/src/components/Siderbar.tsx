import styles from './Siderbar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Siderbar () {
    return(
        <aside className={styles.siderbar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            <div className={styles.profile}>
                <Avatar src='https://github.com/maykbrito.png' />
                <strong>Junior Soares</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}