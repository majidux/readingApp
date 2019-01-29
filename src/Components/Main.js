import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import PopularBooks from "./PopularBooks";
import LikeBooks from "./LikeBooks";
import Menu from "./Menu";

export default class Main extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.scroll}>
                    <ScrollView>
                        <PopularBooks lastData={this.props.lastData}/>
                        <LikeBooks lastData={this.props.lastData}/>
                    </ScrollView>
                </View>
                <View style={styles.menu}>
                    <Menu/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 3,
        // backgroundColor: 'pink',
    
    },
    scroll:{
        paddingTop: 10,
        flex: 9
    },
    menu:{
        flex: 1,
        justifyContent:'center',
    }
});