import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { MuiThemeProvider as ThemeProvider } from '@material-ui/core/styles';
import theme from './materialTheme'
import App from './App';

const client = new ApolloClient({ uri: 'http://localhost:5000/graphql' })

ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </ApolloProvider>
    ,
    document.getElementById('root'));

