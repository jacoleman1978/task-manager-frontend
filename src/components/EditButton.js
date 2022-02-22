import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';

function EditButton(props) {
    const navigate = useNavigate();
    let id = props.id;

    const handleClick = (e) => {
        navigate(id);
    }

    let editBtnStyle = {
        padding: "0rem 0.25rem"
    }
    
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