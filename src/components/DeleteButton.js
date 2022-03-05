import React, {useContext} from 'react';
import {Button} from 'react-bootstrap';
import {DeleteTaskContext} from '../context/DeleteTaskContext';

// Called from TaskRow
function DeleteButton(props) {
    // Props
    const {id, sort} = props;

    // Use DeleteTaskContext
    const {delFlag, handleDelClick} = useContext(DeleteTaskContext);

    // Delete button style to provide spacing
    let delBtnStyle = {
        padding: "0rem 0.25rem",
        marginLeft: "0.25rem"
    }

    // Button icon is from FontAwesome
    return (
            <Button 
                style={delBtnStyle} 
                className="btn-danger"
                onClick={() => {handleDelClick(id, delFlag, sort)}}
            >
                <i className="fas fa-trash-alt"></i>
            </Button>
    )
}

export default DeleteButton;