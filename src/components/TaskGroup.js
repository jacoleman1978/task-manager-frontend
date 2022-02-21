import React from 'react';
import {Container} from 'react-bootstrap';
import TaskRow from './TaskRow';

const TaskGroup = (props) => {
    const header = props.header;
    const data = props.data
    let tasksList =[];

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

    return (
        <Container>
            TaskGroup
            {header}
            {tasksList}
        </Container>
    )
}

export default TaskGroup;