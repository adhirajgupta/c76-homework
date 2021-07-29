import { Header, Icon } from 'react-native-elements'
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class HeaderComponent extends Component {
    render() {
        return (
            <Header
                leftComponent={
                    <Icon name={this.props.name}
                    type={this.props.type} color='#696969'
                    onPress={this.props.onPress}
                    iconStyle={{ fontWeight: 'normal', color: 'lightblue' }} size={50}
                    accessibilityLabel="Login"
                    accessibilityHint="Login"
                    />}
                centerComponent={{ text: this.props.title, style: { fontSize: 35, color: 'lightblue', fontFamily: 'Bold' } }}
                backgroundColor="#4169E1"
            />
        )
    }
}

export default HeaderComponent