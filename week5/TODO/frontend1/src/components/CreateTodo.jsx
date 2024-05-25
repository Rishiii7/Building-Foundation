import { useState } from 'react'
import './CreateTodo.css'

function CreateTodo({todos, setTodos}) {
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");

    return (
        <div className="container">
            <input type="text" placeholder="title" onChange={ (e) => {
                setTitle(e.target.value);
            }}></input>
            <br></br><br></br>
            <input type="text" placeholder="description" onChange={ (e) => {
                setDesc(e.target.value);
            } }></input>
            <br></br><br></br>

            <button onClick={() => {
                fetch('http://localhost:3000/todo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: title,
                        description : description,
                        completed : false
                    })
                })
                .then(async (res) => {
                    const data = await res.json();
                    setTodos([...todos, {
                        title: title,
                        description : description,
                        completed : false
                    }]);
                    alert("Todo added");
                })
            }}>
                Add Todo
            </button>
        </div>
    )
}

export default CreateTodo