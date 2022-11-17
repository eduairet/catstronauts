import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    // URI that has the graph
    uri: 'http://localhost:4000',
    // This cache prevents to overquery
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <React.StrictMode>
        {/* This component uses the React context API and passes the client as props */}
        <ApolloProvider client={client}>
            <GlobalStyles />
            <Pages />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
