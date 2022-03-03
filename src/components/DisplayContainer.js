import React from 'react';
import TaskList from './TaskList';
import SimpleTaskForm from './SimpleTaskForm';

// Called from App.js
const DisplayContainer = (props) => {
    // Props
    const {priorities, dueDates} = props;

    // Display the TaskList React Component with SimpleTaskForm underneath
    return (
        <div>
            <TaskList priorities={priorities} dueDates={dueDates}/>
            <SimpleTaskForm />
        </div>
    )
}

export default DisplayContainer;