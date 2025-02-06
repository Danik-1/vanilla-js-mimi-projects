import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { Suspense } from 'react'

async function SlowTitle() {
  // await new Promise(resolve => setTimeout(resolve, 2000))
  return <h1 className="todo-title">Todo List</h1>
}

function App() {
  return (
    <div className="container">
      <div className="card">
        <Suspense fallback={<div>Loading...</div>}>
          <SlowTitle />
        </Suspense>

        <TodoForm />
        <TodoList />
      </div>
    </div>
  )
}

export default App