import React, {Component} from 'react';
import './App.css';
import axios from "axios";

import ItemList from './Chat/ItemList.js';
import ItemForm from './Chat/ItemForm.js';
import Map from './Chat/Map.js';
import PropType from './Chat/PropTypes.js';

class App extends Component {
  constructor(){
    super();
    this.makeRequest();
    this.state={
        data: [{username:"Matt", content:"Temp Content", email: "fakeemail@gmail.com"}]
    }
  }
  prop1 = "Test";

  makeRequest = () => {
    axios
      .get("http://localhost:5000/item/all")
      .then(response => {
        this.setState({
            data: response.data
        });
      }
      )
  };

  componentDidMount = () => {
    this.makeRequest();
  }

  render() {

    return (
      <div>
        <ItemList getall={this.makeRequest} getdata={this.state.data}/>
        <ItemForm getall={this.makeRequest}/>
        <Map />
        <PropType/>

      </div>
    
    );
  }


}

export default App;
