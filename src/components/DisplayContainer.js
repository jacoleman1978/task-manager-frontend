import React from 'react';
import TaskList from './TaskList';
import SimpleTaskForm from './SimpleTaskForm';

const DisplayContainer = (props) => {
    const priorities = props.priorities;
    const dueDates = props.dueDates;

    return (
        <div>
            <TaskList priorities={priorities} dueDates={dueDates}/>
            <SimpleTaskForm />
        </div>
    )
}

export default DisplayContainer;