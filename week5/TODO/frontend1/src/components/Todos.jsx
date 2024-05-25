
import './Todo.css'

function Todos({todos, onToggleComplete}) {
    return (
        <div className="todo-list">
            {
                todos.map((todo) => {
                    return (
                        <div key={String(todo._id)} className='each-card'>
                            <h2>{todo.title}</h2>
                            <p>{todo.description}</p>
                            <button onClick={  () => {
                                onToggleComplete(todo._id);
                                // alert("change done");
                            }}>
                                {todo.completed === true ? "completed" : "Mark as complete"}
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Todos