import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import NavMenu from './components/NavMenu';
import DisplayContainer from "./components/DisplayContainer";
import TaskForm from "./components/TaskForm";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from './components/Profile';
import {Container} from 'react-bootstrap';

function App() {
  // Hook from Auth0
  const {isLoading, isAuthenticated} = useAuth0();

  if(isLoading) return <div>Loading...</div>
  return (
    <Container className="App">
      <NavMenu />
      <Router>
        <Routes>
          <Route path='/' element={
            <div>
              {isAuthenticated ? <LogoutButton />: <LoginButton />}
              <div>Home</div> 
              <Profile />
            </div>}
          />
          <Route path='/tasks' element={<DisplayContainer priorities={true} dueDates={false}/>} />
          <Route path='tasks/duedates' element={<DisplayContainer priorities={false} dueDates={true}/>} />
          <Route path='tasks/new' element={<TaskForm newTask={true} editTask={false}/>} />
          <Route path='tasks/:id' element={<TaskForm newTask={false} editTask={true}/>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
