import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';

export default class LikeBooks extends Component {
    render() {
        return (
            <View style={styles.likeBooks}>
                {
                    this.props.lastData.map((item,i)=><Text key={i}>{item.name.first}</Text>)
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    likeBooks: {
        flex: 5,
        backgroundColor:'skyblue'
    }
});