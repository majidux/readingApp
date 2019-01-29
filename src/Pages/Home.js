import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Main from "../Components/Main";
import Header from "../Components/Header";

export default class Home extends Component {
    
    constructor(props){
        super(props);
        this.state={
            lastData:[],
            loading:false
        }
    }
    
    componentDidMount(){
        this.fetchData();
    }
    
    fetchData = () => {
        let lastData = this.state.lastData;
        fetch('https://randomuser.me/api/?results=15')
            .then(response=>response.json())
            .then(data=>{
                this.setState({lastData:[...lastData, ...data.results],loading:true})
                
            })
            .catch(error=> alert('Server Lost'))
    };
    
    render() {
        return (
            <View style={styles.home}>
                <Header/>
                <Main lastData={this.state.lastData}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    home: {
        flex: 1,
        paddingHorizontal:15,
        backgroundColor:'green'
    }
});