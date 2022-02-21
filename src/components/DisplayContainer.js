import React from 'react';
import {Container} from 'react-bootstrap';
import {TasksList, SimpleTaskForm} from './components';

const DisplayContainer = (props) => {
    const priorities = props.priorities;
    const dueDates = props.dueDates;

    return (
        <Container>
            DisplayContainer
            <TasksList priorities={true} dueDates={false}/>
            <SimpleTaskForm />
        </Container>
    )
}

export default DisplayContainer;