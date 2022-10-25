import React, {Component} from "react";

class Todo extends React.Component
{
    constructor(props){
        super(props); 
    }
    render(){
        let todoItem = this.props.todo;
        let {changeCompletedEvent, deleteItem} = this.props; // destructuring
        return (
            <div className={`item ${todoItem.isCompleted? 'completed': ''}`}>
                {todoItem.isCompleted 
                    && <input onChange={() => {changeCompletedEvent(todoItem.id)}} type='checkbox' defaultChecked/>}
                
                {!todoItem.isCompleted 
                    && <input onChange={() => {changeCompletedEvent(todoItem.id)}} type='checkbox'/>}
                <span> {todoItem.name} </span>
                <button onClick={() => {deleteItem(todoItem.id)}}> Delete </button>
            </div>
        )
    }
} 

export default Todo;
 

//let name = obj.name; 

// let {name} = obj;


// this.props = {
//     changeCompletedEvent: "abc", 
//     todo: {}
// }

// let {changeCompletedEvent} = this.props; 

// let changeCompletedEvent = this.props.changeCompletedEvent; 