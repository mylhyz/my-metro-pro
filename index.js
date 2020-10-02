import React, { Component } from 'react';
import TestRenderer from 'react-test-renderer';
import App from './src/App';

const runApp = {
    'App': () => { return TestRenderer.create(<App />); }
}

let json = runApp['App']();

print_log(JSON.stringify(json));