import { observer } from "mobx-react";
import store from "../store";

import './TodoList.css'


const TodoList = () => {
    return (
        <ul className="todo-list">
          {store.todos.map(todo => (
            <li 
              key={todo.id}
              className="todo-item"
            >
              <div className="todo-item-left">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => store.toggleTodo(todo.id)}
                  className="todo-checkbox"
                />
                <span className={todo.completed ? 'completed' : ''}>
                  {todo.title}
                </span>
              </div>
              <button
                onClick={() => store.removeTodo(todo.id)}
                className="delete-button"
              >
                X
              </button>
            </li>
          ))}
        </ul>
        
    )
};

export default observer(TodoList);