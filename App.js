import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Counter from './src/components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Open up App.js to start working on your app!</Text>
      <Button title='Press me please' />
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 38,
    color: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffaa00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
