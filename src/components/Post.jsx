import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { Writer } from './Writer'


export function Post(props) {

    return (

        <div className={styles.main_box}>

            <header className={styles.info_header}>

                <div className={styles.info_perfil}>

                    <Avatar src={props.profile}/>

                    <div className={styles.id}>

                        <strong>{props.name}</strong>
                        <span>{props.office}</span>

                    </div>

                </div>

                <time title={props.publication}>
                    {props.hour}
                </time>

            </header>

            <section className={styles.body_}>

                {props.content} 
                {props.content2}
                {props.content3}
                {props.content4}
                {props.content5}
                {props.content6}
                {props.content7}
                {props.content8}
                {props.content9}
                {props.content10}

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