import {View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';



export default function LocationHome() {


    return(
        <ImageBackground source={require ('./img/homeBackgroud.png')}
        style={styles.background}>

        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: '100%',
        height: '100%',
       
    },
    
    });