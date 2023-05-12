import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import Texto from "../../../components/Text";
import topo from "../../../../assets/topo.png";
import Cesta from "../../../mocks/cesta";

export default function Topo( {titulo} ){
    return(<>
        <Image source={topo} style={styles.topo}/>
        <Texto style={styles.titulo}>
            {titulo}
        </Texto>
</>);
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        width: "100%",
        fontWeight: "bold",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        padding: 16
    }
})
