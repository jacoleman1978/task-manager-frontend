import React, {useState, useEffect} from 'react';
import TaskGroup from './TaskGroup';
import taskDataService from '../services/taskDataService.js';

const TasksList = (props) => {
    let [taskData, setTaskData] = useState({});

    useEffect(() => {
        taskDataService.getTasks().then(response => {setTaskData(response.data)})
    }, [])
    
    console.log(taskData)

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
        <div>
            {groupTasksList}
        </div>
    )
}

export default TasksList;