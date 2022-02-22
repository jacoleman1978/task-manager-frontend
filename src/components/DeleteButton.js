import React from 'react';
import {Button} from 'react-bootstrap';
import TaskDataService from '../services/taskDataService';

function DeleteButton(props) {
    let id = props.id;

    let delBtnStyle = {
        padding: "0rem 0.25rem",
        marginLeft: "0.25rem"
    }

    const handleClick = (e) => {
        TaskDataService.deleteTask(id);
    }

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