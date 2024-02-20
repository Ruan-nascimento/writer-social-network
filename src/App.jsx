import { Header } from './components/Header'
import styles from './global.module.css'
import app from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import { Writer } from './components/Writer'


export function App() {
  
  return (
    
    <div>

      <Header />  

      <div className={app.wrapper}>

        <Sidebar src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <main>

          <Post 
            profile='https://github.com/diego3g.png'
            name = "Ruan Carlos"
            office="Dev Full Stack"
            publication='20-02-2024 14:34'
            hour="Agora há 5 minutos"
            content={
              <Writer content="Um belo dia para tomar chá"/>
            }
            content2={
              <Writer content="Fui na praia, dei aquela corrida, e agora bora que bora codar"/>
            }
            content3={
              <Writer hash={true} content="#programmer #devjunior #reactjs"/>
            }
          />

          <Post
            profile="http://github.com/AlessandroCorradini.png"
            name="Alessandro Corradini"
            office="Big Data Modeling"
            publication="20-02/2024 13:48"
            hour="Há 1 hora"
            content={
              <Writer content='Iniciando mais um dia no pesado...'/>
            }
            content2={
              <Writer content='Queria ir pra australia hoje, mas não deu rsrs'/>
            }
            content3={
              <Writer hash={true} content='#bigdata #datamodeling #python'/>
            }
          />

        </main>

      </div>

    </div>
  )

}

