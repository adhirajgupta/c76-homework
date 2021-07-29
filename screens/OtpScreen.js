import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Redirect } from "react-router-dom";
import { store } from "../redux/Redux";
export default class Otp extends Component {
    constructor() {
        super()
        this.state = {
            otp: store.getState(),
            input: '',
            loggedIn: false
        }
    }
    componentDidMount() {
        console.log(this.props)
    }

    componentDidUpdate() {
        console.log(this.state)
    }
    render() {
        return (
            <SafeAreaProvider>
                <View>
                    <TextInput
                        style={styles.loginBox}
                        onChangeText={(text) => {
                            this.setState({
                                input: text
                            })
                            console.log(this.state.otp.otp)
                        }}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => {
                        if (this.state.otp.otp.toString() ===  this.state.input) {
                            this.setState({ loggedIn: true })
                        } else {
                            alert("Wrong Otp")
                        }
                    }}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    {
                        this.state.loggedIn === true && (
                            <Redirect exact from="/otp" to="/second" />
                        )
                    }
                </View>
            </SafeAreaProvider>
        )
    }
}


const styles = StyleSheet.create({
    loginBox: {
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: 'blue',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
    },
    button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: "#007FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
    },
    buttonText: {
        color: '#ffff',
        fontWeight: '200',
        fontSize: 20
    }
})