import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import Home from '../../screens/HomeScreen'
import Login from '../../screens/LoginScreen'
import { BrowserRouter as Router, Route, Switch,Redirect, } from 'react-router-dom'
import SignUp from '../../screens/SignUpScreen';
import Otp from '../../screens/OtpScreen';
import Second from '../../screens/SecondScreen';

let customFonts = {
    'Bold': require('../../assets/Montserrat-Bold.ttf'),
    'Regular': require('../../assets/Montserrat-Regular.ttf'),
    'KR': require('../../assets/KR.ttf')
};

export default class Fonts extends React.Component {
    state = {
        fontsloaded: false
    }


    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsloaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {
        if (this.state.fontsloaded) {
            return (
                <Router>
                    <Switch>
                        {/* <Redirect exact from="/" to="/login"/> */}
                        <Route exact path="/" >
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/signup">
                            <SignUp/>
                        </Route>
                        <Route path="/otp">
                            <Otp/>
                        </Route>
                        <Route path="/second">
                            <Second/>
                        </Route>
                    </Switch>
                </Router>
            )
        } else {
            return (
                <AppLoading />
            )
        }
    }
}


