import React, { Component } from 'react';
import PropTypes from 'prop-types';
import View from './View';

export default class Image extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <image {...this.props}>{this.props.children}</image>
        );
    }
}

Image.propTypes = {
    ...View.propTypes,
    uri: PropTypes.string
}