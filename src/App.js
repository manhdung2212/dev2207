import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './component/todo';

class App extends Component {
  constructor(){
    super();
    let todoDefaults = [
      {
        id: 1,
        name: "Tập thể dục", 
        isCompleted: true
      },
      {
        id: 2, 
        name: "Đi chơi", 
        isCompleted: true
      },
      {
        id: 3, 
        name: "Ngủ", 
        isCompleted: false
      }
    ]

    this.state = {
      todos: todoDefaults
    }

    this.addNewTodo = this.addNewTodo.bind(this);
  }

  addNewTodo2 = () => {
    let obj = {
      id: 5, 
      name: 'Mới thêm', 
      isCompleted: false
    }

    this.setState({
      todos: [...this.state.todos, obj]
    });
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(x => x.id != id)
    })
  }

  // event handler
  addNewTodo(){
    let obj = {
      id: 5, 
      name: 'Mới thêm', 
      isCompleted: false
    }

    this.setState({
      todos: [...this.state.todos, obj]
    })
  }
  // Condition rendering 

  // list rendering in react 
  render(){    
    return (
      <div>
        <h1> Todos </h1>
        <button onClick={this.addNewTodo2}> Thêm mới todo </button>
        <button onClick={() => {this.deleteTodo(2)}}> Delete todo </button>
        <div className='box'>
          <div className='box-header'>
            <input placeholder='nhập công việc'/>
          </div>
          <div className='box-body'>
            <div className='list'>          
              {
                // template string 
                this.state.todos.map(x => (
                  <Todo key={x.id} todo={x}/>
                ))              
              }
              
            </div>
          </div>
          <div className='box-footer d-flex'>
            <p>1 item left </p>
            <div className='d-flex'>
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>          
            <p>Clear completed</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// bài tập  
// viết 1 app hiển thị danh sách sinh viên  
// dữ liệu mẫu 
let students = [
  {
    id: 1, 
    name: "Hoa", 
    gender: 0,  // Yêu cầu: hiển thị dạng nam (1), nữ(0)
    phone: "0123232323"
  },
  {
    id: 2, 
    name: "A",
    gender: 1,
    phone: "0123232332"
  }
]

// class component 
// function component

// <div key={x.id} className={`item ${x.isCompleted? 'completed': ''}`}>
                //   {x.isCompleted && <input type='checkbox' defaultChecked/>}
                //   {!x.isCompleted && <input type='checkbox'/>}
                //   <span> {x.name} </span>
                //   <button> Delete </button>
                // </div>