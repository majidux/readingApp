import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Menu extends Component {
    render() {
        return (
            <View style={styles._menu}>
                <Text>Menu</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _menu: {
        flex: 1,
        backgroundColor:'blue',
        paddingVertical:20,
        justifyContent:'center',
        alignItems:'center',
    }
});