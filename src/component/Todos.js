import React, {Fragment, useState, useEffect} from 'react';

import TodoItem from './TodoItem'
import AddTodo from './AddTodo'


import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

const Todos = () => {

const [todosState, setTodosState] = useState ([]);


// Get Request
useEffect(() => {
    const getTodos = async () => {
        try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
        setTodosState(res.data); // data của thư viện axios
        } catch(error) {
            console.log(error.message)
        }
    }

    getTodos();
}, [])


//Set up mark complete function
const markComplete = id => {
    const newTodos = todosState.map(todo => { // tạo 1 trang thái todo mới, duyệt qua mỗi todo trong trạng thái cũ
        if(todo.id === id) { // lấy id của todo xét có phải ko
            todo.complete = !todo.complete; // lật ngược complete hiện tạo
        }
        return todo;
    })
    //thiết lập lại trạng thái mới
    setTodosState(newTodos);
}


// Set up delete function 
const deleteTodo = async id => {

    try {
        await axios.delete('https://jsonplaceholder.typicode.com/todos/${id}');
        const newTodos = todosState.filter(todo => todo.id !== id)
        setTodosState(newTodos);
    } catch (error) {
        console.log(error.message);
    }


}


// Set up add Todo Function
const addTodo = async title => {
    // const newTodo = [...todosState, 
    // {
    //     id: uuidv4(),
    //     title,
    //     complete: false
    // }] // const newTodo = [{Việc 1}, {Việc 2}, {Việc 3}, {id:4, tiitle, complete: false}]
    // setTodosState(newTodo);

    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', 
            {
            title,
            complete: false
            }
        )
        console.log(res.data);

        //Hiển thị lại trên màn hình
        const newState = [...todosState, res.data];
        setTodosState(newState);    

    } catch (error) {
        console.log(error.message);
    }


}



// Return
    return (
        <Fragment>
            <AddTodo addTodoFunction={addTodo} />
            {
                todosState.map(todo => {
                    return (
                        <TodoItem //khai báo hàm con component con TodoItem
                        key={todo.id} // mỗi phần tử trong map cần phân biệt lẫn nhau
                        todoProps = {todo} //truyển data xuống component con 
                        markCompleteFunction = {markComplete} // truyên hàm xuống component con 
                        deleteFunction = {deleteTodo}
                         />  
                    );
                }
                )
            }
        </Fragment>
    )
}

export default Todos;