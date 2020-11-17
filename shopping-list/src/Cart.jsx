const Cart = (props) => {
    let shoppingCart = props.cart.map(item => {
        return (
            <li>
                {item}
            </li>
        );
    });
    return (
        <div>
            <h1>Items in Cart</h1>
            <button onClick={props.onDelete}>Empty Cart</button>
            <ul>
                {shoppingCart}
            </ul>
        </div>
    );

}

export default Cart;