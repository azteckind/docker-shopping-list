import React from 'react';

function NewItem(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <label>
                    New Item:
                    <input type="text" name="name" value={props.item} onChange={props.onChange} />
                </label>
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
}

export default NewItem;