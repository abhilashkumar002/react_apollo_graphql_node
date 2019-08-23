import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Booklist from "./components/Booklist";
import AddBook from './components/AddBook';
const client = new ApolloClient({
  uri: "http://localhost:4444/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>List</h1>
        <Booklist />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
