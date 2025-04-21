import React, { useContext } from "react"
import TodoItem from "./TodoItem"
import { TodosContext } from "../store/todos-context"
import Styles from "./Todos.module.css"

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext)
  return (
    <ul className={Styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          removeTodo={() => todosCtx.removeTodo(item.id)}
        />
      ))}
    </ul>
  )
}

export default Todos
