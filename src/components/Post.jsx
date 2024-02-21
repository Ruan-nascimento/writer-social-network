import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { Writer } from './Writer'
import { Comment } from './Comment';
import { useState } from 'react';

export function Post({author, published, content}) {

    const [comments, setComment] = useState(
        []
    )

    const [textareaComment, setNewTextComment] = useState('')

    function newComment(){
        event.preventDefault()

        const newComment = event.target.comment.value

        setComment([...comments, newComment])

        event.target.comment.value = ''


    }


    return (

        <div className={styles.main_box}>

            <header className={styles.info_header}>

                <div className={styles.info_perfil}>

                    <Avatar src={author.profile}/>

                    <div className={styles.id}>

                        <strong>{author.name}</strong>
                        <span>{author.office}</span>

                    </div>

                </div>


            </header>

            <section className={styles.body_}>

                {content.map(line => {
                    if(line.type==='paragraph'){
                        return <p>{line.content}</p>
                    } else if(line.type==='link'){
                        return <p><a href={line.content} target='_blank'>{line.content}</a></p>
                    } else if(line.type==='hashtag'){
                        return <p className={styles.hash}>{line.content}</p>
                    }
                })}

            </section>

            <section className={styles.feedback}>

                <strong>Deixe seu FeedBack</strong>
                
                <form onSubmit={newComment}>

                    <textarea 
                    name='comment' 
                    placeholder='Deixe um comentário'></textarea>

                    <input type="submit" value="Publicar" />

                </form>

            </section>

            <section className={styles.comments}>

                {comments.map(com => {
                    return(

                        <Comment 
                            src="https://github.com/Ruan-nascimento.png" 
                            name="Ruan Carlos"
                            time="há 2 horas atrás" 
                            ime="há 2 horas atrás" 
                            n_likes={10} 
                            comment={com}
                        />

                    )
                })}

            </section>

        </div>

    )

}