import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';

export default class PopularBooks extends Component {
    render() {
        
        return (
            <View style={styles.popularBooks}>
                <View style={styles.titleArea}>
                    <Text style={styles.titleText}>Popular Books</Text>
                    <Text style={styles.viewAllText}>view all</Text>
                </View>
                <View style={{flex:1}}>
                    <FlatList
                        data={this.props.lastData}
                        horizontal
                        keyExtractor={(item) => item.email}
                        renderItem={({item}) =>
                            <View style={styles.people}>
                                <View style={styles.imageView}>
                                    <Image
                                        source={{uri: item.picture.large}}
                                        style={styles.imageStyle}
                                        
                                    />
                                </View>
                                <Text>{item.gender}</Text>
                            </View>
                        }
                    />
                </View>
                <View style={{flexDirection: 'row'}}>
                </View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    popularBooks: {
        flex: 5,
        backgroundColor: 'wheat'
    },
    titleArea: {
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000'
    },
    viewAllText: {
        color: '#acacac'
    },
    people:{
        flex:1,
        marginTop:10
    },
    imageStyle:{
        width: 100,
        height: 150,
        borderRadius: 5
    },
    imageView:{
        marginHorizontal:10
    }
});