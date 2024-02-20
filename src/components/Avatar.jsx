import styles from './Avatar.module.css'

export function Avatar({Border = true, src}) {

    return (

        <img src={src} className={Border ? styles.withBorder : styles.noBorder} />

    )

}