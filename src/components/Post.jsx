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

    const newCommentIsEmpty = textareaComment.length === 0

    function newComment(){
        event.preventDefault()

        const newComment = event.target.comment.value

        setComment([...comments, newComment]) 

        setNewTextComment('')

    }

    function updateTextArea(){

        setNewTextComment(event.target.value)
        
    }

    function deleteComment(com){
        const commentsWithoutThis = comments.filter(comment => {
            return comment != com
        })

        setComment(commentsWithoutThis)
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity("Preencha este campo")
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
                        return <p key={line.content}>{line.content}</p>
                    } else if(line.type==='link'){
                        return <p key={line.content}><a href={line.content} target='_blank'>{line.content}</a></p>
                    } else if(line.type==='hashtag'){
                        return <p key={line.content} className={styles.hash}>{line.content}</p>
                    }
                })}

            </section>

            <section className={styles.feedback}>

                <strong>Deixe seu FeedBack</strong>
                
                <form onSubmit={newComment}>

                    <textarea 
                    name='comment'
                    onChange={updateTextArea}
                    value={textareaComment}
                    placeholder='Deixe um comentário'
                    onInvalid={handleNewCommentInvalid}
                    required/>

                    <input className='public' disabled={newCommentIsEmpty} type="submit" value="Publicar" />

                </form>

            </section>

            <section className={styles.comments}>

                {comments.map(com => {
                    return(

                        <Comment 
                            key={com}
                            onDeleteComment={deleteComment}
                            src="https://github.com/Ruan-nascimento.png" 
                            name="Ruan Carlos"
                            time="há 2 horas atrás" 
                            ime="há 2 horas atrás"  
                            comment={com}
                        />

                    )
                })}

            </section>

        </div>

    )

}