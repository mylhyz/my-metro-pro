import React, { Component } from 'react';
import TestRenderer from 'react-test-renderer';
import AppRegistry from './Framework/Core/AppRegistry';
import App from './src/App';

AppRegistry.registerApp('App', () => { return TestRenderer.create(<App />); });

let json = AppRegistry.runApp('App');

print_log(JSON.stringify(json));