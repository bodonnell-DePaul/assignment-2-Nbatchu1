import { Row, Col } from 'react-bootstrap';
import ItemGroup from './ItemGroup';
import ItemPane from './ItemPane';
import FormGroup from './FormGroup';
import Tab from 'react-bootstrap/Tab';
import './../App.css';
import { useState } from 'react';

function TabContainer() {
    let [selectedItem, setselectedItem] = useState(0);
    return (
        <Tab.Container fluid="md">
            <Row>
                <Col md={4}>
                    <FormGroup />
                </Col>
                <Col md={4}>
                    <ItemGroup selectId={selectedItem}
                        setSelectedId={(item) => setselectedItem(item)} />
                </Col>
                <Col md={4}>
                    <ItemPane selectedPaneId={selectedItem} />
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default TabContainer;