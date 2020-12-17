import React from 'react';

const List = (props) => {
    const myList = [
        {id: 1, name: 'PHP'},
        {id: 2, name: 'Javascript'},
        {id: 3, name: 'Python'},
        {id: 4, name: 'C#'},
    ];
    const listItems = myList.map((item) => <li key={item.id}>{item.name}</li>);
    
    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default List;
