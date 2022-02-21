import React from 'react';
import {useParams} from 'react-router-dom';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

const TaskForm = (props) => {
    const params = useParams();

    const newTask = props.newTask;
    const editTask = props.editTask;

    return (
        <Container>
            TaskForm
        </Container>
    )
}

export default TaskForm;