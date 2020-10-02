import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class View extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <view {...this.props}>{this.props.children}</view>
        );
    }
}

View.propTypes = {
    style: PropTypes.object
}