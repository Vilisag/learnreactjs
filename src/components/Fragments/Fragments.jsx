import React from 'react';

const myList = [
    {id: 1, name: 'PHP'},
    {id: 2, name: 'Javascript'},
    {id: 3, name: 'Python'},
    {id: 4, name: 'C#'},
];

const listItems = myList.map((item) => <td key={item.id}>{item.name}</td>);

class Columns extends React.Component {
    render() {
        return (
            <React.Fragment>
                {listItems}
            </React.Fragment>
        );
    }
}

class Fragments extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <Columns />
                </tr>
            </table>
        );
    }
}

export default Fragments;
