import React from 'react';

import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert, ImageBackground, ScrollView, ProgressViewIOSComponent } from 'react-native';


export default function App() {
  return (

    <ScrollView style={styles.container}>

     <Image source={{ uri: 'https://w7.pngwing.com/pngs/826/1018/png-transparent-google-contacts-aol-mail-computer-icons-address-book-email-miscellaneous-logo-export.png' }} style={styles.logo} />
      
      <View style={styles.cabecalho}>
          <Text style={styles.cabecalhocustom}>Lista de contatos</Text>
      </View>
      

      <View style={styles.postcontainer}>
          <Text style={styles.posttitle}>✎ Nome:</Text>
          <TextInput style={styles.postdescrition}> </TextInput>
      </View>

      <View style={styles.postcontainer}>
          <Text style={styles.posttitle}>☎ Número:</Text>
          <TextInput style={styles.postdescrition} keyboardType="numeric"> </TextInput>
      </View>

      <Text style={styles.instructions}>Clique no botão para salvar.</Text>

      <TouchableOpacity
        onPress={() => alert('O contato foi salvo.')}
        style={styles.buttonContainer}>
        <Text style={styles.title}>Salvar</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111', 
  },

  cabecalho: {
    margin: 10,
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: "#9999",
    borderWidth: 1,
    borderRadius: 15
  },

  cabecalhocustom: {
    fontSize: 30,
    marginHorizontal: 50,
  },

  logo: {
    marginTop: 100,
    height: 200,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },

  instructions: {
    color: '#888',
    fontSize: 20,
    marginHorizontal: 15,
    marginBottom: 10,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 20,
  },

  buttonContainer: {
    borderWidth: 1,
    borderColor: "#EF6351",
    borderRadius: 8,
    backgroundColor: "#EF6351",
    marginHorizontal: 100,
    height: 45,
    width: "50%",

    alignItems: "center",
    justifyContent: "center",

    marginTop: 10,
  },

  postcontainer: {
    margin: 12,
    padding: 20,
    backgroundColor: "#9999" ,
    borderRadius: 50
  },

  posttitle: {
    fontSize: 20,
  },

  postdescrition: {
    fontSize: 15,
    backgroundColor: "#DCDCDC",
    borderRadius: 12
  },

});
