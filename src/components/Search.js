import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header, Item, Icon, Input, Button } from 'native-base'
import axios from 'axios'

import PokeLoader from './PokeLoader'
import SearchBody from './SearchBody'

export class Search extends Component {
    
    constructor (props) {
        super(props)

        this.state = {
            poke : '',
            onCall : true,
            data : [],
        }
    }

    searchPoke = () => {

        // this.setState({
        //     onCall : true,
        // })

        var {poke} = this.state
        console.log(poke)

        axios.get("https://pokeapi.co/api/v2/pokemon/" + poke.toLowerCase())
        .then((response) => {
            
            // console.log(this.state)

            this.setState({
                data: response.data,
                onCall: false
            })

            // console.log(this.state)

        }).catch(function(error) {
            console.log(error)
        })
    }

    renderBody = () => {
        if(this.state.onCall) {
            return (
                <PokeLoader />
            )
        }
        else {
            return (
                <SearchBody 
                    data = {this.state.data}
                />
            )
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Header
                    searchBar = {true}
                    rounded = {true}
                >
                    <Item style={styles.itemStyle}>
                        <Icon 
                            name = "ios-search"
                            onPress = {this.searchPoke}
                        />
                        <Input 
                            value = {this.state.poke}
                            onChangeText = {(text) => this.setState({poke : text})}
                            placeholder = "Search Pokemon"
                        />
                    </Item>
                    
                </Header>

                {
                    this.state.onCall ? <PokeLoader /> : <SearchBody data = {this.state.data} />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    itemStyle : {
        borderRadius : 50 / 2
    }
})

export default Search
