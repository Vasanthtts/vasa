import React from "react";
import { Text, StyleSheet, View, Button, ImageBackground , Image} from "react-native";

const ImageDetails = (props) => {
    // console.log(props);
    return  (<View>
        <Text>{props.name} - {props.age}</Text>
        <Image style={{width:100, height:100}} source={props.imgURL} title={props.title} /><Text>GFHGFHGFH</Text>
    </View>
);}

const styles = StyleSheet.create({});

export default ImageDetails;