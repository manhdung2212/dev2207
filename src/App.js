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
      todos: todoDefaults,
      displayStatus: "all"
    }
  }

  enterData = (event) => {
    let val = event.target.value;
    // check enter người dùng 

    let {todos} = this.state; 
    let ids = todos.map(x => x.id); 
    let id = ids.length > 0? Math.max(...ids) + 1: 1;  
    if(event.keyCode == 13){
      let obj = {
        id: id,
        name: val, 
        isCompleted: false
      }

      this.setState({
        todos: [...this.state.todos, obj]
      }); 

      event.target.value = "";
    }
  }

  changeStatusCompleted = (id) => {
    let {todos} = this.state;  
    let obj = todos.find(x => x.id == id);
    obj.isCompleted = !obj.isCompleted; 
    this.setState({
      todos: [...todos]
    });
  }

  // 1 function xoá item: nhận tham số là id 
  // được gọi trong onClick - button delete trong todo componet
  // xoá 1 phần tử trong mảng: sử dụng hàm filter để lọc các phần tử có giá trị khác giá trị
  // truyền vào

  deleteItem = (id) => {
    let {todos} = this.state; 
    let newArray = todos.filter(x => x.id != id);
    this.setState({
      todos: [...newArray]
    })
  }

  changeDisplayStatus = (status) => {
    this.setState({
      displayStatus: status
    }); 
  }
  
  // status : "all" or "active" or "completed" 
  filterStatus = (status) => {
    this.setState({
      displayStatus: status
    }); 
  }

  // clear all completed 
  clearAll = () => {
    let {todos} = this.state;
    this.setState({
      todos: [...todos.filter(x => !x.isCompleted)]
    });
  }
  // obj1, obj2, OBJ3, obj4, obj5
  // Condition rendering 

  // list rendering in react 
  render(){  
    let {todos, displayStatus} = this.state;
    if(displayStatus == "active"){
      todos = todos.filter(x => !x.isCompleted); 
    }else if(displayStatus == "completed"){
      todos = todos.filter(x => x.isCompleted); 
    }

    let actives = this.state.todos.filter(x => !x.isCompleted); 

    return (
      <div>
        <h1> Todos </h1>
        <div className='box'>
          <div className='box-header'>
            <input placeholder='nhập công việc' onKeyUp={this.enterData}/>
          </div>
          <div className='box-body'>
            <div className='list'>          
              {
                // template string 
                todos.map(x => (
                  <Todo changeCompletedEvent={this.changeStatusCompleted} 
                        deleteItem={this.deleteItem}
                  key={x.id} todo={x}/>
                ))              
              }
              
            </div>
          </div>
          <div className='box-footer d-flex'>
            <p>{actives.length} item left </p>
            <div className='d-flex'>
              <button onClick={() => {this.filterStatus("all")}}>All</button>
              <button onClick={() => {this.filterStatus("active")}}>Active</button>
              <button onClick={() => {this.filterStatus("completed")}}>Completed</button>
            </div>          
            <p onClick={this.clearAll}>Clear completed</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

