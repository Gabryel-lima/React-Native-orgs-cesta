
import React from "react";
import { StyleSheet, Text } from "react-native";


export default function Texto({children, style}) {
    var estilo = estilos.texto;

    if(style?.fontWeight === "bold") { 
        var estilo = estilos.textoNegrito
    }
    return <Text style={[style, estilo]}>{ children }</Text>
}

export const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "bold"
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})
