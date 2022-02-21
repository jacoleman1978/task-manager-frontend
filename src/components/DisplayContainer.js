import React from 'react';
import {Container} from 'react-bootstrap';
import TasksList from './TasksList';
import SimpleTaskForm from './SimpleTaskForm';

const DisplayContainer = (props) => {
    const priorities = props.priorities;
    const dueDates = props.dueDates;

    return (
        <Container>
            DisplayContainer
            <TasksList priorities={priorities} dueDates={dueDates}/>
            <SimpleTaskForm />
        </Container>
    )
}

export default DisplayContainer;