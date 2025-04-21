import React, { useRef, useContext } from "react"
import Styles from "./NewTodo.module.css"
import { TodosContext } from "../store/todos-context"

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext)
  const todoTextInputRef = useRef<HTMLInputElement>(null)
  const addTodoHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      // throw an error
      return
    }

    todosCtx.addTodo(enteredText)
  }
  return (
    <form onSubmit={addTodoHandler} className={Styles.form}>
      <label htmlFor="input">Todo Text</label>
      <input type="text" id="input" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
