import React, {Component} from "react";

class Todo extends React.Component
{
    constructor(props){
        super(props); 
    }
    render(){
        let todoItem = this.props.todo;
        return (
            <div className={`item ${todoItem.isCompleted? 'completed': ''}`}>
                {todoItem.isCompleted && <input type='checkbox' defaultChecked/>}
                {!todoItem.isCompleted && <input type='checkbox'/>}
                <span> {todoItem.name} </span>
                <button> Delete </button>
            </div>
        )
    }
} 

export default Todo;