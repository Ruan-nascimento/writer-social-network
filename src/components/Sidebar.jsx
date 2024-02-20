import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar(props){

    return (

        <aside className={styles.box}>

            <div className={styles.banner}>
                <img src={props.src}/>
            </div>

            <div className={styles.profile}>
                <Avatar src='https://github.com/Ruan-nascimento.png'/>
            </div>

            <div className={styles.info}>

                <strong>Ruan Carlos</strong>
                <span>Desenvolvedor FullStack</span>

            </div>

            <div className={styles.edit}>

                <button>
                    <i class="bi bi-pencil-square"></i>
                    Editar seu Perfil
                </button>

            </div>



        </aside>

    )

}