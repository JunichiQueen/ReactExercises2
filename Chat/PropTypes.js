import React, { Component } from 'react';
import { objectExpression } from '@babel/types';

class PropType extends Component{
    static defaultProps = {
        prop1: "Hello",
        prop2: {
            stuff: 1
        }
    }
    // static propTypes = {
    //     model:
    //     object.isRequired,
    //     prop1:
    // }

    render(){
        console.log(this.prop);
        console.log(this.prop);
        console.log(this.prop);
        return(
            <div>
                <p>test</p>
                <p>aedea{this.props.prop1}</p>
            </div>
        )
    }

}

export default PropType