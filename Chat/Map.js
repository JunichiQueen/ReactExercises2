import React, { Component } from 'react';

class Map extends Component{
    constructor(){
        super();
        this.state={
            data: [{
                id: 1,
                username: "blahblah",
                password: "beadaenh"
            }, {
                id: 2,
                username: "eoahdueah",
                password: "ouaenhfuohae"
            }]
        }
    }
    render(){
        console.log(this.state.data);
        return(
            <div>
                {this.state.data.map((item) => (
                    <p key={item.id.toString()}>This is {item.username},
                    his password is {item.password}</p>
                )) 
                }
            </div>
        )
    }
}

export default Map;