import React from 'react';
import TasksList from './TasksList';
import SimpleTaskForm from './SimpleTaskForm';

const DisplayContainer = (props) => {
    const priorities = props.priorities;
    const dueDates = props.dueDates;

    return (
        <div>
            <TasksList priorities={priorities} dueDates={dueDates}/>
            <SimpleTaskForm />
        </div>
    )
}

export default DisplayContainer;