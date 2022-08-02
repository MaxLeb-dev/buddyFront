import React, { useState } from "react";
import { TouchableOpacity, Image, View} from "react-native";

function backIcon() {

    const [isPress, setIsPress] = useState(false)
    const onPress = () => setIsPress(true)

        return(

            <View style={{marginTop: 30, marginLeft: 30}}>
                <TouchableOpacity  
                    onPress={onPress}>
                        <Image 
                        style={{width: 25}}
                        source={require('../../assets/icons/back_iconbuddy.png')}/>
                </TouchableOpacity>
            </View>
        )
}

export default backIcon