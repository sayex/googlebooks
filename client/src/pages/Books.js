// eslint-disable-next-line no-unused-vars
import React, {Component} from "react";
import { Col, Row, Container } from "../components/Grid";
import Axios from "axios"


class Books extends Component {
    state= {
        search: "",
        books: []
    }

textInput= (event) =>{
    this.setState({
        search: event.target.value
    })
}

submitSearch= (event) => {
    event.preventDefault();
    Axios.get('https://www.googleapis.com/books/v1/volumes?q='+ this.state.search)
  .then( (response) =>{
    this.setState({
        books: response.data.items
    })
  })
  .catch( (error) => {
    console.log(error);
  });
}

    render() {
        return (
          <Container>
              <form>
                 <input type ="text" name="search" onChange={this.textInput} />
                 <button type ="submit" onClick={this.submitSearch}>Search</button>
              </form>

          </Container>
        );
    }
}
export default Books;