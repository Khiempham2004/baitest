import React from "react";
import './TodoList.css'
import { Link } from 'react-router-dom'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function TodoList() {
    return (
        <div>
            <h1 className="myTodoList">#todo</h1>
            <div className="todo-list">
                <Link to="/all">
                    <div type="text" className="todolist" >All</div>
                </Link>
                <Link to="/active">
                    <div className="todoLists">Active</div>
                </Link>
                <Link to="/complete">
                    <div className="todo-pead">Complete</div>
                </Link>
            </div>
        </div>);
}

export default TodoList;