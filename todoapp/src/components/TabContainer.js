import { Row, Col } from 'react-bootstrap';
import ItemGroup from './ItemGroup';
import ItemPane from './ItemPane';
import FormGroup from './FormGroup';
import Tab from 'react-bootstrap/Tab';
import './../App.css';

function TabContainer() {
    return (
        <Tab.Container fluid="md">
            <Row>
                <Col md={4}>
                    <FormGroup />
                </Col>
                <Col md={4}>
                    <ItemGroup />
                </Col>
                <Col md={4}>
                    <ItemPane />
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default TabContainer;