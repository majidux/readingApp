import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    Animated,
    TouchableOpacity,
    ScrollView,
} from 'react-native';


export default class PopularBooks extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            scrollY: new Animated.Value(0),
        }
    }
    
   
    
    onScroll = e => {
        const scrollSensitivity = 4 / 3;
        const offset = e.nativeEvent.contentOffset.y / scrollSensitivity;
        this.state.scrollY.setValue(offset);
        
        // this.setState({scrollY:offset})
        // console.warn(this.state.scrollY)
    };
    
    
    render() {
        let headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, 300],
            outputRange: [300, 150],
            extrapolate: 'clamp'
        });
        
        let imageHeight = this.state.scrollY.interpolate({
            inputRange: [0, 300],
            outputRange: [110, 50],
            extrapolate: 'clamp'
        })

        
        return (
            <Animated.View style={styles.flex1}>
                    <Animated.View style={[styles.header, {height: headerHeight}]}>
                        <Animated.View style={styles.menuBar}>
                            <TouchableOpacity onPress={this.peopleInfoTrue}>
                                <Animated.View>
                                    <Image
                                        source={require('../Assets/image/menu.png')}
                                    />
                                
                                </Animated.View>
                            </TouchableOpacity>
                            
     
                            <View>
                                <Text style={{fontWeight: '600', fontSize: 30, color: '#000'}}>My books</Text>
                            </View>
                            <View>
                                <Image
                                    source={require('../Assets/image/magnifier.png')}
                                />
                            </View>
                        </Animated.View>
                        <View style={styles._slider}>
                            <Animated.View style={{width: 380, height: imageHeight, borderRadius: 4}}>
                                <Animated.Image
                                    source={require('../Assets/image/main.png')}
                                    style={{flex: 1, width: 380 , height: imageHeight, borderRadius: 4}}
                                />
                            </Animated.View>
                        </View>
                    
                    </Animated.View>
                    
                    <ScrollView
                        style={styles.flex1}
                        onScroll={this.onScroll}
                    >
                        <View style={[styles.popularBooks]}>
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
                                        <TouchableOpacity>
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
                                        </TouchableOpacity>
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
    flex1:{
        flex: 1,
        backgroundColor:'#fff'
    },
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
        paddingHorizontal: 15,
    },
    menuBar: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    _slider: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    }
    
});