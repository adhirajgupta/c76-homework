import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import db from '../config'
import firebase from 'firebase';
import { store } from '../redux/Redux';
import { connect } from 'react-redux';

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            emailId: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            contact: '',
            confirmPassword: '',
            pin: '',
        }
    }

    userSignUp = () => {
        if (this.state.password !== this.state.confirmPassword) {
            return alert("password doesn'ta match\nCheck your password.")
        } else {
            firebase.auth().createUserWithEmailAndPassword(this.state.emailId, this.state.password)
                .then(() => {
                    db.collection('Users').doc('Email&Password').collection('users').add({
                        first_name: this.state.firstName,
                        last_name: this.state.lastName,
                        contact: this.state.contact,
                        email_id: this.state.emailId,
                        address: this.state.address,
                        pin: this.state.pin,
                    })

                    store.dispatch({
                        type: 'USER',
                        emailId: this.state.emailId,
                        firstName: this.state.firstName,
                        lastName: this.state.lastName
                    })

                    return alert(
                        'User Added Successfully',
                    );
                })
                .catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    return alert(errorMessage)
                });
        }
    }


    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.title}>SIGN UP</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.loginBox}
                        placeholder="abc@example.com"
                        keyboardType='email-address'
                        onChangeText={(text) => {
                            this.setState({
                                emailId: text,
                            })
                        }}
                    />
                    <TextInput
                        style={styles.loginBox}
                        secureTextEntry={true}
                        placeholder="Enter Password"
                        onChangeText={(text) => {
                            this.setState({
                                password: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.loginBox}
                        secureTextEntry={true}
                        placeholder="Confirm Password"
                        onChangeText={(text) => {
                            this.setState({
                                confirmPassword: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.loginBox}
                        placeholder="First Name"
                        onChangeText={(text) => {
                            this.setState({
                                firstName: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.loginBox}
                        placeholder="Last Name"
                        onChangeText={(text) => {
                            this.setState({
                                lastName: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.loginBox}
                        placeholder="Contact"
                        keyboardType="number-pad"
                        onChangeText={(text) => {
                            this.setState({
                                contact: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.loginBox}
                        placeholder="Address"
                        onChangeText={(text) => {
                            this.setState({
                                address: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.loginBox}
                        placeholder="Pin"
                        secureTextEntry={true}
                        keyboardType="number-pad"
                        onChangeText={(text) => {
                            this.setState({
                                pin: text
                            })
                        }}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.userSignUp()
                            this.props.navigation.navigate('LoginScreen')
                        }}
                    >
                        <Text style={styles.buttonText}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    //#ADD8E6
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ADD8E6",
        marginTop: StatusBar.currentHeight || 0,
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: '300',
        paddingBottom: 30,
        color: 'blue'
    },
    loginBox: {
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: 'blue',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
    },
    KeyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalTitle: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        color: 'blue',
        margin: 50
    },
    modalContainer: {
        borderRadius: 20,
        borderColor: '#ADD8E6',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffff",
        marginRight: 30,
        marginLeft: 30,
        marginTop: 30,
        marginBottom: 80,
        //padding: 10,
    },
    formTextInput: {
        width: "75%",
        height: 35,
        alignSelf: 'center',
        borderColor: '#ADD8E6',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        fontSize: 15,
    },
    registerButton: {
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'blue',
        marginTop: 30
    },
    registerButtonText: {
        color: 'blue',
        fontSize: 15,
        fontWeight: 'bold'
    },
    cancelButton: {
        width: 200,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
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



const mapStateToProps = (state) => {
    console.log(state)
    return ({
        emailId: state.emailId,
        firstName: state.firstName,
        lastName: state.lastName,
    })
}


export default connect(mapStateToProps)(SignUp)