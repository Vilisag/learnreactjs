import React from 'react';

const myGirlFriends = [
    {
        id: 1,
        name: 'Khánh My',
        email: 'khanhmy@girlfriends.com',
    },
    {
        id: 2,
        name: 'Hoàng Hà',
        email: 'hoangha@girlfriends.com',
    },
    {
        id: 3,
        name: 'Trang Nguyễn',
        email: 'trangnguyen@girlfriends.com',
    },
    {
        id: 4,
        name: 'Midu',
        email: 'midu@girlfriends.com',
    },
];

const ShowGirlFriends = (props) => {
    return (
        <ul>
            {
                props.listGirlFriends.map((person) => {
                    return <li key={person.id}>{person.name}</li>;
                })
            }
        </ul>
    );
};

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    decrement() {
        this.setState({
            count: this.state.count <= 0 ? 0 : this.state.count - 1,
        });
    }

    render() {
        return (
            <>
                {
                    this.props.render({
                        count: this.state.count,
                        increment: this.increment,
                        decrement: this.decrement
                    })
                }
            </>
        );
    }
}

const RenderProps = () => {
    return (
        <React.Fragment>
            <ShowGirlFriends listGirlFriends={myGirlFriends} />
            <Counter
                render={(data) => {
                    const {count, increment, decrement} = data;
                    return (
                        <>
                            <p>Giá trị: {count}</p>
                            <button onClick={increment}>Tăng</button>
                            <button onClick={decrement}>Giảm</button>
                        </>
                    );
                }}
            />
        </React.Fragment>
    )
}

export default RenderProps;
