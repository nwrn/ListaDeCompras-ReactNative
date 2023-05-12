import React from "react"
import { StyleSheet, View, FlatList } from "react-native";

import Texto from "../../components/Text";
import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";
import Item from "../../components/Item";
import cesta from "../../mocks/cesta";

export default function Cesta( {topo, detalhes, itens} ){
    return(
    <>
        <FlatList data={itens.lista}
            renderItem={Item}
            keyExtractor={ ({item}) => item }
            ListHeaderComponent={
            <>
                <Topo {...topo} />
                <View style={styles.cesta}>
                    <Detalhes {...detalhes} />
                    <Texto style={styles.title}> {itens.titulo} </Texto>
                </View>
            </>}
        />
    </>);
}

const styles = StyleSheet.create({
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
});