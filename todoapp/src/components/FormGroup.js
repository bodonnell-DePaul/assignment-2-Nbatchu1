import { Card, Form, Button } from "react-bootstrap";


function FormGroup() {
    return (
        <Card className="p-2">
            <Card.Body>
                <p className="w-auto lead">Add New TODO Item</p>
                <Form>
                    <Form.Group className="mb-2">
                        <Form.Label>Add todo item</Form.Label>
                        <Form.Control type="text" placeholder="Add todo item" />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Due Date</Form.Label>
                        <input aria-label="Due Date" type="date" className="w-100" />
                    </Form.Group>
                    <Button variant="primary w-100" type="submit" value={"Add Todo"}>
                    Add Todo
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default FormGroup;