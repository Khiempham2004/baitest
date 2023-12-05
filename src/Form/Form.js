import React from "react";
import './Form.css'
import { useState } from "react";
function Form() {
    const [todoList, setTodoList] = useState([]);

    const handleAddDetail = (event) => {
        event.preventDefault();
        const newDetail = event.target.elements.addDetails.value;
        if (newDetail) {
            setTodoList([...todoList, newDetail]);
            event.target.elements.addDetails.value = '';
        }
    };
    const handleDeleteDetail = (index) => {
        const updatedDetails = todoList.filter((detail, i) => i !== index);
        setTodoList(updatedDetails);
    };
    return (
        <div>
            <form className="form-todo" onSubmit={handleAddDetail}>
                <input name="addDetails" type="text" placeholder="Add details" />
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
            <div className="todoList">
                {todoList.map((todoList, index) => (
                    <div key={index} className="coding-index">
                        <div style={{ fontSize: '30px' }}>{todoList}</div>
                        {/* <button onClick={() => handleDeleteDetail(index)}>Delete</button> */}
                    </div>
                ))}
            </div>
        </div>


    );
}

export default Form;