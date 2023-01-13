import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { LineSegment } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from './Avatar' ;
import { Coment } from './Coment';
import styles from './Post.module.css';


interface Author {
    role: string;
    avatarUrl: string,
    name: string
}

interface postProps {
    author: Author;
    publishedAt: Date;
    content: Content[]
}   

interface Content {
    type: 'paragraphy' | 'link';
    content: string
}

export function Post({ author, publishedAt, content }: postProps) {

const [coments, setComents] = useState([
    'Post muito bacana!'
]);
  
const [newComentText, setNewComentText] = useState('')

const publishedDateFormatted = format(publishedAt , "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBr,
})
const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true

})
function handleCreateNewComent(event: FormEvent){
    event.preventDefault()

    setComents([ ...coments, newComentText ])
    setNewComentText('')

}
function handleNewComentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewComentText(event.target.value)
}

function handleNewComentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!') 
}

function deleteComent(comentToDelete: string) {
 const comentsWithoutDeleteOne = coments.filter (coment => {
    return coment !== comentToDelete
 }) 

 setComents(comentsWithoutDeleteOne)
}

const isNewComentEmpty = newComentText.length == 0

    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                        <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                    <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                    </time>
            </header>

                <div className={styles.content}>
                    {content.map(item => {
                        if(item.type === 'paragraphy'){
                            return <p key={item.content}>{item.content}</p>
                        }else if(item.type === 'link') {
                            return <p key={item.content}><a href="#">{item.content}</a></p>
                        }
                    })}
                </div> 

                <form onSubmit={handleCreateNewComent} className={styles.comentForm}>
                    <strong>Deixe seu Feedback</strong>
                    <textarea
                        name='coment'
                        placeholder='Deixe um comentário'
                        onChange={handleNewComentChange}
                        value={newComentText}
                        onInvalid={handleNewComentInvalid}
                        required
                    />
                    <footer>
                        <button type='submit' disabled={isNewComentEmpty}>
                            Publicar
                        </button>
                    </footer>
                </form>
                
                <div className={styles.comentList}>
                    {coments.map(coment => {
                        return (
                            <Coment 
                                key={coment} 
                                content={coment} 
                                onDeleteComent={deleteComent}
                            />
                        )
                    })}
                </div>
                
        </article>
       
    )
}