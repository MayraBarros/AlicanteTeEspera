import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'


function TodoList() {
const [todos, setTodos] = useState([]);

//Funcion de agregar una tarea
const addTodo = todo =>{
    if(!todo.text || /^\s*$/.test(todo.text)){
        return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
};

//Funcion editar la tarea
const updateTodo = (todoId, newValue) =>{
   if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
    }

    setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)))
}


//Funcion de quitar la tarea
const removeTodo = id =>{
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr)
};

//Tachar la tarea cuando ha sido completada
const completeTodo = id =>{
    let updatedTodos = todos.map(todo => {
        if(todo.id === id) {
            todo.isComplete = !todo.isComplete
        }
        return todo;
    })

    setTodos(updatedTodos)
}

  return (
    <div>
        <h1 className='titulo_todo'>¿Qué quieren hacer cuando vengan?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} 
        
        />
    </div>
  )
}

export default TodoList