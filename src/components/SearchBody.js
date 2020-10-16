import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet, View, Image, ImageBackground, Dimensions } from 'react-native'
import { List, ListItem } from 'native-base'

import PokeLoader from './PokeLoader'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export class SearchBody extends Component {

    render() {
        var data = this.props.data
        var bg = require('../../assets/searchBg.png')

        if(!data) {
            return (
                <View style={styles.container}>
                    <Text style={styles.mutedText}>Nothing found!</Text>
                </View>
            )
        }

        return (
            <ImageBackground
                source = {bg}
                style = {styles.bgImg}
            >
                <ScrollView style={{flex:1}}>
                    <Text style={styles.header}>
                        #{data.id} - {data.name.toUpperCase()}
                    </Text>
                    <View style={styles.viewStyle}>
                        <Image 
                            source={{uri: data.sprites.front_default}}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.info}>
                        <ListItem itemDivider>
                            <Text style={{fontWeight: 'bold'}}>
                                Size
                            </Text>
                        </ListItem>

                        <ListItem>
                            <Text >
                                Weight - {data.weight}kg
                            </Text>
                        </ListItem>

                        <ListItem>
                            <Text>
                                Height - {data.height/10}m
                            </Text>
                        </ListItem>

                        <ListItem itemDivider>
                            <Text style={{fontWeight: 'bold'}}>
                                Abilities
                            </Text>
                        </ListItem>

                        <List
                            dataArray = {data.abilities}
                            renderRow = {(item) => 
                                <ListItem>
                                    <Text>
                                        {item.ability.name}
                                    </Text>
                                </ListItem>
                            }
                        >
                        </List>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

export default SearchBody


const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mutedText: {
        color: '#aaaaaa'
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    img: {
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        flex: 1,
        backgroundColor: '#ffffff',
        opacity: 0.8,
        marginTop: 10,
    },
    bgImg: {
        flex: 1,
        resizeMode: "cover",
        width: width,
        height: height
    }
})