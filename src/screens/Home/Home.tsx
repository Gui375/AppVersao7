
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackTypes } from '../../routes/stack';


const Home = () => {
    const navigation = useNavigation<StackTypes>();

    const handleImc = () => {
        navigation.navigate('imc');
  
      };



return (
    <View>
        <Text>Estou na Home</Text>     

        <TouchableOpacity onPress={handleImc} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>IMC</Text>
      </TouchableOpacity>   
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
        width: '10%',
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


export default Home;