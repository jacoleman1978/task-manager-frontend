import React from 'react';
import TaskRow from './TaskRow';

// Called from TaskList
const TaskGroup = (props) => {
    // Props
    const header = props.header;
    const data = props.data;
    const headerStyle = props.headerStyle;

    // tasksList will be filled in the conditional below
    let tasksList =[];

    // If the data passed in has data in it, send each task to the the TaskRow React Component. Otherwise pass in an object that will display 'No tasks found' under the priority.
    if (data.length > 0) {
        tasksList = data.map((task) => {
            return (
                <TaskRow key={task._id} task={task} needButtons={true} />
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