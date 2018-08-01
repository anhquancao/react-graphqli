import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/graphiql/graphiql.css';
import "./index.css";
import registerServiceWorker from './registerServiceWorker';
import GraphiQL from 'graphiql';

const host = window.host;

function graphQLFetcher(graphQLParams) {
    // return fetch(host + '/graphql', {
    //     method: 'post',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(graphQLParams),
    // }).then(response => response.json());
    return fetch(host + `/graphql?query=${graphQLParams.query}&variables=${graphQLParams.variables}`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
}

ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />, document.getElementById('root'));
registerServiceWorker();
