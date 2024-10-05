import { Row, Col } from 'react-bootstrap';
import ItemGroup from './ItemGroup';
import ItemPane from './ItemPane';
import Tab from 'react-bootstrap/Tab';
import './../App.css';

function TabContainer() {
    return (
        <Tab.Container fluid="md">
            <Row>
                <Col md={4}>
                    <ItemGroup />
                </Col>
                <Col md={8}>
                    <ItemPane />
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default TabContainer;