import React, { Component } from 'react';
import TestRenderer from 'react-test-renderer';
import App from './src/App';

global.AppRegistry.registerApp('App', () => { return TestRenderer.create(<App />); });

// let json = global.AppRegistry.runApp('App');

// print_log(JSON.stringify(json));