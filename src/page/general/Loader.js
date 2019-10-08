import React from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
} from 'react-native'

/**
 * Loader page used to navigator depending on if 
 * account is created in firebase
 * 
 * Still not Working
 */
class Loader extends React.Component {
    constructor(){
        super()
        this._bootOnLoader()
    }

    _bootOnLoader = async () => {
        const currentUserId = await AsyncStorage.getItem('CurrentUserId')
        this.props.navigation.navigate( currentUserId ? 'Auth' :'App' )
    }

    render(){
        return(
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}

export default Loader;