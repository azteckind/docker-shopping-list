import React from 'react';

function ToDoList(props) {
    let eachItem = props.toDoItems.map(each => (
        <li> 
            {each.itemName}
            <button type="button" onClick={() => props.onDelete(each.itemName)} />
        </li>
    ))
    return (
        <ul>
            {eachItem}
        </ul>

    )
}

export default ToDoList;

handleDelete = (item) => {
    let newState = this.state.ToDoList
    newState = newState.filter(toDoItems => toDoItems.itemName !== itemName)
    this.setState({toDoItems: newState})
}