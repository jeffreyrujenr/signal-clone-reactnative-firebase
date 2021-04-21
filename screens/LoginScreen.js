import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StatusBar, StyleSheet, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { auth } from '../firebase'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {      
            if(authUser) {
                navigation.replace("Home")
            }
        })
    }, [])

    const signIn = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .catch(error => alert(error))
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light" />
            <Image source={{
                uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png',
            }}
            style={{ width: 100, height: 100}} />
            <View style={styles.inputContainer}>
                <Input 
                placeholder="Email" 
                autoFocus 
                type="email" 
                value={email}
                onChangeText={(text) => setEmail(text)}/>
                <Input 
                placeholder="Password" 
                secureTextEntry 
                type="password" 
                value={password}
                onChangeText={(text) => setPassword(text)}/>
            </View>
            <Button 
            containerStyle={styles.button} title="Login" 
            onPress={signIn} />
            <Button 
            containerStyle={styles.button} type="outline" 
            title="Register" 
            onPress={() => navigation.navigate("Register")}/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
