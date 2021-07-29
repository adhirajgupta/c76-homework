import styled from "styled-components/native"
import { lightTheme,darkTheme } from './Theme';

export const Container = styled.View`
    align-items:center;
    justify-content:space-between;
    background-color:${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
    `

export const InputContainer = styled(Container)`
    marginTop:20px;
    marginBottom:20px
    justify-content:space-between;
    `

export const Input = styled.TextInput`
    width: 300px;
    height: 100px;
    border-bottom-width: 1.5px;
    border-color: 'red';
    font-size: 20px;
    margin: 10px;
    paddingLeft: 10px;
    flex:1;
    `

// const Button = styled.TouchableOpacity`
// width: 300px;
// height: 50px;
// justifyContent: 'center';
// alignItems: 'center';
// border-radius: 50px;
// background-color: #007FFF;
// `

export const Button = styled.TouchableOpacity`
    width: 200px
    margin: 12px 0;
    background-color: #007FFF;
    padding: 10px 32px;
    border-radius: 6px;
    `


export const ButtonText = styled.Text`
    font-size:25px;
    font-weight:500;
    color:${(props) => props.theme.PRIMARY_TEXT_COLOR};
    text-align:center;
    `


