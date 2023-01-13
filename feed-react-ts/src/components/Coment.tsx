import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Coment.module.css'

interface comentProps {
    content: string;
    onDeleteComent: (coment: string) => void
}

export function Coment({ content , onDeleteComent} : comentProps) {

    function handleDeleteComent(){
        onDeleteComent(content)

    }
const [likeCount, setHandleAplaudir] = useState(0)

function handleLikeComent(){
    setHandleAplaudir( likeCount + 1 )
}


    return(
        <div className={styles.coment}>
            <Avatar hasBorder={false} src='https://github.com/junior10soares.png'/>

            <div className={styles.comentBox}>
                <div className={styles.comentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Junior Soares</strong>
                            <time 
                                title='19 de dezembro as 15:18' 
                                dateTime='2022-12-19 15:18'>Cerca de 1hr atras
                            </time>

                        </div>
                        <button onClick={handleDeleteComent} title='Deletar comentario'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>

                    <button onClick={handleLikeComent}>
                        <ThumbsUp />
                        Aplaudir 
                        <span>{likeCount}</span>
                    </button>
                    
                </footer>

            </div>
        </div>
    )
    
}