import React, { Component } from 'react'
import { Text, View } from 'react-native'

import LandingPage from './LandingPage'
import Search from './Search'

export class index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentScreen : 'landing'
        }
    }

    switchScreen = (currentScreen) => {
        this.setState({currentScreen})

    }

    render() {

        if(this.state.currentScreen === "landing") {
            return (
                <LandingPage 
                    switchScreen = {this.switchScreen}
                />
            )
        }
        
        else if (this.state.currentScreen === "search") {
            return (
                <Search />
            )
        }
    }
}

export default index
