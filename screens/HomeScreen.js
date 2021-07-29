import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Redirect } from 'react-router-dom';
import HeaderComponent from '../components/components/Header';

// This is the landing screen page

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            pressed: false
        }
    }
    render() {
        return (

            <SafeAreaProvider style={{ backgroundColor: '#EDEDED' }}>
                <HeaderComponent
                    title="Barter-system-app" type="ionicon" name="ios-log-in-outline"
                    onPress={() => this.setState({ pressed: true })}
                />
                {
                    this.state.pressed === true && (
                        <Redirect exact from="/" to="/login" />
                    )
                }
                <View style={{ flex: 2, justifyContent: 'left', alignItems: 'left', flexDirection: 'row' }}>
                    <Image
                        source={require("../assets/LoginImage1.png")}
                        style={{ width: "75%", height: "100%" }}
                        resizeMode="stretch"
                    />
                    {/* <View style={{flexDirection:'row',alignItems:'center',margin:1}}>
                        <TouchableOpacity>
                            <Text>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>signup</Text>
                        </TouchableOpacity>
                    </View> */}
                    {/* </View> */}
                    <Text style={{ fontFamily: "Regular", fontSize: 25, fontWeight: '500', }}>
                        They rushed out the door, grabbing anything and everything they could think of they might need. There was no
                        to double-check to make sure they weren't leaving something important behind. Everything was thrown into the
                        and they sped off.Thirty minutes later they were safe and that was when it dawned on them that they had
                        forgotten the most important thing of all.
                        She sat in the darkened room waiting. It was now a standoff. He had the power to put her in the room, but not
                        power to make her repent. It wasn't fair and no matter how long she had to endure the darkness,
                        she wouldn't change her attitude.At three years old, Sandy's stubborn personality had already bloomed into
                        full view.
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: 'red', fontFamily: "Regular", fontSize: 25, fontWeight: '500' }}>
                        They rushed out the door, grabbing anything and everything they could think of they might need. There was no
                        to double-check to make sure they weren't leaving something important behind. Everything was thrown into the
                        and they sped off.Thirty minutes later they were safe and that was when it dawned on them that they had
                        forgotten the most important thing of all.
                        She sat in the darkened room waiting. It was now a standoff. He had the power to put her in the room, but not
                        power to make her repent. It wasn't fair and no matter how long she had to endure the darkness,
                        she wouldn't change her attitude.At three years old, Sandy's stubborn personality had already bloomed into
                        full view.
                    </Text>
                </View>
            </SafeAreaProvider>
        )
    }
}