import React from 'react'
import { View, ScrollView } from 'react-native'
import AccountImage from '../../components/account/AccountImage'
import AccountButtons from '../../components/account/AccountButtons'
import AccountOptions from '../../components/account/AccountOptions'

class SignUpOptions extends React.Component {
    render(){
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.imgSty}>
                    <AccountImage
                        imageHolder={false}
                        placeholder={require('../../image/Placeholder150.png')}
                    />
                </View>
                <View style={styles.Column}>
                    <AccountButtons
                        btnOne={() => this.props.navigation.navigate('Sign Up With Email')}
                        txtOne={'Sign Up With Email'}
                        btnOneStyle={LogInBtnSty.buttonStyle}
                        txtOnetyle={LogInBtnSty.textStyle}
                        btnTwo={() => this.props.navigation.navigate('Sign Up With Social')}
                        txtTwo={'Sign Up Social Account'}
                        btnTwoStyle={SocialBtnSty.buttonStyle}
                        txtTwotyle={SocialBtnSty.textStyle}
                    />
                </View>
                <View>
                    <AccountOptions
                        onPress={() => this.props.navigation.navigate('Login')}
                        buttonStyle={BottomBtnSty.btnBtmStyle}
                        textStyle={BottomBtnSty.txtBtnStyle}
                        viewStyle={BottomBtnSty.bottomView}
                        children={'Already have account? Login'}
                    />  
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    imgSty: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    scrollView: {
      marginHorizontal: 20,
    },
    Row: {
        display: 'flex',
        flexDirection: 'row',
      },
    Column: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: 90,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 10
      },
    btnBtmStyle: {
        textColor: 'black',
        flex: 1
    },
    txtBtnStyle: {
        color: 'gray'
    },
    bottomView:{
        paddingUp: 10,
        alignItems: 'center',
        borderBottomColor: 'color',
        borderBottomWidth: 2,
        marginBottom: 20,
      }

}

const BottomBtnSty ={
  btnBtmStyle: {
      textColor: 'black',
      flex: 1
  },
  txtBtnStyle: {
      color: 'gray'
  },
  bottomView:{
      paddingUp: 10,
      alignItems: 'center',
      borderTopColor: 'color',
      borderTopWidth: 2,
      marginBottom: 20,
    }
}

const SocialBtnSty = {
    textStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10,        
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyle: {
      flex: 1,
      backgroundColor: '#724FFD' ,
      borderRadius: 0,
      borderWidth: 1,
      borderColor: '#fff',
      marginLeft: 5,
      marginRight: 5,
      width: 250,        
      justifyContent: 'center',
      alignItems: 'center'
    }
  };

const LogInBtnSty = {
    textStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10,        
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyle: {
      flex: 1,
      backgroundColor:'#4FA6FD' ,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#fff',
      marginLeft: 5,
      marginRight: 5,
      width: 250, 
      justifyContent: 'center',
      alignItems: 'center',
    }
  };

export default SignUpOptions