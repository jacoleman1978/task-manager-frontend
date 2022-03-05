import React, {useState, useEffect} from 'react';
import TaskGroup from './TaskGroup';
import {DeleteTaskContext} from '../context/DeleteTaskContext';
import TaskDataService from '../services/taskDataService.js';
import { useNavigate } from 'react-router-dom';

// Called from DisplayContainer
const TasksList = (props) => {
    // navigate allows redirection to another page when the button is clicked
    const navigate = useNavigate();  
    
    // Use State for data pulled from database
    let [taskData, setTaskData] = useState([]);

    // Use State for refresh after deleting task
    let [delFlag, toggleDelFlag] = useState(false)

    // Handle clicking delete button, causing refresh of tasks
    const handleDelClick = (id, delFlag, sort) => {
        try {
            TaskDataService.deleteTask(id);
            toggleDelFlag(!delFlag)
        }
        catch(error) {
            console.error(`Error while attempting to delete the task, ${error}`);
        }
    }

    // Retrieve data from the database then set the state
    useEffect(() => {
        TaskDataService.getTasks().then(response => {setTaskData(response.data)})
    }, [delFlag])

    // Accessing props that were passed in
    const {priorities, dueDates} = props;

    // Test data
    let data = [{_id: "", task: "", priority: "", dueDate: "", description: ""}];

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

        // Header background color
        let headerColors = ['red', 'orange', 'yellow', 'lightblue']

        // Making a TaskGroup by priority and passing in the header and appropriate data as props
        groupTasksList = priorityHeaders.map((priority, index) => {
            data = sortedTasks[index];
            let headerStyle = {backgroundColor: headerColors[index], borderRadius: "0.5rem"}
            return (
                <TaskGroup key={index} header={priority} data={data} headerStyle={headerStyle} sort={"priorities"}/>
            )
        });
    }
    // Determine if sorting by dueDates 
    if (dueDates) {
        let pastTasks = [];
        let todayTasks = [];
        let tomorrowTasks = [];
        let thisWeekTasks = [];
        let futureTasks = [];

        // Need today's date, but do not want time to be part of it, since user selected due date did not have a time
        const todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        let todayMonth = todayDate.getMonth();
        let todayDay = todayDate.getDate();
        let today = new Date(todayYear, todayMonth, todayDay);

        // Calculate the number of milliseconds(ms) in one day
        const msInOneDay = 1000 * 60 * 60 * 24;

        // Function to sort tasks by dueDate categories and push them to an array of the same type
        const sortByDate = (task) => {
            // Need dueDate, but do not want time to be part of it, since user selected due date did not have a time. Date in formate of 'YYYY-MM-DD'.
            let deconstructedDueDate = task.dueDate.split('-')
            let dueYear = deconstructedDueDate[0];
            // Months in the date function are from 0 to 11, so need to subtract one from the actual month to get the correct integer to use in Date()
            let dueMonth = deconstructedDueDate[1] - 1;
            let dueDay = deconstructedDueDate[2];

            let dueDate = new Date(dueYear, dueMonth, dueDay)
            // Find the difference in ms between today and the dueDate
            let daysUntilDue = (dueDate.getTime() - today.getTime()) / msInOneDay;

            if (daysUntilDue < 0) {
                pastTasks.push(task);
            } else if (daysUntilDue === 0) {
                todayTasks.push(task);
            } else if (daysUntilDue === 1) {
                tomorrowTasks.push(task);
            } else if (daysUntilDue <= 7) {
                thisWeekTasks.push(task);
            } else {
                futureTasks.push(task);
            }
        }
        
        // Iterating through all of the tasks and using the sorting function
        for (let i = 0; i < taskData.length; i++) {
            let task = taskData[i];
            sortByDate(task)
        }

        // Creating an array of arrays, where each inner array represents a specific dueDate category
        let sortedTasks = [pastTasks, todayTasks, tomorrowTasks, thisWeekTasks, futureTasks];

        // Defining the headers to be used when sorting by dueDate
        const dueDateHeaders = [
            'Past Due',
            'Due Today',
            'Due Tomorrow',
            'Due Within the Next 7 Days',
            'Future Due Dates'
        ];

        // Header background color
        let headerColors = ['red', 'orange', 'yellow', 'lightblue', 'lightgray']
        
        // Making a TaskGroup by dueDate and passing in the header and appropriate data as props
        groupTasksList = dueDateHeaders.map((dueDate, index) => {
            data = sortedTasks[index];
            let headerStyle = {backgroundColor: headerColors[index], borderRadius: "0.5rem"}
            return (
                <TaskGroup key={index} header={dueDate} data={data} headerStyle={headerStyle} sort={"dueDates"}/>
            )
        });
    }

    // Passes in the TaskGroup React components for whichever sorting method was chosen.
    return (
        <DeleteTaskContext.Provider value={{
                delFlag: delFlag,
                handleDelClick: handleDelClick
            }}
            
        >
            {groupTasksList}
        </DeleteTaskContext.Provider>
    )
}

export default TasksList;