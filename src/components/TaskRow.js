import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const TaskRow = (props) => {
    const task = props.task;
    const needButtons = props.needButtons;

    let row = [];

    const rowStyle = {
        display: "flex",
        marginTop: "5px"
    }

    const buttonGroupStyle = {
        marginLeft: "auto"
    }

    if (needButtons) {
        row = [
            <div key={task.id + task.priority} style={rowStyle}>
                {task.task}
                <div style={buttonGroupStyle}>
                    <EditButton id={task._id} />
                    <DeleteButton id={task._id} />
                </div>
            </div>
        ]
    } else {
        row = [
            <div key={task.id + task.priority}>
                {task.task}
            </div>
        ]
    }

    return (
        <li>
            {row}
        </li>
    )
}

export default TaskRow;