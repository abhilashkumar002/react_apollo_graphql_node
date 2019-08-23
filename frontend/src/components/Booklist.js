import React, { Component } from "react";
import { graphql } from "react-apollo";

import { getBooksQuery} from '../queries/queries';
import BookDetails from './BookDetails';

class Booklist extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    }
  }
  renderBooks(){
    if(this.props.data.loading){
      return <h1>Loading ...</h1>
    }else{
      return (
        <div>
          <ul id="book-list">
            {
              this.props.data.books.map(book => {
                return <li key={book.id} onClick={
                  (e)=>{
                    this.setState({selected: book.id})
                  }
                }>{book.name}</li>
              })
            }
          </ul>
          <BookDetails bookId={this.state.selected}/>
        </div>
      )
    }
  }
  render() {
    console.log(this.props);
    return(
      this.renderBooks()
    )
  }
}

export default graphql(getBooksQuery)(Booklist);
