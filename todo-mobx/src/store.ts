import { makeAutoObservable } from "mobx";

type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

class Store {
    todos: Todo[] = [];
    newTodo: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    addTodo() {
        this.todos.push({
            id: Date.now(),
            title: this.newTodo,
            completed: false
        });
        this.newTodo = "";
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    toggleTodo(id: number) {
        this.todos = this.todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
    }
}

const store = new Store();

export default store;

