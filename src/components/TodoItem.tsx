import React from "react"
import Styles from "./TodoItem.module.css"

const TodoItem: React.FC<{ text: string; removeTodo: () => void }> = (
  props
) => {
  return (
    <li className={Styles.item} onClick={props.removeTodo}>
      {props.text}
    </li>
  )
}

export default TodoItem
