import React, {useState} from 'react';
import {Card} from 'react-bootstrap';

// Called from TaskGroup
const TaskRow = (props) => {
    // Props
    const {task, needButtons} = props;

    // Set state for which view to display. view State changed by clicking on a list item.
    let [view, setView] = useState(true)

    // This is the default view and only displays the task and the EditButton and DeleteButton, if needed.
    const simpleView = () => {
        // If the prop passed in is true, make sure the task has an EditButton and DeleteButton on the row. Otherwise, if there is no task for the TaskGroup, display 'No tasks found', but do not include the buttons.
        if (needButtons) {
            // Style for each row
            const rowStyle = {
                display: "flex",
                marginTop: "5px",
            }

            return (
                <div key={task._id + task.priority} style={rowStyle} >
                    {task.task}
                </div>
            )
        } else {
            return (
                <div key={task._id + task.priority}>
                    {task.task !== 'No tasks found'? task.task: <em>{task.task}</em>}
                </div>
            )
        }
    }

    // The detailed view is displayed when the task list item is clicked.
    const detailedView = () => {
        // If the prop passed in is true, make sure the task has an EditButton and DeleteButton on the row. Otherwise, if there is no task for the TaskGroup, display 'No tasks found', but do not include the buttons.
        if (needButtons) {
            // Style to use when detailed view is active
            const detailedRowDisplay = {
                display: "flex",
                justifyContent: "center",
            }

            // Style for each row
            const rowStyle = {
                display: "flex",
                marginTop: "5px",
                backgroundColor: "antiquewhite"
            }

            return (
                <div style={detailedRowDisplay}>
                    <Card key={task._id + task.priority} style={rowStyle} >
                        <Card.Body>
                            <Card.Title><strong>{task.task}</strong></Card.Title>
                            <hr />
                            <Card.Text>
                                <strong>Description</strong>: {task.description !== ""? task.description: <em>No detailed description provided.</em>}
                            </Card.Text>
                            <Card.Text>
                                <strong>Priority</strong>: {task.priority}
                            </Card.Text>
                            <Card.Text>
                                <strong>Due Date</strong>: {task.dueDate}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
            )
        } else {
            return (
                <div key={task._id + task.priority}>
                    {task.task !== 'No tasks found'? task.task: <em>{task.task}</em>}
                </div>
            )
        }
    }

    // How the task info is displayed to the user depends on the state of view.
    return (
        <div onClick={() => {setView(!view)}}>
            {view ? simpleView(): detailedView()}
        </div>
    )
}

export default TaskRow;