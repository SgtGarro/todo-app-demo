import styles from './Header.module.css'
import TodoInput from '../TodoInput/TodoInput'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Todo</h1>
        <TodoInput />
      </div>
    </header>
  )
}
