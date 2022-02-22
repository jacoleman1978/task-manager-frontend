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
        e.preventDefault();
        let data = {task: formTask, priority: formPriority, dueDate: formDueDate};
        TaskDataService.createTask(data);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Form.Group className="mb-3" controlId="formTask">
                    <Form.Control
                        type="text"
                        aria-describedby="Enter task"
                        placeholder="Enter task"
                        onChange={(e) => setTask(e.target.value)}
                    />
                </Form.Group>
            </Row>
            <Row>
                <Col xs="auto">
                    <Form.Group className="mb-3" controlId="formPriority">
                        <Form.Select aria-label="Default select example" required onChange={(e) => setPriority(e.target.value)}>
                            <option >Select a priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Control type="date" required onChange={(e) => setDueDate(e.target.value)}/>
                </Col>
                <Col>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SimpleTaskForm;