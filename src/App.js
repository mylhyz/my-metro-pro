import React, { Component } from 'react';

import View from './Core/View';
import Image from './Core/Image';
import Text from './Core/Text';

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image uri={"https://reactnative.dev/img/header_logo.svg"} />
                <Text textSize={48} textColor={'#FF0000FF'}>Hello,React</Text>
            </View>
        );
    }
}