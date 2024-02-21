import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({src, name, time, comment, n_likes}){

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
                            <i class="bi bi-trash"></i>
                        </div>

                        <p className={styles.commenter}>{comment}</p>


                    </div>

                    <button><i class="bi bi-hand-thumbs-up"></i>Gostei<span>{n_likes}</span></button>
                
                </div>

            </div>

       </section>

    )

}