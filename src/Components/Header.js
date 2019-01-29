import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,Dimensions} from 'react-native';
import {widthPercentage,heightPercentage} from "./Dimen";



export default class Header extends Component {

  
    
    
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.menuBar}>
                    <View>
                        <Image
                            source={require('../Assets/image/menu.png')}
                        />
                    </View>
                    <View>
                        <Text>My books</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../Assets/image/magnifier.png')}
                        />
                    </View>
                </View>
                <View style={styles._slider}>
                    <View>
                        <Image
                            source={require('../Assets/image/main.png')}
                            style={{width:380,height:110,borderRadius:4}}
                        />
                    </View>
                </View>
                
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        flex: 1,
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