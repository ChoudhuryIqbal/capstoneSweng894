import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import CreateAppointment from '../../../page/appointment/CreateAppointment'
import SelectAppointmentDetails from '../../../page/appointment/SelectAppointmentDetails'

import {LogOutNav, LogoNav} from '../../navButtons'
//import FindShopLocation from '../../../page/appointment/FindShopLocation'

/**
 * Appointment Creation Navigator - Tab
 */
const CreateAppointmentNavigator = createStackNavigator(
    {
       "Create": CreateAppointment,
       "Next": SelectAppointmentDetails,

    }, { 
        defaultNavigationOptions:{
            headerLeft: <LogoNav />,
            headerRight: <LogOutNav />
        }
    }
)

export default CreateAppointmentNavigator