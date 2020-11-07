import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
export default class LoginScreen extends Component {
    state = {
        name: ''
    }
    continue = () => {
        fetch('http://192.168.43.250/imagesaver/registeruser?username=' + this.state.name, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson)=>{
            console.log(responseJson.success);
            if(responseJson.success === true)
                this.props.navigation.navigate("CameraScreen", { userGuid: responseJson.guid })
        })
        .catch((error) => {
            console.error(error);
         });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circle} />
                <View style={{ marginTop: 64 }}>
                    <Image source={require('../assets/communication.png')} style={{ width: 100, height: 100, alignSelf: 'center' }} />
                </View>
                <View style={{ marginHorizontal: 32 }}>
                    <Text style={styles.header}>Username</Text>
                    <TextInput style={styles.input}
                        placeholder='Username'
                        onChangeText={name => { this.setState({ name }) }}
                        value={this.state.name} />
                    <View style={{ alignItems: 'flex-end', marginTop: 64 }}>
                        <TouchableOpacity style={styles.continue} onPress={this.continue}>
                            <Text style={{ color: "white" }}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F5F7'
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: '#fff',
        position: 'absolute',
        left: -120,
        top: -20
    },
    header: {
        fontWeight: '800',
        fontSize: 30,
        color: '#000',
        marginTop: 32
    },
    input: {
        marginTop: 32,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#BAB7C3',
        borderRadius: 30,
        paddingHorizontal: 16,
        color: '#000',
        fontWeight: '600'
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: '#9075E3',
        alignItems: 'center',
        justifyContent: 'center'
    }

})