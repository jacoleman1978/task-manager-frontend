import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';

const NavMenu = () => {
    const navStyle = {
        marginRight: "0px",
        display: "flex"
    }
    
    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='#home'>Task Manager</Navbar.Brand>
                <div style={navStyle}>
                    <Nav.Link href='/tasks/'>By Priority</Nav.Link>
                    <Nav.Link href='/tasks/duedates'>By Due Date</Nav.Link>
                    <Nav.Link href='/tasks/new'>New Task</Nav.Link>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavMenu;