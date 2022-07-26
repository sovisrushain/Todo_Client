import './todolistgroup.css'
import Todo from '../../model/todo'

const TodoListGroup: React.FC<{list: Todo[], 
    onDelete: (id: string) => void, 
    onUpdate: (id: string) => void}> = ({list, onDelete, onUpdate}) => {

    const handleDelete = (id: string) => {
        onDelete(id)
    }

    const handleUpdate = (id: string) => {
        onUpdate(id)
        
        
    }

    return (
        <div className="todo-group col-4 mt-5">
            <ul className="list-group">
                {list.length === 0 && <li className="list-group-item text-success">There are no todos yet! 👽</li>}
                {list.map(todo => <li key={todo.id} className="list-group-item">
                    {todo.todo}
                    <span><button onClick={() => handleUpdate(todo.id)} type="button" className="btn btn-warning">Update</button></span>
                    <span><button onClick={() => handleDelete(todo.id)} type="button" className="btn btn-danger">Remove</button></span>
                    </li>)}
            </ul>
        </div>
    )
}

export default TodoListGroup