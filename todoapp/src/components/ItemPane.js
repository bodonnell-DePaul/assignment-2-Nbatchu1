import { Tab } from 'react-bootstrap';
import items from '../todoItems';

function ItemPane() {
    return (
        <Tab.Content>
            <Tab.Pane key={"message"}>Select an item to see description</Tab.Pane>
            {
                items.map(item => (
                    <Tab.Pane eventKey={item.dueDate} key={item.dueDate}>{item.description}</Tab.Pane>
                ))
            }
        </Tab.Content>
    );
}


export default ItemPane;