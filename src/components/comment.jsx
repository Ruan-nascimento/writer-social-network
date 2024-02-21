import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({src, name, time, comment, onDeleteComment}){

    const [likeCount, setLikeCount] = useState(0)

    function setOneMoreLike() {
        setLikeCount(likeCount+1)
    }

    function handleDeleteComment(){
        onDeleteComment(comment)
    }

    return (



       <section className={styles.window}>

            <div className={styles.main}>

                <Avatar Border={false} src={src}/>

                <div className={styles.geral}>

                    <div className={styles.itens}>

                        <div className={styles.head}>
                            <div className={styles.names}>
                                <strong>{name}</strong>
                                <span>{time}</span>
                            </div>
                            <i onClick={handleDeleteComment} className="bi bi-trash"></i>
                        </div>

                        <p className={styles.commenter}>{comment}</p>


                    </div>

                    <button onClick={setOneMoreLike}>
                        <i className="bi bi-hand-thumbs-up"></i>
                        Gostei
                        <span>{likeCount}</span>
                    </button>
                
                </div>

            </div>

       </section>

    )

}