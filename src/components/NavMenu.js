import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';

const NavMenu = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='#home'>Task Manager</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href='/tasks/priorities'>By Priority</Nav.Link>
                    <Nav.Link href='/tasks/duedates'>By Due Date</Nav.Link>
                    <Nav.Link href='/tasks/new'>New Task</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavMenu;