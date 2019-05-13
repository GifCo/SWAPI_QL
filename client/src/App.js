import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Planets from './components/Planets'
import './App.css';

const client = new ApolloClient({ uri: 'http://localhost:5000/graphql'})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>SWAPI QL</h1>
        <Planets />
      </div>
    </ApolloProvider>
  );
}

export default App;
