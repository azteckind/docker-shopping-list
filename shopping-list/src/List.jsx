const List = (props) => {
    let shoppingList = props.list.map(item => { 
        return(
            <li>
                {item}
                <button onClick={() => props.onDelete(item)}>Delete</button>
                <button onClick={() => props.onAddToCart(item)}>Add To Cart</button>
            </li>
        );
    });
    return (
        <div>
            <ul>
                {shoppingList}
            </ul>
        </div>
    );

}

export default List;