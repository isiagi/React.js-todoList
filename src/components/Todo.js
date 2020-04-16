/*eslint-disable no-unused-expressions*/

import React, {Component} from 'react';
import TodoItems from './TodoItem';
import propTypes from 'prop-types'

class Todo extends Component {
  // markComplete = () =>{
  //   console.log('hello');
    
  // }
  render(){
    return this.props.todos.map((todo) => {
    return <TodoItems key={todo
    .id} todo={todo}  markComplete={this.props.markComplete
    } delTodo={this.props.delTodo}/>
    });
  }
  }

  Todo.protoTypes = {
    todos: propTypes.array.isRequired
  }


export default Todo;
