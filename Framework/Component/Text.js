import React, { Component } from 'react';
import PropTypes from 'prop-types';
import View from './View';

export default class Text extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <text {...this.props}>{this.props.children}</text>
        );
    }
}

/**
 * 注释：颜色使用字符串表示，一律为 #rgba 格式
 */

Text.propTypes = {
    ...View.propTypes,
    textSize: PropTypes.number,
    textColor: PropTypes.string
}