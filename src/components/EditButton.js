import React from 'react';
import {Button} from 'react-bootstrap';

function EditButton(props) {
    let id = props.id;
    let editBtnStyle = {
        padding: "0rem 0.25rem"
    }
    
    return (
        <Button style={editBtnStyle} className="edit-button btn-secondary">
            <i className="far fa-edit"></i>
        </Button>
    )
}

export default EditButton;