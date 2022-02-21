import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {NavMenu, DisplayContainer, TaskForm} from './components';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Container className="App">
      <NavMenu />
      <Router>
        <Routes>
          <Route path='tasks/priorities' element={<DisplayContainer priorities={true} dueDates={false}/>} />
          <Route path='tasks/duedates' element={<DisplayContainer priorities={false} dueDates={true}/>} />
          <Route path='tasks/new' element={<TaskForm newTask={true} editTask={false}/>} />
          <Route path='tasks/:id' element={<TaskForm newTask={false} editTask={true}/>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
