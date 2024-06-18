import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Count } from './Count';

export default function App() {
  return (
    <View style={styles.container}>
       <Count />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#fff'
  }
}); 

