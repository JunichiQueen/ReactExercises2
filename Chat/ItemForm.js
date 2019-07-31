import React, {Component} from 'react';
import axios from "axios";

class ItemForm extends Component {
    constructor(props){
        super(props);
        this.state={
            error:""
        }
    }

    makePost = (e) => {
        e.preventDefault();

        let newPost = {
            username: e.target[0].value,
            content: e.target[1].value,
            email: e.target[2].value
        }
        axios
        .post("http://localhost:5000/item/add", newPost)
        .then(response => {
            this.props.getall()
        }).catch(err => {console.log(err)});
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.makePost}>
                    <p>Username</p>
                    <input id='usernameInput'></input>
                    <p>Content</p>
                    <input id='contentInput'></input>
                    <p>Email</p>
                    <input id='emailInput'></input>
                    <button type='submit'>POST</button>
                </form>
            </div>
        );
    }
}

export default ItemForm;