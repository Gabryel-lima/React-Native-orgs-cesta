
import React from "react-native";
import { StyleSheet, FlatList,  View } from "react-native";

import Texto from "../../components/Texto";
import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";
import Item from "./components/Item";


export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList 
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({nome}) => nome }
            ListHeaderComponent={() => {
                return <> 
                    <Topo {...topo}/>
                        <View style={estilos.cesta}>
                            <Detalhes {...detalhes}/>
                            <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
                        </View>
                    </>
            }}
        />
    </> //Utiizando um fragmanto para fazer o este componente ser irmão da StatusBar App.js.
}

export const estilos = StyleSheet.create({
    titulo: {
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
    },
});