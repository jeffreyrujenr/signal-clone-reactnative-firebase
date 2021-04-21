import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Button, Text, Input } from 'react-native-elements'
import { auth } from '../firebase'

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login"
        })
    }, [navigation])
    
    const register = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageUrl || 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'
            })
        }).catch((error) => alert(error.message))
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>
                Create a Signal account
            </Text>
            <View style={styles.inputContainer}>
                <Input 
                placeholder="Full Name" 
                autoFocus 
                type="text" 
                value={name} 
                onChangeText={(text) => setName(text)}/>
                <Input 
                placeholder="Email"  
                type="text" 
                value={email} 
                onChangeText={(text) => setEmail(text)}/>
                <Input 
                placeholder="Password"  
                type="text"
                secureTextEntry 
                value={password} 
                onChangeText={(text) => setPassword(text)}/>
                <Input 
                placeholder="Profile Picture URL (optional)"  
                type="text" 
                value={imageUrl} 
                onChangeText={(text) => setImageUrl(text)} />    
            </View>            
            <Button
            raised
            onPress={register} 
            title="Register" 
            containerStyle={styles.button} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
