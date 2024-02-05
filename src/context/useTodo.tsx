import { createContext, useContext, useState } from 'react'
import type Todo from '../types/Todo'

interface TodoContextProps {
  todos: Todo[]
  toggleTodo: (id: number) => void
  addTodo: (text: string) => void
  deleteTodo: (id: number) => void
}

const TodoContext = createContext<TodoContextProps | null>(null)

function TodoProvider({ children }: { children: React.ReactNode }) {
  const localKey = 'todos'

  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem(localKey)
    if (savedTodos) return JSON.parse(savedTodos)
    return []
  })

  function toggleTodo(id: number) {
    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    localStorage.setItem(localKey, JSON.stringify(updateTodos))
    setTodos(updateTodos)
  }

  function addTodo(text: string) {
    const newTodo = { id: Date.now(), text, completed: false }
    localStorage.setItem(localKey, JSON.stringify([...todos, newTodo]))
    setTodos([...todos, newTodo])
  }

  function deleteTodo(id: number) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
    localStorage.setItem(
      localKey,
      JSON.stringify(todos.filter((todo) => todo.id !== id))
    )
  }

  return (
    <TodoContext.Provider value={{ todos, toggleTodo, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

function useTodo() {
  const context = useContext(TodoContext)
  if (!context) throw new Error('useTodo must be used within a TodoProvider')
  return context
}

export { useTodo, TodoProvider }
