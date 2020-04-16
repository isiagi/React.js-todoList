import React, {Component} from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todo from './components/Todo';
import AddTodo from './components/layout/AddTodo';
import About from './components/Pages/About'
import {v4 as uuid} from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos : [{
      id: uuid(),
      title: 'practice react',
      complete: false
    },
    {
      id:uuid(),
      title: 'Meet Wife',
      complete: false
    },
    {
      id: uuid(),
      title: 'learn node js',
      complete: false
    }
    ]
  }

  markComplete = (id) =>{
    // console.log(id);
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.complete = !todo.complete
      }
      return todo;
    })})

   }
   //delete
   delTodo = (id) => {
    //  console.log(id);
    this.setState({todos: [...this.state.todos.filter(todo => todo.id 
      !== id)]}) 
   }
   //add Todo
   addTodo = (title) => {
     const newTodo = {
       id: uuid(),
       title,
       complete:false
     }
     this.setState({ todos: [...this.state.todos, newTodo]})
   }

  render(){
    //console.log(this.state.todos);
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Header />
        <Route exact path="/" render={props => {
          return (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
             <Todo todos={this.state.todos} markComplete={this.markComplete} 
          delTodo={this.delTodo}/>
          </React.Fragment>
          )
        }}/>
        <Route path="/about" component = {About}/>
      </div>
    </div>
    </Router>
  );
  }
}

export default App;
