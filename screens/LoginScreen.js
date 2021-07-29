import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    StatusBar,

} from 'react-native';

import db from '../config'
import firebase from 'firebase';
import { Tooltip } from 'react-native-elements';
import { Link, Redirect, } from 'react-router-dom';
import { store, reducer } from '../redux/Redux';
import { connect } from 'react-redux'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            emailId: '',
            password: '',
            pin: '',
            otp: '',
            loggedIn: false,
        }
    }



    // sendMail = () => {
    //     Email.send({
    //         Host: "smtp.gmail.com",
    //         Username: "adhirajgupta2007@gmail.com",
    //         Password: "adhiraj1379",
    //         To: 'adhirajgupta2007@gmail.com',
    //         From: "adhirajgupta2007@gmail.com",
    //         Subject: "Sending Email using javascript",
    //         Body: "Well that was easy!!",
    //     })
    //         .then(function (message) {
    //             alert("mail sent successfully")
    //         });
    // }

    sendMail = async() => {
        // var id = Math.floor(Math.random() * 10000)
        var email = new FormData()
        email.append('email', {
            "email": "adhirajgupta2007@gmail.com",
            // otp: '5076'
        })

        var mail = {"email":"adhirajgupta2007@gmail.com"}
        // email.append('otp',{
        //     "otp": id
        // })




       await fetch('http://e2430b2d7e2f.ngrok.io/send', {
            mode:'no-cors',
            method: 'POST',
            headers: { "Content-Type": "multipart/form-data"},
            body: email
        }).then((response) => {
            //handle success
            console.log(response);
        })
            .catch((response) => {
                //handle error
                console.log(response);
            });
    }



    userLogin = async (emailId, password) => {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            return firebase.auth().signInWithEmailAndPassword(emailId, password)
                .then(() => {
                    db.collection('Users').doc('Email&Password').collection('users')
                        .where("pin", "==", this.state.pin)
                        .onSnapshot((snapshot) => {
                            var list = snapshot.docs.map(doc => doc.data())
                            this.setState({ firebaseDetails: [list] })
                            console.log(list)
                            if (list.length !== 0) {
                                var id = Math.floor(Math.random() * 10000)
                                var params = {
                                    name: list[0].first_name + " " + list[0].last_name,
                                    message: "Your otp is " + id
                                }
                                // this.sendMail()
                                store.dispatch({ type: "OTP", otp: id })
                                console.log(params)
                                this.setState({ loggedIn: true })
                            } else {
                                alert("pin cannot be undefined")
                            }
                        })
                })
        })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                return alert(errorMessage)
            })


    }



    componentDidMount() {
        this.sendMail()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ textAlign: 'center', alignSelf: 'center', marginLeft: '15%' }}>
                    <Link to="/signup"
                        // style={{color:"#ffff",fontWeight:'200',fontSize:20,textDecoration:"none"}}
                        style={{ textDecoration: "none", fontWeight: '200', fontSize: 25, }}
                    >
                        signup
                    </Link>
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
                        keyboardType="number-pad"
                        placeholder="Pin"
                        onChangeText={(text) => {
                            this.setState({
                                pin: text
                            })
                        }}
                    />
                    <TouchableOpacity
                        style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
                        onPress={() => {
                            this.userLogin(this.state.emailId, this.state.password)
                        }}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    {
                        this.state.loggedIn === true && (
                            <Redirect exact from="/login" to="/otp" />
                        )
                    }
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
        color: 'blue',
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
        otp: state.otp
    })
}


export default connect(mapStateToProps)(Login)