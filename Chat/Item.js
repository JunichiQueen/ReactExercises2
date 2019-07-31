import React, {Component} from 'react';
import axios from 'axios';

function Item (props) {
    let deleteItem = () => {
        let itemID = {
            email: props.email.toString(),
            _id: props._id.toString()
        }
        axios
        .delete('http://localhost:5000/item/deleteItem', { data: itemID })
        .then(res => {this.props.getall()})
    }

    return (
        <div>
            <button onClick={deleteItem}>Delete Item</button>
        </div>
    );


}

export default Item;