import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const SearchBar = ({onChange}) => {

    return (

        <View style={styles.contenedor}>

            <View style={styles.input}>

                <TextInput placeholder='Ingresa un nombre' onChangeText={(text) => {onChange(text)}}/>
            
            </View>

        </View>
    )

}

export default SearchBar

const styles = StyleSheet.create({
    contenedor: {
        width: '100%',
        flexDirection: 'column',
        gap: 10,
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        padding: 10,
        borderRadius: 8,
        width: '100%',
    },

})