import styles from './TodoList.module.css'
import TodoItem from '../TodoItem'
import { useTodo } from '../../context/useTodo'

export default function TodoList() {
  const { todos } = useTodo()
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
