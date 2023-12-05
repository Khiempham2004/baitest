import React from "react";
// import './Style.css'
import { useState } from "react";
import { MDBCheckbox } from 'mdb-react-ui-kit';

function Datalist() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Do coding challenges', completed: false },
        { id: 2, text: 'Do coding challenges', completed: false },
    ]);

    const handleChange = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };
    const [selectedFilter, setSelectedFilter] = useState('All');

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

export default Datalist;