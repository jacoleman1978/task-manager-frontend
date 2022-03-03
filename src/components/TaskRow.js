import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

// Called from TaskGroup
const TaskRow = (props) => {
    // Props
    const {task, needButtons} = props;

    // Style for each row
    const rowStyle = {
        display: "flex",
        marginTop: "5px"
    }

    // Style for the button groups to make them justify right, while the task remains on the left.
    const buttonGroupStyle = {
        marginLeft: "auto"
    }

    // Set state for which view to display. view State changed by clicking on a list item.
    let [view, setView] = useState(true)

    // This is the default view and only displays the task and the EditButton and DeleteButton, if needed.
    const simpleView = () => {
        // If the prop passed in is true, make sure the task has an EditButton and DeleteButton on the row. Otherwise, if there is no task for the TaskGroup, display 'No tasks found', but do not include the buttons.
        if (needButtons) {
            return (
                <div key={task._id + task.priority} style={rowStyle} >
                    {task.task}
                    <div style={buttonGroupStyle}>
                        <EditButton id={task._id} />
                        <DeleteButton id={task._id} />
                    </div>
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
            return (
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
                        <div style={buttonGroupStyle}>
                            <EditButton id={task._id} />
                            <DeleteButton id={task._id} />
                        </div>
                    </Card.Body>
                </Card>
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
        <li onClick={() => {setView(!view)}}>
            {view ? simpleView(): detailedView()}
        </li>
    )
}

export default TaskRow;