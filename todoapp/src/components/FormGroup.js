import { Card, Form, Button } from "react-bootstrap";


function FormGroup() {
    return (
        <Card className="p-2">
            <Card.Body>
                <p className="w-auto lead">Add New TODO Item</p>
                <Form>
                    <Form.Group className="mb-2">
                        <Form.Control type="text" placeholder="Todo Title" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Control type="text" placeholder="Todo Description" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default FormGroup;