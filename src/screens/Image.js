import React from "react";
import { Text, StyleSheet, View, Button, ImageBackground, Image } from "react-native";
import ImageDetails from "./Component/ImageDetails";

const ImageScreen = () => {
    return  <View>
        <ImageDetails age="25" name="vasanth"/>
        <ImageDetails title="beach" imgURL={require('../../assets/beach.jpg')}/>
        <ImageDetails age="24" name="pasvan"/>
        <ImageDetails title="forest" imgURL={require('../../assets/forest.jpg')}/>
        <ImageDetails age="26" name="sai"/>
        <ImageDetails title="mountain" imgURL={require('../../assets/mountain.jpg')}/>
        <ImageDetails age="30" name="bala"/>
        {/* <Image source={require("../../assets/beach.jpg")} /> */}

        {/* <ImageDetails age="22" name="diwa"/> */}
    </View>

};

const styles = StyleSheet.create({});

export default ImageScreen;  