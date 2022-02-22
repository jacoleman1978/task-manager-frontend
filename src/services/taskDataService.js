// Dependencies
import axios from 'axios';

class TaskDataService {
    getTasks = () => {
        return axios.get('http://localhost:3333/tasks')
    }

    getTask = (id) => {
        return axios.get(`http://localhost:3333/tasks/${id}`)
    }

    createTask = (data) => {
        return axios.post('http://localhost:3333/tasks/new', data)
    }

    updateTask = (id, data) => {
        return axios.put(`http://localhost:3333/tasks/${id}`, data)
    }

    deleteTask = (id) => {
        return axios.delete(`http://localhost:3333/tasks/${id}`)
    }
}

export default new TaskDataService();