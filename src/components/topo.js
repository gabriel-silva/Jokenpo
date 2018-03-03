import React, { Component } from 'react';
import { Image, View } from 'react-native';

const image = require('./../../imgs/jokenpo.png');

export default class Topo extends Component {
    render() {
        return (
            <View>
                <Image source={image} />
            </View>
        );
    }
}