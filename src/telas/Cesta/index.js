
import React from "react-native";
import { StyleSheet, View } from "react-native";


import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";


export default function Cesta({ topo, detalhes }) {
    return <> 
        <Topo {...topo}/>
        
        <View style={estilos.cesta}>
        <Detalhes {...detalhes}/>
        </View>
    </> //Utiizando um fragmanto para fazer o este componente ser irmão da StatusBar App.js.
}

export const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});