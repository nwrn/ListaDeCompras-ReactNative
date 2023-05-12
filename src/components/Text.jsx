import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto( {children, style} ){
    let estilo = styles.texto;

    if(style?.fontWeight === "bold"){
        estilo = styles.textoBold;
    }

    return(
        <Text style={[style, estilo]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    textoBold: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})