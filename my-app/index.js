import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import backgImg from './assets/fondoimg.jpg';

export default function Index({ navigation }) {
    return (
        <ImageBackground source={backgImg} style={styles.container}>
            <View style={styles.content}>
                <Text style={{ fontSize: 24, marginBottom: 20, color: 'white' }}>Welcome to your favorite manga site</Text>
                <Button
                    title="Register"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
