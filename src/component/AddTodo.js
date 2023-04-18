import React, { useState } from 'react'
import PropTypes from 'prop-types'




const AddTodo = props => {

  const addTodoFunction = props.addTodoFunction

    // Set up state
    const [title, setTitle] = useState('')



    // Style
    const addTodoFormStyle = {
        display: 'flex'
      }
    
    const addTodoInputStyle = {
        flex: '10',
        padding: '5px'
      }
    

    // Create functions  
    const changeTitle = event => {
        setTitle(event.target.value)
    }

    const addSingleTodo = event => {
      event.preventDefault();
      if(title !== ''){
        addTodoFunction(title);
        setTitle('');
      }
    }  



    // Return
    return (
        <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
            <input 
                type="text" 
                name="title" 
                placeholder='Thêm vào công việc mới' 
                style={addTodoInputStyle}
                value={title}
                onChange={changeTitle}
                />
            <input type="submit" value="Thêm" className="btn"/>

        </form>
    )
}

AddTodo.propTypes = {
  addTodoFunction: PropTypes.func.isRequired 
}

export default AddTodo;