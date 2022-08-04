import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import OffsetButton from "../components/buttons/OffsetButton";

export default function Homescreen(props) {
  var inscription = OffsetButton("Inscription", "BirthdayScreen", inscription);
  var connexion = OffsetButton("Connexion", "SignInScreen", connexion); //SignInScreen


  function inscription(redirection) {
    props.navigation.navigate(redirection);
  }
  function connexion(redirection) {
    props.navigation.navigate(redirection);
  }


  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/backgrounds/dégradé_buddy.png")}
    >
      <Image
        style={styles.logo}
        source={require("../assets/logo/logo_buddy.png")}
      />

      <View style={styles.container}>
        {inscription}
        {connexion}

        

     
        

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    flex: 1,
    resizeMode: "contain",
    width: "50%",
  },
  button: {
    flex: 1,

    backgroundColor: "red",
  },
});
