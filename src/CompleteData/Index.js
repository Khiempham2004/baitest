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
    const handleDeleteAll = (completeId) => {
        const updatedCompleteTasks = complete.filter(item => item.id !== completeId)
        setComplete(updatedCompleteTasks);
    };
    const deleteAll = () => {
        setComplete([deleteAll]);
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
                        onChange={() => deleteAll(item.id)}
                    />
                    <button className=" icon" onClick={() =>deleteAll(item.id)}>
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