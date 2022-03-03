import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';

// Called from TaskRow
function EditButton(props) {
    // navigate allows redirection to another page when the button is clicked
    const navigate = useNavigate();

    // Props
    const {id} = props;

    // Handle click function redirects to the TaskForm, including the taskId as a param in the url
    const handleClick = (e) => {
        navigate(id);
    }

    // Style for the button to include space between the buttons
    let editBtnStyle = {
        padding: "0rem 0.25rem"
    }
    
    // Button icon is from FontAwesome
    return (
        <Button 
            style={editBtnStyle} 
            className="edit-button btn-secondary"
            onClick={handleClick}
        >
            <i className="far fa-edit"></i>
        </Button>
    )
}

export default EditButton;