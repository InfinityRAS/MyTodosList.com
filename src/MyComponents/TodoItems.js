import React from 'react'

export const TodoItems = ({ todo, onDelete}) => {
    return (
        <>
            <div className="my-3">
                <h2 className="my-2">Todo No. {todo.sno}</h2>
                <h4>{todo.title} </h4>
                <p>{todo.desc} </p>
                <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
            </div>
            <hr />
        </>
    )
}
