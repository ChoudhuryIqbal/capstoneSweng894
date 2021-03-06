import React from 'react'
import {View, Image, Text, TouchableOpacity } from 'react-native'
import date from 'date-and-time';
import 'date-and-time/plugin/ordinal'

import styles from '../styles/General.styles'

const AppointmentItem = (props) => {
    date.plugin('ordinal');
    var image_ = {
        barber: require("../../image/barber.png"),
        hairDress: require("../../image/hair-dresser.png"),
        custom: require('../../image/custom-hair.png')
    }    
    
    return (
        <View>
            <TouchableOpacity onPress={props.onClick} onLongPress={props.onHoldClick}>
                <View style={styles.Row}>
                    <View style={styles.Row}>
                        <View style={{justifyContent: 'center', 
                                    paddingStart: 10, 
                                    paddingEnd: 1}}>
                            <Image
                                style={{
                                    width: 45,
                                    height: 45,
                                    borderRadius: 25,
                                }}
                                source={props.service == "CUSTOM" ? image_.custom : props.service == "Barber" ? image_.barber : image_.hairDress}
                            />  
                        </View>
                    </View>
                    <View style={styles.Column}>
                        <View style={{alignItems: 'flex-start'}}>
                            <Text style={{color: '#724FFD'}}>{props.shopName}</Text>
                            <Text style={{color: '#724FFD'}}>{props.service}</Text>
                        </View>
                    </View>
                    <View style={styles.Column}>
                        <View style={{alignSelf: 'flex-end'}}>
                            <Text style={{color: '#724FFD'}}>{date.format(date.parse(props.date, 'YYYY-MM-DD'), 'MMM DDD')+ '|' + props.time}</Text>
                            <Text style={{color: '#724FFD'}}>{props.status}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
      
    )
}

export {AppointmentItem}