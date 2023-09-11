import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines!</Text>
      <Text style={styles.introductions}>Tamanho da grade: 
      {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>

      <Field />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  introductions: {
    textAlign: 'center',
    marginBottom: 10,
  }  
});
