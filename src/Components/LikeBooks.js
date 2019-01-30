import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';

export default class LikeBooks extends Component {
    render() {
        return (
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
                                        <Text>{`${item.name.first.charAt(0).toUpperCase()} ${item.name.last}`}</Text>
                                    </View>
                                    <View>
                                        <Text
                                            numberOfLines={3}>{`${item.location.state} ${item.location.city} ${item.location.street}`}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    likeBooks: {
        flex: 5,
        paddingHorizontal: 15,
        marginTop: 15
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
    }
});