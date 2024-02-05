import Header from './components/Header'
import TodoList from './components/TodoList'
import styles from './App.module.css'
import { TodoProvider } from './context/useTodo'

function App() {
  return (
    <TodoProvider>
      <Header />
      <main>
        <section className={styles.mainSection}>
          <div className={styles.container}>
            <TodoList />
          </div>
        </section>
      </main>
    </TodoProvider>
  )
}

export default App
