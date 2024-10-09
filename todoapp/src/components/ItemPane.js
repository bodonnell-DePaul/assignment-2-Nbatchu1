import { Tab } from 'react-bootstrap';
import items from '../todoItems';

function ItemPane() {
    return (
        <Tab.Content>
            {
                items.map(item => (
                    <Tab.Pane className='mt-2' eventKey={item.dueDate} key={item.dueDate}>
                        <h6 contentEditable>{item.description}</h6>
                        <input type='date' value={item.dueDate} onChange={() => {}} />
                    </Tab.Pane>
                ))
            }
        </Tab.Content>
    );
}


export default ItemPane;