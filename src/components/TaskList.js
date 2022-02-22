import React, {useState, useEffect} from 'react';
import TaskGroup from './TaskGroup';
import TaskDataService from '../services/taskDataService.js';

const TasksList = (props) => {
    // Use State for data pulled from database
    let [taskData, setTaskData] = useState({});

    // Retrieve data from the database then set the state
    useEffect(() => {
        TaskDataService.getTasks().then(response => {setTaskData(response.data)})
    }, [])

    // Accessing props that were passed in
    const priorities = props.priorities;
    const dueDates = props.dueDates;

    // Test data
    let data = [{_id: "", task: "Test Data in TaskList.js", priority: "High", dueDate: "", description: ""}];

    // Need to fill groupTaskList whether sorting by priority or dueDate
    let groupTasksList =[];

    // Determine if sorting by priorities 
    if (priorities) {
        let criticalTasks = []
        let highTasks = [];
        let mediumTasks = [];
        let lowTasks = [];

        // Function to sort tasks by priority and push them to an array of the same type
        const sortByPriority = (task) => {
            if (task.priority === "Critical") {
                criticalTasks.push(task);
            } else if (task.priority === "High") {
                highTasks.push(task);
            } else if (task.priority === "Medium") {
                mediumTasks.push(task);
            } else {
                lowTasks.push(task)
            }
        }

        // Iterating through all of the todos and using the sorting function
        for (let i = 0; i < taskData.length; i++) {
            let task = taskData[i];
            sortByPriority(task)
        }

        // Creating an array of arrays, where each inner array represents a specific priority
        let sortedTasks = [criticalTasks, highTasks, mediumTasks, lowTasks];
        
        // Defining the headers to be used when sorting by priority
        const priorityHeaders = [
            'Critical: Do this task and ignore everything else!', 
            'High: Needs to be completed soon', 
            'Medium: No rush to be completed', 
            'Low: Just a reminder for now'
        ];

        // Making a TaskGroup by priority and passing in the header and appropriate data as props
        groupTasksList = priorityHeaders.map((priority, index) => {
            data = sortedTasks[index];
            return (
                <TaskGroup key={index} header={priority} data={data} />
            )
        });
    }
    // Determine if sorting by dueDates 
    if (dueDates) {
        let todayTasks = [];
        let tomorrowTasks = [];
        let thisWeekTasks = [];
        let futureTasks = [];

        // Function to sort tasks by priority and push them to an array of the same type
        const sortByDate = (date) => {
            let today = new Date();
            
        }
        
        const dueDateHeaders = [
            'Past Due',
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