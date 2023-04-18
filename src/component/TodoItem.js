import React from 'react';
import PropTypes from 'prop-types'


const TodoItem = props => {

    const todo = props.todoProps;
    const markCompleteItem = props.markCompleteFunction;
    const deleteItem = props.deleteFunction;

    // Style
    const TodoItemStyle = {
        textDecoration: todo.complete ? 'line-through':'none',
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px dotted #ccc'

    }
    const DeleteButtonStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }

    // Return
    return (
        <p style={TodoItemStyle}>
            <input 
                type="checkbox"  // của html
                onChange={markCompleteItem.bind(this, todo.id)} // của React, lấy id của todo hiện tại. Bind dùng để gán hàm markComplete lên component này
                checked={todo.complete} // của html, liệu ô input đang ở trạng thái checked hay chưa
            />
            {todo.title}
            <button style={DeleteButtonStyle} onClick={deleteItem.bind(this, todo.id)}>Delete</button>
        </p>
    )
}

// Khai báo các prop được truyền xuống component parent
TodoItem.propTypes = {
    todoProps: PropTypes.object.isRequired, // data được truyền xuống là objec
    markCompleteFunction: PropTypes.func.isRequired, // data được truyền xuống là 1 function
    deleteFunction: PropTypes.func.isRequired // data được truyền xuống là 1 function
}


export default TodoItem;