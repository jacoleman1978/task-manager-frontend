import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const NavMenu = () => {
    const divStyle = {
        backgroundColor: "lightgreen",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: "0.5rem",
        borderRadius: "1rem",
    }
    
    const navStyle = {
        marginRight: "0px",
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        justifyContent: "center",
        color: "black",
        marginLeft: "auto"
    }

    const navLinkStyle = {
        color: "black",
        border: "green 0.5px solid",
        borderRadius: "1rem",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem"
    }
    
    return (
        <Navbar bg='light' expand='lg' >
            <div style={divStyle}>
                <Navbar.Brand href='/'>Task Manager</Navbar.Brand>
                <Nav fill style={navStyle} variant="pills">
                    <Nav.Link style={navLinkStyle} href='/tasks/priorities'>By Priority</Nav.Link>
                    <Nav.Link style={navLinkStyle} href='/tasks/duedates'>By Due Date</Nav.Link>
                    <Nav.Link style={navLinkStyle} href='/tasks/new'>New Task</Nav.Link>
                </Nav>
            </div>
        </Navbar>
    )
}

export default NavMenu;