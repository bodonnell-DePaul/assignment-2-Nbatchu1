import { Card, Form, Button } from "react-bootstrap";


function FormGroup() {
    return (
        <Card className="p-2" style={{ backgroundColor: '#1FEB6A' }}>
                <Form className="my-2 ">
                    <Form.Group className="mb-3">
                    <Form.Label className='mx-2'>Todo item</Form.Label>
                        <Form.Control type="text" placeholder="Add todo item" />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label className='mx-2'>Due Date</Form.Label>
                        <input aria-label="Due Date" type="date" className="w-100" />
                    </Form.Group>
                    <div className='btn btn-primary mb-3 w-100' type="submit">Add Todo</div>
                </Form>
        </Card>
    );
}

export default FormGroup;