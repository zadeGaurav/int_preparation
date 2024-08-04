import React, { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState('')
    const [todo, setTodo] = useState([])
    const[id, setId] = useState(0)
    const handleTodo = () => {
        todo.push({id: id, task: task})
        setTodo([...todo])
        setTask('')
        setId(id+ 1)
    }
    function handleDelete(id){
        // console.log(id)
        return setTodo([...todo.filter((todos) => id !== todos.id)])
    }
    function handleEdit(id){
        let inp = prompt('Enter new todo', 'default todo')
        return setTodo([...todo.filter(todos => {if(id === todos.id){
            return todos.task = inp;
        }
        return todos
    })])
    }
  return (
    <div className='parent' >
        <input type="" name="" onChange={(e)=> setTask(e.target.value)}  value={task}/>
        <button onClick={handleTodo}>Add Todo</button>
        <div>{console.log(task)}</div>
        <div>{todo.map((item, i) => {
            return <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3><li type='none' key={item.id} >{item.task}</li></h3>
                <button onClick={()=> handleDelete(item.id)} >delete todo</button>
                <button onClick={()=> handleEdit(item.id)}>Edit</button>
                {/* {item.id} {item.task} */}
            </div>
        })} </div>
        
    </div>
  )
}

export default Todo