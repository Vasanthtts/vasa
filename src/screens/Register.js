import React from "react";
import { Text, StyleSheet, View, Button, ImageBackground } from "react-native";
import { TextInput } from 'react-native-paper';


const RegisterScreen = ({ navigation }) => {
    return (
        <View style={R.main}>
               <View style={R.fname}>
                   <TextInput
                    label="first name"
                    mode="outlined"
                    right={<TextInput.Icon name="account"/>}
                    />
                </View> 
                <View style={R.lname}>
                   <TextInput
                    label="Last name"
                    mode="outlined"
                    right={<TextInput.Icon name="account"/>}
                    />
                </View> 
                <View style={R.mail}>
                   <TextInput
                    label="Email"
                    mode="outlined"
                    right={<TextInput.Icon name="email-open" />}
                    />
                    
                </View> 
                <View style={R.cmail}>
                   <TextInput
                    label="Confrim Email"
                    mode="outlined"
                    right={<TextInput.Icon name="email-open" />}
                    />
                </View> 
                <View style={R.word}>
                   <TextInput
                    label="Password"
                    mode="outlined"
                    right={<TextInput.Icon name="eye" />}
                    />
                </View> 
                <View style={R.con}>
                   <TextInput
                    label="Confirm"
                    mode="outlined"
                    right={<TextInput.Icon name="eye" />}
                    />
                </View> 
                <View style={R.btn}>
                    <Button color="red" title="SIGN IN" onPress={() => navigation.navigate("Home")} />
                </View>
                
                
        </View>
        
        
            
    )

};
const R = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: "center",
        paddingTop: 20,
    },
    fname:{
        paddingTop: 30,
        width: 300,
        height: 50,
    },
    lname:{
        paddingTop: 50,
        width: 300,
        height: 50,
    },
    mail:{
        paddingTop: 70,
        width: 300,
        height: 50,
    },
    cmail:{
        paddingTop: 70,
        width: 300,
        height: 50,
    },
    word:{
        
        paddingTop: 70,
        width: 300,
        height: 50,

    },
    con:{
        paddingTop: 70,
        width: 300,
        height: 50,
    },
    btn: {
        paddingTop: 90,
        fontStyle: "roboto mono"
    }

});



export default RegisterScreen;
