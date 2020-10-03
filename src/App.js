import React, { Component } from 'react';

import View from '../Framework/Component/View';
import Image from '../Framework/Component/Image';
import Text from '../Framework/Component/Text';

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