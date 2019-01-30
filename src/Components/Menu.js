import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class Menu extends Component {
    render() {
        return (
            <View style={styles._menu}>
                <TouchableOpacity>
                    <View>
                        <Image
                            source={require('../Assets/image/book.png')}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Image
                            source={require('../Assets/image/books.png')}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Image
                            source={require('../Assets/image/notification.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _menu: {
        flex: 1,
        paddingVertical: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5,
        borderRadius: 5
    }
});