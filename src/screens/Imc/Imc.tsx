import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackTypes } from '../../routes/stack';
import Ola from '../../components/Ola/Ola';
import Imc from '../../components/Imc/Imc'


const imc = () => {

return (
    <View>
        <Text>Estou na Imc</Text>      
    
        <Ola nomeProps=''/>
        <Imc nomeProps=''/>




    </View>
);
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    button: {
        width: '80%',
        height: 40,
        borderRadius: 8,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#007bff',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      }
  });

export default imc;