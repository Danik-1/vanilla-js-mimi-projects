import { observer } from "mobx-react";
import store from "../store";

import './TodoList.css'

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    store.addTodo()
}

const TodoForm = () => {
    return(
        <>
            <form onSubmit={handleSubmit} className="todo-form">
            <div className="form-group">
                <input
                    type="text"
                    value={store.newTodo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => store.newTodo = e.target.value}
                    className="todo-input"
                    placeholder="Add a new todo..."
                />
                <button 
                    type="submit"
                    className="add-button"
                >
                    Add
                </button>
            </div>
            </form>
        </>
    );
};

export default observer(TodoForm);