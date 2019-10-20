import React from 'react'
import { connect } from 'react-redux'
import validation from '../../validation'
import utilites from '../../utilites'
import AccountForm from '../../components/account/AccountForm'

import { userSet } from '../../actions/auth-action'

/**
 * Sign-Up page with Email/Password Only
 */
class SignUpEmail extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            email:'',
            password: '',
            emailError: '',
            passwordError: '',
            uid: '',
            error: '', 
            loading: false 
        }
        
        this.verifyEmail = validation.verifyEmail.bind(this)
        this.verifyPassword = validation.verifyPassword.bind(this)
        this.onOtherAccount = utilites.onOtherAccount.bind(this)
        this.onLogInButton = utilites.onLogInButton.bind(this)
        this.onLogInSuccess = utilites.onLogInSuccess.bind(this)
        this.onLogInFail = utilites.onLogInFail.bind(this)
        this.onLogInSub = utilites.onLogInSub.bind(this)
    }

    render(){
        return(
            <AccountForm
                imageHolder={false}
                placeholder={require('../../image/Placeholder150.png')}
                image={require('../../image/Placeholder150.png')}
                email={this.state.email}
                onEmailChge={email => this.verifyEmail( email )}
                errorEmail={this.state.emailError}
                password={this.state.password}
                onPasswordChge={password => this.verifyPassword( password )}
                errorPassword={this.state.passwordError}
                error={this.state.error}
                onLogInButton={() => this.onLogInButton('S')}
                fgLogic={false}
                onOtherAccountOptionClick={() => this.onOtherAccount("L")}
                otherAccountTxt={'Already have an Account? Login'}            
            />
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        userSet: (user) => dispatch(userSet(user))
    }
}

export default connect(null, mapDispatchToProps)(SignUpEmail)