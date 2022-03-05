import React from 'react';
import TaskRow from './TaskRow';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

// Called from TaskList
const TaskGroup = (props) => {
    // Props
    const {header, data, headerStyle, sort} = props;

    // tasksList will be filled in the conditional below
    let tasksList =[];

    // Style for the button groups to make them justify right, while the task remains on the left.
    const buttonGroupStyle = {
        display: "flex",
        marginLeft: "auto",
        alignItems: "center"
    }

    // Style for each row
    const rowStyle = {
        display: "flex",
        marginTop: "5px",
    }

    // If the data passed in has data in it, send each task to the the TaskRow React Component. Otherwise pass in an object that will display 'No tasks found' under the priority.
    if (data.length > 0) {
        tasksList = data.map((task) => {
            return (
                <li key={task._id} style={rowStyle}>
                    <TaskRow  task={task} needButtons={true} />
                    <div style={buttonGroupStyle}>
                        <EditButton id={task._id} sort={sort}/>
                        <DeleteButton id={task._id} sort={sort}/>
                    </div>
                </li>
            )
        });
    } else {
        const task = {_id: "", task: "No tasks found", priority: "", dueDate: "", description: ""};
        tasksList = [<TaskRow key={0} task={task} needButtons={false}/>];
    }

    // Style for the GroupTask
    const groupStyle = {
        margin: "1rem 0rem"
    }

    // headerStyle was passed in as prop from TaskList and determines the background color of each header.
    return (
        <div style={groupStyle}>
            <div style={headerStyle}>
                {header}
            </div>
            <ul>
                {tasksList}
            </ul>
        </div>
    )
}

export default TaskGroup;