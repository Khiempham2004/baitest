import React, { useState } from "react";
import './Style.css'
import { MDBCheckbox } from 'mdb-react-ui-kit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function CompleteData() {
    const [complete, setComplete] = useState([
        { id: 1, text: <strike>Task done</strike>, completed: true },
        { id: 2, text: <strike>Task done</strike>, completed: true },
        { id: 3, text: <strike>Task done</strike>, completed: true },
    ])
    // const [tasks, setTask] = useState('')
    const [dataPlete, setDataPlete] = useState('')
    // const handleChange = (id) => {
    //     const updatedTasks = tasks.map((tasks) => {
    //         if (tasks.id === id) {
    //             return { ...tasks, completed: !tasks.completed};
    //         }
    //         return tasks;
    //     });
    //     setTask(updatedTasks);
    // };
    const handleFilterChange = (deleteComplete) => {
        const handldFilter = dataPlete.filter((detail, i) => i !== deleteComplete)
        setDataPlete(handldFilter);
    };
    const handleDeleteAll = (completeId) => {
        const updatedCompleteTasks = complete.filter(item => item.id !== completeId)
        setComplete(updatedCompleteTasks);
    };

    return (
        <div className="completeTask">
            {complete.map((task, item) => (
                <div key={task} className="completeDta">
                    <MDBCheckbox
                        defaultChecked
                        variant="contained"
                        name={`flexCheck${task.id}`}
                        value={task.id}
                        id={`Docodingchallenges${task.id}`}
                        label={task.text}
                        checked={task.completed}
                        onChange={() => handleDeleteAll(item.id)}
                    />
                    <button className=" icon">
                        <DeleteOutlinedIcon
                            className="deleteIcon"
                            onChange={() => handleDeleteAll(item.id)}
                        />
                    </button>
                </div>
            ))}
            <button type="text" className="completeAll" onClick={() => handleDeleteAll()}>
                Delete All
            </button>
        </div>
    );
}

export default CompleteData;