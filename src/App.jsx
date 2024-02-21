import { Header } from './components/Header'
import styles from './global.module.css'
import app from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import { Writer } from './components/Writer'
import { Comment } from './components/Comment'
import { Avatar } from './components/Avatar'



const postage = [{

  id: (Math.random(0, 10)*10) * (Math.random(0, 10)*10),
  author: {

    profile: "http://github.com/diego3g.png",
    name: "Diego Fernandes",
    office: "Educador @RocketSeat"
  },
  content: [
    {type: "paragraph", content: "Fala Pessoal, Tudo sussa?"},
    {type: "paragraph", content: "Passando aqui só pra avisar que vamos começar mais uma rodada..."},
    {type: "link", content: "https://github.com/Ruan-nascimento"},
    {type: "hashtag", content: "#faladev #boradeaula #boracodar #faladev #boradeaula #boracodar #faladev #boradeaula #boracodar #faladev #boradeaula #boracodar #faladev #boradeaula #boracodar #faladev #boradeaula #boracodar"},
  ],

  hour: new Date("20-02-2024 20:00:00")

},
{

  id: (Math.random(0, 10)*10) * (Math.random(0, 10)*10),
  author: {

    profile: "http://github.com/Ruan-nascimento.png",
    name: "Ruan nascimento",
    office: "Dev FullStack"
  },
  content: [
    {type: "paragraph", content: "Galera, hoje foi dia de aprender react, mais uma boa pra carreira, amei dms o framework, to moh feliz com ele, c é loko! fiz até alguns esquemas legais com ele, passa no meu github..."},
    {type: "link", content: "https://github.com/Ruan-nascimento"},
    {type: "hashtag", content: "#react #learningreact #devjunior"},
  ],
  
  publication: new Date("20-02-2024 19:00:00")

}]


export function App() {
  
  return (

    <div>
      

      <Header />  

      <div className={app.wrapper}>

        <Sidebar src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <main className={app.main}>

        {postage.map(postage => {
            return(
              <Post
                author={postage.author}
                content={postage.content}
                published={postage.publication}
              />
            )
          })},


        </main>

      </div>
    </div>
    // console.log(postage)
  )
    


}

