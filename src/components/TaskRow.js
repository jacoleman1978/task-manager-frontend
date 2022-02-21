import React from 'react';
import {Container} from 'react-bootstrap';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const TaskRow = (props) => {
    const task = props.task;
    const needButtons = props.needButtons;

    let row = [];

    if (needButtons) {
        row = [
            task.task,
            <div style={{display: "flex"}}>
                <EditButton id={task._id}/>
                <DeleteButton id={task._id} />
            </div>
        ]
    } else {
        row = [task.task]
    }

    return (
        <Container>
            TaskRow
            {row}
        </Container>
    )
}

export default TaskRow;