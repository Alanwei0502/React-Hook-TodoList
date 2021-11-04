import useSessionStorageState from './useSessionStorageState';
import { v4 as uuidv4 } from 'uuid'

const useTodoState = () => {
  const [todos, setTodos] = useSessionStorageState('todos');

  return {
    todos,
    addTodo: newTodoText => {
      setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), task: newTodoText, completed: false }])
    },
    removeTodo: todoId => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId)
      setTodos(updatedTodos)
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo => todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo
      )
      setTodos(updatedTodos)
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo => todo.id === todoId
        ? { ...todo, task: newTask }
        : todo
      )
      setTodos(updatedTodos)
    }
  }
}

export default useTodoState



