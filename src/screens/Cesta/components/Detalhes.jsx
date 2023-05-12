import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Texto from "../../../components/Text";

export default function Detalhes( {nomeCesta, nomeFazenda, descricao, preco, imagemFazenda, botao} ){
    return(<>
            <Texto style={styles.nomeCesta}>
                {nomeCesta}
            </Texto>

            <View style={styles.fazenda}>
                <Image source={imagemFazenda} style={styles.imagemFazenda}/>
                <Texto style={styles.nomeFazenda}>
                    {nomeFazenda}
                </Texto>
            </View>

            <Texto style={styles.descricao}>
                {descricao}
            </Texto>

            <Texto style={styles.preco}>
                {preco}
            </Texto>

            <TouchableOpacity style={styles.botao}>
                <Texto style={styles.textoBotao}> {botao} </Texto>
            </TouchableOpacity>
    </>);
}

const styles = StyleSheet.create({
    nomeCesta: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
});
