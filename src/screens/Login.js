import React from "react";
import { Text, StyleSheet, View, Button, ImageBackground } from "react-native";
import { TextInput } from 'react-native-paper';
// import { red100 } from "react-native-paper/lib/typescript/styles/colors";
const image = { uri: "https://reactjs.org/logo-og.png" };

const LoginScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../../assets/splashscreen.jpg')} resizeMode="cover" style={s.image}>
        <View style={s.mainview}>
            <View style={{ width: 300, height: 50, justifyContent: "center" }}>
                <TextInput
                    label="Email"
                    mode="outlined"
                    right={<TextInput.Icon name="email-open" />}
                />
            </View>
            <View style={s.pass}>
                <TextInput
                    label="Password"
                    mode="outlined"
                    right={<TextInput.Icon name="eye" />}

                /></View>
            <View style={s.btn}>
                <Button color="red" title="SIGN IN" onPress={() => navigation.navigate("Home")} />
                <Text style={s.mid}>OR</Text>
                <Button color="red" title="REGISTER" onPress={() => navigation.navigate("Register")} />
            </View>
        </View>
        </ImageBackground>
    )

};

const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        fontSize: 70,
    },
    mainview: {
        flex: 1,
        alignItems: "center",
        paddingTop: 20,
    },
    pass: {
        paddingTop: 30,
        width: 300,
        height: 50,
    },
    btn: {
        paddingTop: 60,
        fontStyle: "roboto mono"
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
      mid: {
          textAlign:"center",
          fontSize: 20,
          color: "#fff",
      }

});

export default LoginScreen;
