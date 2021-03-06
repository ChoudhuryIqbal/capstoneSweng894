import '../../../src/setupTests'
import Loader from '../../../src/page/general/Loader'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

jest.mock('firebase', () => {
    return {
      initializeApp: jest.fn(() => {
        return {
          auth: jest.fn(() => {
            return {
              createUserWithEmailAndPassword: jest.fn((para1, para2) => {
                return new Promise(function(resolve, reject) {
                  resolve({
                    email: 'test@test.com',
                    uid: '12345678abcdefg'
                  });
  
                  reject({ message: 'error!' });
                });
              }),
              signOut: jest.fn(() => {
                return new Promise(function(resolve, reject) {
                  resolve('Success');
                  reject({ message: 'error!' });
                });
              }),
              onAuthStateChanged: jest.fn(() => {
                return {
                  email: 'test@test.com',
                  uid: '12345678abcdefg'
                };
              }),
              signInWithEmailAndPassword: jest.fn((para1, para2) => {
                return new Promise(function(resolve, reject) {
                  reject({ message: 'error!' });
                });
              }),
              currentUser:  {
                  email: 'a@a.com',
                  displayName: 'Test'
              }
            };
          })
        };
      })
    };
});
  
jest.mock("react-redux", () => {
    return {
        connect: jest.fn().mockReturnValue(() => jest.fn())
    };
});

jest.mock("../../../src/actions", () => {
    return {
        auth: {
            userSet:  jest.fn().mockReturnValue('mock userSet action'),
            tokenSet:  jest.fn().mockReturnValue('mock tokenSet action'),
        },
        preference: {
            settingPref:  jest.fn().mockReturnValue('mock settingPref action'),
        }
    };
});

describe('Loader render correctly', () =>{
    let loader;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('Loader correctly render', () => {
        loader = shallow(<Loader {...props} />)
        expect(loader).toBeTruthy()
    })
    
    test('should map Loader to props', () => {
        const initialState = {
          userId: '',
          token: '',
          profile: {},
          preference: {},
          loadPreference: false,
          pref: false
        };
        store = mockStore(initialState);
        loader =  shallow(<Loader {...props} store={store}/>)

        expect(loader.props().userId).toBe(undefined);
        expect(loader.props().token).toBe(undefined);
        expect(loader.props().profile).toBe(undefined);
        expect(loader.props().preference).toBe(undefined);
        expect(loader.props().loadPreference).toBe(undefined);
        expect(loader.props().pref).toBe(undefined);
    })
})

describe('Loader map', () => {
    let mapStateToProps
    let mapDispatchToProps

    beforeEach(() => {
    let mockConnect = require("react-redux").connect;

    mapStateToProps = mockConnect.mock.calls[0][0];
    mapDispatchToProps = mockConnect.mock.calls[0][1];
    });
    
    afterEach(() => {jest.clearAllMocks()})

    test('should map Loader props to Actions', () => {
        let mockStore = require("../../../src/store");
        let mockActions = require("../../../src/actions");
        let dispatch = jest.fn();
        
        let props = mapDispatchToProps(dispatch);
        props.userSet('klajsdflksdf');

        expect(dispatch).toBeCalledWith('mock userSet action');
        expect(mockActions.auth.userSet).toBeCalledWith('klajsdflksdf');

        props = mapDispatchToProps(dispatch);
        props.tokenSet('klajsdflksdf');

        expect(dispatch).toBeCalledWith('mock tokenSet action');
        expect(mockActions.auth.tokenSet).toBeCalledWith('klajsdflksdf');

        props = mapDispatchToProps(dispatch);
        props.settingPref(false);

        expect(dispatch).toBeCalledWith('mock settingPref action');
        expect(mockActions.preference.settingPref).toBeCalledWith(false);
    })
})