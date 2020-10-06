import React, { Component } from 'react';

import View from '../Framework/Component/View';
// import Image from '../Framework/Component/Image';
import Text from '../Framework/Component/Text';

export default class App extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={{ width: 96, height: 96, backgroundColor: '#ffff0000' }}>
                    <Text>1</Text>
                </View>
                <View style={{ width: 96, height: 96, backgroundColor: '#ff00ff00' }}>
                    <Text>2</Text>
                </View>
                <View style={{ width: 96, height: 96, backgroundColor: '#ff0000ff' }}>
                    <Text>3</Text>
                </View>

                <View style={{ width: 96, height: 96, backgroundColor: '#ffff0000' }}>
                    <Text>1</Text>
                </View>
                <View style={{ width: 96, height: 96, backgroundColor: '#ff00ff00' }}>
                    <Text>2</Text>
                </View>
                <View style={{ width: 96, height: 96, backgroundColor: '#ff0000ff' }}>
                    <Text>3</Text>
                </View>

                {/* <Image uri={"https://hackernoon.com/images/z2xg2bpo.jpg"} /> */}
                {/* <Text textSize={48} textColor={'#FF0000FF'}>Hello,React</Text> */}
            </View>
        );
    }
}