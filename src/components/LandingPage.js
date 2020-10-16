import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform, ImageBackground } from 'react-native';
import { Button } from 'native-base'

var myBg = require('../../assets/landing.png')

export class LandingPage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground 
                    source={myBg} style={styles.img}
                >
                    <View style={styles.viewStyle}>
                    <Text style={styles.text}>Welcome to Pokemon Search!</Text>
                    <Button 
                        block = {true}
                        style = {styles.btn}
                        onPress = {() => this.props.switchScreen("search")}
                    >
                        <Text style={styles.btnText}>
                        Start Searching
                        </Text>
                    </Button>
                    {/* <Text style={styles.text}>Welcome to Pokemon Search!</Text> */}
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   marginTop: Platform.OS === "android" ? 24 : 0,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    viewStyle: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // textAlignVertical: 'center',
      // fontSize: 72,
    },
    img : {
      flex: 1,
      resizeMode: "cover",
      // justifyContent: 'center',
      // alignItems: 'center',
      // fontSize: 72,
      // color: '#ffffff'
    },
    text: {
      // textAlignVertical: 'center',
      fontSize: 36,
      color: '#ffffff'
    },
    btn: {
      margin: 10,
      backgroundColor: '#ffc4ff',
      padding: 10,
      height: 40,
      borderRadius: 20 / 2,
      marginLeft: 15,
      marginRight: 15,
    },
    btnText : {
      color: '#4a0072',
      fontSize: 16,
      fontWeight: 'bold',
    }
});

export default LandingPage
