import './App.css';
import React from 'react';
import List from './List';
import Cart from './Cart';
import NewItem from './NewItem';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            cart: [],
            item: ''
        };
    }

    handleOnChange = (e) => {
        this.setState({ item: e.target.value });
    }

    handleOnSubmit(event) {
        event.preventDefault();
        if (!this.state.item) {
            return;
        }
        this.setState({
            list: this.state.list.concat(this.state.item),
            item: '',
        });
    }

    handleDelete = (value) => {
        let currentList = this.state.list;
        let newState = currentList.filter(item => item !== value)
        this.setState({ list: newState });
    }

    handleAddCart = (value) => {
        let currentList = this.state.list;
        let newState = currentList.filter(item => item !== value)
        this.setState({ list: newState, cart: this.state.cart.concat(value) });
    }

    handleDeleteAll = () => {
        this.setState({ list: [] })
    }
    
    handleDeleteCart = () => {
        this.setState({ cart: [] })
    }

    render() {
        return (
            <div className="App">
                <h1>Shopping List</h1>
                <button onClick={this.handleDeleteAll}>Delete Shopping List</button>
                <NewItem
                    item={this.state.item}
                    onChange={this.handleOnChange}
                    onSubmit={this.handleOnSubmit.bind(this)}
                />
                <List
                    list={this.state.list}
                    onDelete={this.handleDelete}
                    onAddToCart={this.handleAddCart}
                />
                <Cart
                    cart={this.state.cart}
                    onDelete={this.handleDeleteCart}
                />
            </div>
        );
    }
}

export default App;
