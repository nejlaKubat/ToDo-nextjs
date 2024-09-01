import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
    const todos = await db.todo.findMany({})
    return todos
}

const TodosPage = async () => {
    const todos = await getData()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <TodoList todos={todos}/>
            </div>
        </main>
        
    )
}

export default TodosPage