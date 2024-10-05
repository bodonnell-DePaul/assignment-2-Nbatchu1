import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import items from '../todoItems';

function ItemGroup() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const getActiveColor = (date) => {
        if (date === 1)
            return 'secondary';
        else if (date === 2)
            return 'success';
        else if (date === 3)
            return 'danger';
        else
            return 'primary';
    }
    return (<ListGroup defaultActiveKey={0}>
        {
            items.map((item, i) => (
                <ListGroup.Item
                    variant={getActiveColor(i)}
                    eventKey={item.dueDate}
                    action={true}
                    active={i === selectedIndex}
                    key={i}
                    onClick={() => setSelectedIndex(i)}>
                    {item.title}
                </ListGroup.Item>
            ))
        }
    </ListGroup>);
}

export default ItemGroup;