import { StyleSheet, SafeAreaView, View } from 'react-native';
import SearchScreen from './src/screens/SearchScreen';

export default function App() {

  return (

    <SafeAreaView style={styles.container}>

      <SearchScreen/>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
