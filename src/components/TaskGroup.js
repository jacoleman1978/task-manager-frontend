import React from 'react';
import TaskRow from './TaskRow';

const TaskGroup = (props) => {
    const header = props.header;
    const data = props.data
    let tasksList =[];
    console.log(data)

    if (data.length > 0) {
        tasksList = data.map((task) => {
            return (
                <TaskRow key={task._id} task={task} needButtons={true} />
            )
        });
    } else {
        const task = [{_id: "", task: "No tasks found", priority: "", dueDate: "", description: ""}];
        tasksList = [<TaskRow key={0} task={task} needButtons={false}/>];
    }

    const groupStyle = {
        margin: "1rem 0rem"
    }

    const headerStyle = {
        backgroundColor: "red"
    }


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