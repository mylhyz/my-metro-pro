import React, { Component } from 'react';
import TestRenderer from 'react-test-renderer';
import App from './src/App';

let json = JSON.stringify(TestRenderer.create(<App />));
print_log(json);

const runApp = {
    'App': () => { return TestRenderer.create(<App />); }
}