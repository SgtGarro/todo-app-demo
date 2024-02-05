import { useState } from 'react'
import { useTodo } from '../../context/useTodo'
import styles from './TodoInput.module.css'

export default function TodoInput() {
  const { addTodo } = useTodo()
  const [text, setText] = useState('')

  function handleAddTodo(e: React.FormEvent) {
    setText('')
    addTodo(text)
    e.preventDefault()
  }

  return (
    <form className={styles.container} onSubmit={handleAddTodo}>
      <input
        className={styles.todoInput}
        type="text"
        placeholder="Create a new todo"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className={styles.btn}>Add</button>
    </form>
  )
}
