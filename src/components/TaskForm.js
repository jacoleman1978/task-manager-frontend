import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Form, Button, Row, Col} from 'react-bootstrap';
import TaskDataService from '../services/taskDataService';
import { useNavigate } from 'react-router-dom';

// Called from 'NewTask' NavMenu option and from EditButton
const TaskForm = (props) => {
    // navigate allows redirection to another page when the button is clicked
    const navigate = useNavigate(); 
    
    // Retrieve the taskId from the url
    const {id, sort} = useParams();
    const taskId = id || "";

    // Props
    const {newTask, editTask} = props;

    // Use state to keep track of info entered into the form
    let [taskData, setTaskData] = useState([])
    let [formTask, setTask] = useState("");
    let [formPriority, setPriority] = useState("");
    let [formDueDate, setDueDate] = useState("");
    let [formDescription, setDescription] = useState("");
    let [dateCreated, setDateCreated] = useState("");

    // If editTask, then the data will be retrieved from the database by id
    useEffect(() => {
        if (editTask) {
            TaskDataService.getTask(taskId)
                .then(response => {setTaskData(response.data)})
        }
    },[editTask, taskId])
    
    // When data is retrieved for an edit task, set the state for each of the keys
    useEffect(() => {
        if (taskData.length > 0) {
            setTask(taskData[0].task);
            setPriority(taskData[0].priority);
            setDueDate(taskData[0].dueDate);
            setDescription(taskData[0].description);
            setDateCreated(taskData[0].dateCreated);
        }
    }, [taskData])
    

    // Uses the DataService to push the data to database when form submitted: post for newTask == true and put for editTask == true.
    const handleSubmit = (e) => {
        let data = {task: formTask, priority: formPriority, dueDate: formDueDate, description: formDescription, dateCreated: dateCreated};
        if (newTask) {
            TaskDataService.createTask(data);
        }
        if (editTask) {
            TaskDataService.updateTask(taskId, data);
            navigate(`/tasks/${sort}`)
        }
    }

    // Style for the form
    const formStyle = {
        border: "black 1px solid",
        borderRadius: "2rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "1rem"
    }

    // Style for the first row: 'Enter task'
    const row1Style = {
        marginTop: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
        width: "99%"
    }

    // Style for the second row: 'Detailed description'
    const row2Style = {
        marginLeft: "auto",
        marginRight: "auto",
        width: "99%"
    }

    // Style for the third row: 'Priority', 'DueDate', 'Submit'
    const row3Style = {
        display: "flex",
        justifyContent: "center",

    }

    // onChange used to setState for that variable/key
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
                        value={formTask}
                    />
                </Form.Group>
            </Row>
            <Row style={row2Style}>
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Control 
                        as="textarea" 
                        rows={5} 
                        aria-describedby="Enter more details about task"
                        placeholder="(Optional) Enter details about the task" 
                        onChange={(e) => setDescription(e.target.value)}
                        value={formDescription}
                    />
                </Form.Group>
            </Row>
            <Row style={row3Style}>
                <Col xs="auto">
                    <Form.Group className="mb-3" controlId="formPriority">
                        <Form.Select 
                            aria-label="Select a priority" 
                            required 
                            onChange={(e) => {setPriority(e.target.value)}}
                            value={formPriority}
                        >
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
                            required 
                            onChange={(e) => setDueDate(e.target.value)}
                            value={formDueDate}
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

export default TaskForm;