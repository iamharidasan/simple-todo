import React, { useState } from "react"
import Todo from "../models/todo"

type TodoContextType = {
  items: Todo[]
  addTodo: (todoText: string) => void
  removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodoContextType>({
  items: [],
  addTodo: (todoText: string) => {},
  removeTodo: (id: string) => {},
})

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo)
    })
  }

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId)
    })
  }
  const contextValue: TodoContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
  }
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider
