import React from "react";
import './Style.css'
import { useState } from "react";
import { MDBCheckbox } from 'mdb-react-ui-kit';

function TodoListHeader() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Do coding challenges', completed: false },
        { id: 2, text: 'Do coding challenges', completed: false },
        { id: 3, text: <strike>Do coding challenges</strike>, completed: true },
    ]);

    const handleChange = (id) => {
        const updatedTasks = tasks.map((tasks) => {
            if (tasks.id === id) {
                return { ...tasks, completed: !tasks.completed };
            }
            return tasks;
        });
        setTasks(updatedTasks);

    };
    const [selectedFilter, setSelectedFilter] = useState('');
    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };
    
    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id} className="todo-item-container">
                    <MDBCheckbox
                        className="mydatalist"
                        name={`flexCheck${task.id}`}
                        value={task.id}
                        id={`Docodingchallenges${task.id}`}
                        label={task.text}
                        checked={task.completed}
                        onChange={() => handleFilterChange(task.text)}
                    />
                </div>
            ))}
        </div>
    )
}

export default TodoListHeader;