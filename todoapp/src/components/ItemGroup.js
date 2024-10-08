import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import items from '../todoItems';

function ItemGroup({selectId, setSelectedId}) {
    const getActiveColor = (dueDate) => {
        const currentDate = new Date();
        const dueDateObj = new Date(dueDate);
        const diffTime = Math.abs(dueDateObj - currentDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 7) return 'primary';
        if (diffDays <= 7 && diffDays > 4) return 'success';
        if (diffDays <= 4 && diffDays > 2) return 'warning';
        return 'danger';
    };
    return (<ListGroup defaultActiveKey={0}>
        {
            items.map((item, i) => (
                <ListGroup.Item
                    variant={getActiveColor(item.dueDate)}
                    eventKey={item.dueDate}
                    className='mb-2'
                    action={true}
                    active={i === selectId}
                    key={i}
                    onClick={() => setSelectedId(i)}>
                    <a className={'text-decoration-none text-reset list-group-item-' + getActiveColor(item.dueDate)}>{item.title}</a>
                </ListGroup.Item>
            ))
        }
    </ListGroup>);
}

export default ItemGroup;