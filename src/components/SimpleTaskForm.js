import React, {useState} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import TaskDataService from '../services/taskDataService';

const SimpleTaskForm = () => {
    // Use state to keep track of info entered into the form
    let [formTask, setTask] = useState("");
    let [formPriority, setPriority] = useState("");
    let [formDueDate, setDueDate] = useState("")
    
    // Uses the DataService to port the data to database when form submitted
    const handleSubmit = (e) => {
        let data = {task: formTask, priority: formPriority, dueDate: formDueDate};
        TaskDataService.createTask(data);
    }

    const formStyle = {
        border: "black 1px solid",
        borderRadius: "2rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    }

    const row1Style = {
        marginTop: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
        width: "99%"
    }

    const row2Style = {
        display: "flex",
        justifyContent: "center"
    }

    return (
        <Form style={formStyle} onSubmit={handleSubmit}>
            <Row style={row1Style}>
                <Form.Group className="mb-3" controlId="formTask">
                    <Form.Control
                        required
                        type="text"
                        aria-describedby="Enter task"
                        placeholder="Enter task"
                        onChange={(e) => setTask(e.target.value)}
                    />
                </Form.Group>
            </Row>
            <Row style={row2Style}>
                <Col xs="auto">
                    <Form.Group className="mb-3" controlId="formPriority">
                        <Form.Select aria-label="Select a priority" required onChange={(e) => setPriority(e.target.value)}>
                            <option >Select a priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs="auto">
                    <Form.Group controlId="formDueDate">
                        <Form.Control 
                            type="date" 
                            required onChange={(e) => setDueDate(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col xs="auto">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SimpleTaskForm;