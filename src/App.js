import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavMenu from './components/NavMenu';
import DisplayContainer from "./components/DisplayContainer";
import TaskForm from "./components/TaskForm";
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Container className="App">
      <NavMenu />
      <Router>
        <Routes>
          <Route path='/' element={
            <div>
              <div>Home</div> 
            </div>}
          />
          <Route path='/tasks/priorities' element={<DisplayContainer priorities={true} dueDates={false}/>} />
          <Route path='/tasks/duedates' element={<DisplayContainer priorities={false} dueDates={true}/>} />
          <Route path='/tasks/:id/:sort' element={<TaskForm newTask={false} editTask={true}/>} />
          <Route path='/tasks/new' element={<TaskForm newTask={true} editTask={false}/>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
