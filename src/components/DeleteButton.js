import React from 'react';
import {Button} from 'react-bootstrap'

function DeleteButton(props) {
    let id = props.id

    let delBtnStyle = {
        padding: "0rem 0.25rem",
        marginLeft: "0.25rem"
    }

    return (
            <Button 
                style={delBtnStyle} className="btn-danger"
                ><i className="fas fa-trash-alt"></i>
            </Button>
    )
}

export default DeleteButton;