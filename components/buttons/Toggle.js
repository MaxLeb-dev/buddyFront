import React, {useState} from "react";
import { StyleSheet, TouchableOpacity, Text, View} from "react-native";

function Toggle(props) {
    
    const [isPressed, setIsPressed] = useState(false)

    var onPress = (moodName)=> {

        props.handleClickChooseMoodParent(moodName)

        if( isPressed === false ){

            setIsPressed(true)

        } else {

            setIsPressed(false)
        }
    }

    var colorButtonLeft
    var colorButtonRight

    if(isPressed === true){
        colorButtonLeft = {...styles.button, backgroundColor: "#FFA588"}
        colorButtonRight = {...styles.button}
    } else {
        colorButtonRight = {...styles.button, backgroundColor: "#DDABFE"}
        colorButtonLeft = {...styles.button}
    }


    // if(props.selected1 === true){
    //     colorButtonLeft = {...styles.button, backgroundColor: "#FFA588"}
    //     colorButtonRight = {...styles.button}
    //  } else {
    //     colorButtonRight = {...styles.button, backgroundColor: "#DDABFE"}
    //     colorButtonLeft = {...styles.button}
    // }


    return(

        <View style={styles.container}>
            <TouchableOpacity
                style={colorButtonLeft}
                onPress={() => onPress(isPressed)}>
                    <Text style={styles.buttonText}>{props.title}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={colorButtonRight} 
                onPress={() => onPress(isPressed)}>
                    <Text style={styles.buttonText}>{props.title2}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    
    container: {

        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },

    button: {

        width: 145,
        height: 40,
        borderWidth: 1,
        borderColor: "#372C60",
    },

    buttonText: {

        fontWeight: "400",
        fontSize: 16,
        letterSpacing: 0.5,
        color: "#372C60",
        textAlign: "center",
        marginTop: 6,

    },

})

export default Toggle