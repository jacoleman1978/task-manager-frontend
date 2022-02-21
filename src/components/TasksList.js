import React from 'react';
import {Container} from 'react-bootstrap';
import {TaskGroup} from './components';

const TasksList = (props) => {
    const priorities = props.priorities;
    const dueDates = props.dueDates;

    const data = [{_id: "", task: "", priority: "", dueDate: "", description: ""}];

    let groupTasksList =[];

    if (priorities) {
        const priorityHeaders = [
            'Critical: Do this task and ignore everything else!', 
            'High: Needs to be completed soon', 
            'Medium: No rush to be completed', 
            'Low: Just a reminder for now'
        ];
        
        groupTasksList = priorityHeaders.map((priority, index) => {
            return (
                <TaskGroup key={index} header={priority} data={data} />
            )
        });
    }
    
    if (dueDates) {
        const dueDateHeaders = [
            'Due Today',
            'Due Tomorrow',
            'Due Within the Next 7 Days',
            'Future Due Dates'
        ];
        
        groupTasksList = dueDateHeaders.map((dueDate, index) => {
            return (
                <TaskGroup key={index} header={dueDate} data={data} />
            )
        });
    }
    

    return (
        <Container>
            TasksList
            {groupTasksList}
        </Container>
    )
}

export default TasksList;