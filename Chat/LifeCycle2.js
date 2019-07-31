import React, { Component } from "react";

import axios from "axios";

class AutoFilm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: "",
        apikey: "",
        filmTitle: ""
      };
    }
  
    componentDidMount() {
      this.makeRequest();
    }
  
    makeRequest = () => {
      axios
        .get("http://www.omdbapi.com/?apikey=cf6d6c63&t=hop")
        .then(response => {
          console.log(response.data);
          this.setState({
            data: response.data
          });
        });
    };
  
    render() {
      return (
        <div>
          <h2>AutoFilm.js</h2>
          <h4>{this.state.data.Title}</h4>
          <h4>{this.state.data.Year}</h4>
          <h4>{this.state.data.Rated}</h4>
          <h4>{this.state.data.Genre}</h4>
          <h4>{this.state.data.Plot}</h4>
          <img src={this.state.data.Poster} />
        </div>
      );
    }
  }

  export default AutoFilm;
  