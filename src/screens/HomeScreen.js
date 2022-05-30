import React from 'react';
import { Text, StyleSheet,View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Hi there!</Text>
    <View Style={styles.Button}>
    <Button title="GO TO TTS" onPress={()=> navigation.navigate("Components")} />
    <Button title="GO TO WELCOME" onPress={()=> navigation.navigate("Comp")} />
    <Button title="GO TO IMAGE" onPress={()=> navigation.navigate("Image")} />
    <Button title="GO TO Counter" onPress={()=> navigation.navigate("Counter")} />
    <Button title="GO TO COLOR" onPress={()=> navigation.navigate("Color")} />
    </View>
    
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  Button: {
    flex:1,
    paddingTop: 30,
    width: 300,
    height: 50,
  }
});

export default HomeScreen;
