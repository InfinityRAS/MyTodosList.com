import React from 'react'
import { TodoItems } from './TodoItems';

export const Todos = (probs) => {
    return (
        <div className="container my-3">
            <h1 className="text-center">Todos List</h1>
            {probs.todos.length === 0 ? <h3>No Todos to Display.. Click 'Add Todo' button to add a todo</h3> :

                probs.todos.map((todo) => {
                    return <TodoItems todo={todo} key={todo.sno} onDelete={probs.onDelete} />
                })

            }
        </div>
    )
}
