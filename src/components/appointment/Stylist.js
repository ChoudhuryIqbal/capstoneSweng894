import React from 'react'
import { View, Text } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'
import { AppointmentRenderPickerField } from '../appointment'

/**
 * Stylist handler
 * @param {*} props 
 */
const Stylist = (props) => {
    const { status, stylist, stylistList, onSetStylist } = props
    
    if(!status){
        return (
            <View>
                <Text>{stylist}</Text>
            </View>
        )
    } else {
        return (
            <View>
                <CustomPicker
                    defaultValue={"i.e. Stylist"}
                    fieldTemplate={AppointmentRenderPickerField}
                    options={stylistList.map(s => s.Name)}
                    onValueChange={s => onSetStylist(s)}
                    value={stylist}
                />
            </View>
        )
    }
}

export {Stylist}