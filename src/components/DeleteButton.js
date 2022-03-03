import React from 'react';
import {Button} from 'react-bootstrap';
import TaskDataService from '../services/taskDataService';

// Called from TaskRow
function DeleteButton(props) {
    // Props
    const {id} = props;

    // Delete button style to provide spacing
    let delBtnStyle = {
        padding: "0rem 0.25rem",
        marginLeft: "0.25rem"
    }

    // handleClick function to send a delete request to the database to delete a task with the passed in id
    const handleClick = (e) => {
        TaskDataService.deleteTask(id);
    }

    // Button icon is from FontAwesome
    return (
            <Button 
                style={delBtnStyle} 
                className="btn-danger"
                onClick={handleClick}
            >
                <i className="fas fa-trash-alt"></i>
            </Button>
    )
}

export default DeleteButton;