import { Avatar } from './Avatar'
import styles from './comment.module.css'

export function Comment({src, name, time, comment, like=false, n_likes, image}){

    return (

        <div className={styles.box}>

            <div className={styles.content}>
                

                <div className={styles.obj}>
                    <Avatar src={image} Border={false}/>

                    <div className={styles.names}>
                        <strong>{name}</strong>
                        <span>{time}</span>
                    </div>
                </div>

                <i class="bi bi-trash"></i>
            
            </div>

            <p>{comment}</p>

            <footer className={styles.like}>

                <i class={like ? "bi bi-hand-thumbs-up-fill" : "bi bi-hand-thumbs-up"}></i>
                <p>Aplaudir <span>{n_likes}</span></p>

            </footer>

        </div>

    )

}