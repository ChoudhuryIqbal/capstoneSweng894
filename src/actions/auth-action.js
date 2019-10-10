import firebase from 'firebase'

export const userSet = user => ({
    type: 'USER_SET',
    payload: user.uid
})

export const userAuthError = error => ({
    type: 'AUTH_ERROR',
    payload: error
})

export const logIn = async (email, password) =>  dispatch => {
    console.log('Login');
    
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data);
            
            dispatch(userSet(data.user))
        })
        .catch((error) => {
            console.log(error);
            
            dispatch(userAuthError('Authentication Failed'))
        })
}

export const signUp = (email, password) => {
    firebase.auth()
        .createUserWithEmailAndPassword(email,password)
        .then((data) => {
            dispatch(userSet(data.user))
        })
        .catch((error) => {
            dispatch(userAuthError(error))
        })
}

