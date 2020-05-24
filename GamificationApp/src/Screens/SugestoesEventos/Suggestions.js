import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
const logo1 = require('../../img/01.png')




export default function Suggestions(){
   return(
       <View style = {Estilos.SuggestionsContainer}>
           <TouchableOpacity style = {Estilos.ButtonStyle}>
               <Image source ={logo1}/>
               <Text>Evento 5</Text>
           </TouchableOpacity>

           <TouchableOpacity style = {Estilos.ButtonStyle}>
               <Image source ={logo1}/>
               <Text>Mov.ie</Text>
           </TouchableOpacity>

           <TouchableOpacity style = {Estilos.ButtonStyle}>
               <Image source ={logo1}/>
               <Text>Faesa Talks</Text>
           </TouchableOpacity>

           <TouchableOpacity style = {Estilos.ButtonStyle}>
               <Image source ={logo1}/>
               <Text>Palestra IOT</Text>
           </TouchableOpacity>

           <TouchableOpacity style = {Estilos.ButtonStyle}>
               <Image source ={logo1}/>
               <Text>Evento 6</Text>
           </TouchableOpacity>
           <TouchableOpacity style = {Estilos.ButtonStyle}>
               <Image source ={logo1}/>
               <Text>Evento 7</Text>
           </TouchableOpacity>

           <TouchableOpacity style = {Estilos.ButtonStyle}>
               <Image source ={logo1}/>
               <Text>Evento 8</Text>
           </TouchableOpacity>
       </View>
   );
}




const Estilos = StyleSheet.create({
    SuggestionsContainer:{
        backgroundColor: '#00A4E7',
        height: 130,
        flexDirection: 'row',
        paddingLeft: 16,
        marginBottom: 1000
    },

    ButtonStyle:{
        width: 80,
        marginTop: 28,
        marginRight: 16,
        alignItems: 'center'
    },

});