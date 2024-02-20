import { Header } from './components/Header'
import styles from './global.module.css'
import app from './App.module.css'
import { Sidebar } from './components/Sidebar'


export function App() {
  
  return (
    
    <div>

      <Header />  

      <div className={app.wrapper}>

        <Sidebar src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <main>main content</main>

      </div>

    </div>
  )

}

