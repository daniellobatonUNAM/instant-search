import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {

  const data = [
    {nombre: 'Juan',edad: 21,},
    {nombre: 'Daniel',edad: 25,},
    {nombre: 'Elizabeth',edad: 24,},
    {nombre: 'Eduardo',edad: 23,},
    {nombre: 'Fernando',edad: 27,},
    {nombre: 'Tania',edad: 23,},
    {nombre: 'Nilda',edad: 31,},
  ];

  const [registros, setRegistros] = useState(data)

  const handleChange = (text) => {

    setRegistros(data.filter(item => item.nombre.toLowerCase().includes(text.toLowerCase())));

  }

  return (

    <View style={styles.contenedor}>

      <SearchBar onChange={handleChange}/>

      <View style={styles.linea}></View>

      <View style={styles.contenedorRegistros}>
          
          {registros.map((item,index) => (
              
              <Text style={styles.registro} key={index}>{item.nombre} - {item.edad} años</Text>

          ))}
          
      </View>

    </View>

  )

}

export default SearchScreen

const styles = StyleSheet.create({
  contenedor: {
      width: '100%',
      flex: 1,
      gap: 10,
  },
  linea: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
  registro: {
      padding: 15,
      borderWidth: 1,
      borderColor: '#000',
      borderStyle: 'solid',
  },
  contenedorRegistros: {

  }
})