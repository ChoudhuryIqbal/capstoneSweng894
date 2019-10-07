import React from 'react'
import { 
    AsyncStorage
} from 'react-native'
import { ButtonCustom } from '../../components/common/ButtonCustom'
import { Spinner } from '../../components/common'
import { auth } from '../../config/firebaseConfig'
import AccountForm from '../../components/account/AccountForm'

class LogInEmail extends React.Component {
    state ={
        email:'',
        password: '',
        uid: '',
        error: '', 
        loading: false 
    }

    onLogInSub(){
        const { email, password } = this.state;

        this.setState({ error: '', loading: true})

        auth.signInWithEmailAndPassword(email, password)
            .then((data) => this.onLogInSuccess(data.user))
            .catch(this.onLogInFail.bind(this))
    }

    onLogInSuccess = async (user) => {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        }); 
        
        await AsyncStorage.setItem('CurrentUserId', user.uid)

        this.props.navigation.navigate('Profile', {
            'CurrentUserId': user.uid,
            'email':user.email
        })
    }

    onLogInFail(){
        this.setState({
            error: 'Authentication Failed',
            loading: false
        })
    }

    onLogInButton(){
        if(this.state.loading){
            return <Spinner size="small" />
        }

        return (    
            <ButtonCustom
                onPress={this.onLogInSub.bind(this)}
                buttonStyle={LogInBtnSty.buttonStyle}
                textStyle={LogInBtnSty.textStyle}
            >
                {'Login'}
            </ButtonCustom>
        )
    }

    render(){
        return(
            <AccountForm
                imageHolder={false}
                placeholder={require('../../image/Placeholder150.png')}
                image={require('../../image/Placeholder150.png')}
                email={this.state.email}
                onEmailChge={email => this.setState({ email })}
                password={this.state.password}
                onPasswordChge={password => this.setState({ password })}
                error={this.state.error}
                onLogInButton={() => this.onLogInButton()}
                fgLogic={true}
                onForgotClick={() => this.props.navigation.navigate('ForgotPassword')}
                forgotTxt={'Forgot Password?'}
                onSocialAccountClick={() => this.props.navigation.navigate('LogIn with Social')}
                socialAccountTxt={'Login with Social Account'}
                onOtherAccountOptionClick={() => this.props.navigation.navigate('SignUp')}
                otherAccountTxt={'Create an Account'}
            />
        )
    }
}

const LogInBtnSty = {
    textStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 5,
      paddingBottom: 5,        
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyle: {
      flex: 1,
      backgroundColor:'#4FA6FD' ,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#fff',
      marginLeft: 10,
      marginRight: 10,
      width: 250, 
      justifyContent: 'center',
      alignItems: 'center',
    }
  };

  export default LogInEmail