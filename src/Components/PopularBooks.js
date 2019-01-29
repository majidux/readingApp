import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList,Animated} from 'react-native';

export default class PopularBooks extends Component {
    
    constructor(props){
        super(props);
        this.state={
            scrollX:new Animated.Value(0)
        }
    }
    
    
    render() {
        
        return (
            <View style={styles.popularBooks}>
                <View style={styles.titleArea}>
                    <Text style={styles.titleText}>Popular Books</Text>
                    <Text style={styles.viewAllText}>view all</Text>
                </View>
                <View style={{flex: 1}}>
                    <FlatList
                        data={this.props.lastData}
                        horizontal
                        onScroll={Animated.event([{nativeEvent:{contentOffset: {x:this.state.scrollX}}}])}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.email}
                        renderItem={({item}) =>
                            <View style={styles.people}>
                                <View style={styles.imageView}>
                                    <Image
                                        source={{uri: item.picture.large}}
                                        style={styles.imageStyle}
                                    
                                    />
                                </View>
                                <View style={{marginVertical:4,alignItems: 'flex-start'}}>
                                    <Text style={{fontWeight: '600'}}>
                                        {`${item.name.first.charAt(0).toUpperCase()}${item.name.first.slice(1).toLowerCase()} ${item.name.last.charAt(0).toUpperCase()}${item.name.last.slice(1).toLowerCase().substring(0,3)}`}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.price}>$ {item.dob.age}.{item.registered.age}</Text>
                                </View>
                            </View>
                        }
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    popularBooks: {
        flex: 5,
        // backgroundColor: 'wheat'
    },
    titleArea: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:15,
    },
    titleText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000'
    },
    viewAllText: {
        color: '#acacac',
    },
    people: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 10,
    },
    imageStyle: {
        width: 100,
        height: 150,
        borderRadius: 5
    },
    price: {
        fontWeight:'600',
        fontSize: 12
    },
    
});