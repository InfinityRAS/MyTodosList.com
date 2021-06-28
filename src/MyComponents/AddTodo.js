import React, {useState} from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const descStyle = {
	resize: "none"
    }
    const submit = (e) => {
        e.preventDefault();

        if (!title || !desc) {
            alert("Title or description can't be blank")
        }   else {
            props.addTodo(title, desc)
        }

        setTitle("")
        setDesc("")
    }

    return (
        <div className="container my-3">
            <h3>Add Todos</h3>
            <form onSubmit={submit} id="form">
                <div className="row mb-3">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Todo title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea id="desc" cols="30" rows="10" value={desc} className="form-control" onChange={(e) => {setDesc(e.target.value)}} style={descStyle}></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-success btn-sm">Add todo</button>
                <button type="reset" className="btn btn-outline-danger btn-sm mx-5">Clear All</button>
            </form>
            <hr />
        </div>

    )
}
