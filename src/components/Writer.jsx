import styles from './Writer.module.css'

export function Writer({content, hash=false}) {

    return (

        <p className={hash===false ? styles.post_content : styles.post_content_hash}>{content}</p>

    )

}