import React, {Component} from 'react';
import _ from "lodash";
import { Table } from 'reactstrap';

import Item from './Item.js';

class ItemList extends Component {

    constructor(props){
        super(props);
        this.state={
        }
      } 

    render(){
        

        const {
            getdata,
            getall
        } = this.props;
        console.log(getdata._id);
      
        return(
            <div>
                <Table striped bordered hover variant="dark">
                    <tbody>
                        <tr>
                            <td>username</td>
                            <td>content</td>
                            <td>delete</td>
                        </tr> 
                        {_.reverse(getdata).map((item) => (
                            <tr>
                                <td>{item.username}</td>
                                <td>{item.content}</td>
                                <td>{item.email}</td>
                                <td><Item getall={getall} username={item.username} email={item.email} _id={item._id}/></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <button onClick={this.props.getall}>Get All</button>
            </div>

        );
    }
}

export default ItemList;