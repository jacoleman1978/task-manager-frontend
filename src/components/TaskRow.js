import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

// Called from TaskGroup
const TaskRow = (props) => {
    // Props
    const task = props.task;
    const needButtons = props.needButtons;

    // row will be filled in below, depending on whether or not a row needs the EditButton and the DeleteButton.
    let row = [];

    // Style for each row
    const rowStyle = {
        display: "flex",
        marginTop: "5px"
    }

    // Style for the button groups to make them justify right, while the task remains on the left.
    const buttonGroupStyle = {
        marginLeft: "auto"
    }

    // If the prop passed in is true, make sure the task has an EditButton and DeleteButton on the row. Otherwise, if there is no task for the TaskGroup, display 'No tasks found', but do not include the buttons.
    if (needButtons) {
        row = [
            <div key={task._id + task.priority} style={rowStyle}>
                {task.task}
                <div style={buttonGroupStyle}>
                    <EditButton id={task._id} />
                    <DeleteButton id={task._id} />
                </div>
            </div>
        ]
    } else {
        row = [
            <div key={task._id + task.priority}>
                {task.task !== 'No tasks found'? task.task: <em>{task.task}</em>}
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