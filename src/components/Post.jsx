import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { Writer } from './Writer'



export function Post({author, published, content}) {
    // const dateFormated = format(published, "d 'de' LLLL 'às' HH:mm'h'", {locale:ptBR})

    // const publishedDateRelativeToNow = formatDistanceToNow(published, {
    //     locale:ptBR, addSuffix: true})

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

                {/* <time title={published} dateTime={published.toISOString()} >
                    {publishedDateRelativeToNow}
                </time> */}

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
                
                <form>

                    <textarea></textarea>

                    <input type="submit" value="Publicar" />

                </form>

            </section>

        </div>

    )

}