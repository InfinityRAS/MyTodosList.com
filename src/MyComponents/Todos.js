import React from 'react'
import { TodoItems } from './TodoItems';

export const Todos = (probs) => {
    return (
        <div className="container my-3">
            <h1 className="text-center">Todos List</h1>
            {probs.todos.map((todo) => {
                return (
                    <>
                        <TodoItems todo={todo} />
                    </>
                )
            })}
        </div>
    )
}
