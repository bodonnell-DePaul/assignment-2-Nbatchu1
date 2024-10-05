import { Navbar, Button } from "react-bootstrap";

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#">Assignment 2: Naga Kotesh Uday Kiran Batchu ToDo List</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarCollapsiveNav" />
            <Navbar.Collapse id="navbarCollapsiveNav" className="justify-content-end">
                <Button variant="primary">Add New</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;