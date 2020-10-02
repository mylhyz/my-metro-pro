import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TestRenderer from 'react-test-renderer';

class View extends Component {

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

class Text extends Component {

    render() {
        return (
            <text {...this.props}>{this.props.children}</text>
        );
    }
}

Text.propTypes = {
    ...View.propTypes
}

class Image extends Component {

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

const testRenderer = TestRenderer.create(
    <View style={{ flex: 1 }}>
        <Image uri={"https://reactnative.dev/img/header_logo.svg"} />
        <Text>Hello,React</Text>
    </View>
);

let json = JSON.stringify(testRenderer.toJSON());

print_log(json);