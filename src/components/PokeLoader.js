import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'

export class PokeLoader extends Component {
    render() {
        var myLoaderImage = require('../../assets/unnamed.gif')
        return (
            <View style={styles.container}>
                <Image 
                    source = {myLoaderImage}
                    style = {styles.img}
                />
            </View>
        )
    }
}

export default PokeLoader


const styles = StyleSheet.create({
    img: {
        height : 350,
        width : 350,
        // justifyContent : 'center',
        // alignItems : 'center',
    },
    container: {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
    }
})