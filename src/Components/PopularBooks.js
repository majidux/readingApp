import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Animated, TouchableOpacity, ScrollView} from 'react-native';




HEADER_MAX_HEIGHT_FLEX=1;
HEADER_MIN_HEIGHT_FLEX=.4;
HEADER_MAX_HEIGHT_PIXEL=120;
HEADER_MIN_HEIGHT_PIXEL=70;
PROFILE_IMAGE_MAX_HEIGHT=80;
PROFILE_IMAGE_MIN_HEIGHT=40;


export default class PopularBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0)
        }
    }
    
    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange:[0, HEADER_MAX_HEIGHT_FLEX - HEADER_MIN_HEIGHT_FLEX],
            outputRange:[HEADER_MAX_HEIGHT_FLEX,HEADER_MIN_HEIGHT_FLEX],
            extrapolate:'clamp'
        });
        
        return (
            <Animated.View style={{
                flex: 1,
                
            }}>
                <Animated.View style={[styles.header,{flex:headerHeight}]}>
                    <Animated.View style={styles.menuBar}>
                        <Animated.View>
                            <Image
                                source={require('../Assets/image/menu.png')}
                            />
                        </Animated.View>
                        <View>
                            <Text style={{fontWeight:'600',fontSize:20}}>My books</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../Assets/image/magnifier.png')}
                            />
                        </View>
                    </Animated.View>
                    <View style={styles._slider}>
                        <View>
                            <Image
                                source={require('../Assets/image/main.png')}
                                style={{width: 380, height: 110, borderRadius: 4}}
                            />
                        </View>
                    </View>
                
                
                </Animated.View>
                
                <ScrollView
                    style={{flex:1}}
                    onScroll={({nativeEvent}) => {
                        this.setState({scrollY: nativeEvent.contentOffset.y})
                    }}
                >
                    <View style={[styles.popularBooks,{marginTop:HEADER_MAX_HEIGHT_PIXEL-(PROFILE_IMAGE_MIN_HEIGHT/2),flex:HEADER_MAX_HEIGHT_FLEX}]}>
                        <View style={styles.titleArea}>
                            <Text style={styles.titleText}>Popular Books</Text>
                            <TouchableOpacity>
                                <Text style={styles.viewAllText}>view all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1}}>
                            <FlatList
                                data={this.props.lastData}
                                horizontal
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
                                        <View style={{marginVertical: 4, alignItems: 'flex-start'}}>
                                            <Text style={{fontWeight: '600'}}>
                                                {`${item.name.first.charAt(0).toUpperCase()}${item.name.first.slice(1).toLowerCase()} ${item.name.last.charAt(0).toUpperCase()}${item.name.last.slice(1).toLowerCase().substring(0, 3)}`}
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
                    <View style={styles.likeBooks}>
                        <View style={styles.titleArea}>
                            <Text style={styles.titleText}>You may also like</Text>
                            <TouchableOpacity>
                                <Text style={styles.viewAllText}>Refresh to Update</Text>
                            </TouchableOpacity>
                        </View>
                        {
                            this.props.lastData.map((item, i) =>
                                
                                <View key={i}>
                                    <View style={styles.box}>
                                        <View style={styles.profilePic}>
                                            <Image
                                                source={{uri: item.picture.large}}
                                                style={{width: 75, height: 100}}
                                            />
                                        </View>
                                        <View stylle={styles.textArea}>
                                            <View style={{alignItems: 'flex-start'}}>
                                                <Text>{`${item.name.first.charAt(0).toUpperCase()}${item.name.first.slice(1).toLowerCase()} ${item.name.last.charAt(0).toUpperCase()}${item.name.last.slice(1).toLowerCase().substring(0, 3)}`}</Text>
                                            </View>
                                            <View>
                                                <Text
                                                    numberOfLines={3}>{`${item.location.state} ${item.location.city}`}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                    </View>
                </ScrollView>
            </Animated.View>
        
        );
    }
}
const styles = StyleSheet.create({
    popularBooks: {
        // flex: 5,
    },
    titleArea: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
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
        fontWeight: '600',
        fontSize: 12
    },
    likeBooks: {
        flex: 5,
        paddingHorizontal: 15,
        marginTop: 15
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        paddingHorizontal: 12,
        flex: 1,
        elevation: 3,
        borderRadius: 5
    },
    profilePic: {
        paddingRight: 10
    },
    textArea: {
        paddingHorizontal: 20,
        flex: 1,
    },
    header: {
        // flex: headerHeight,
        paddingHorizontal:15,
    },
    menuBar:{
        flexDirection:'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    _slider:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    }
    
});