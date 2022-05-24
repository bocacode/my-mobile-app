import { View, Text, Button, StyleSheet } from 'react-native';

export default function Counter() {
  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}>You clicked the button 0 times.</Text>
      <Button title="Click me" />
    </View>
  )
}

const styles = StyleSheet.create({
  counterContainer: {
    width: '80vw',
    margin: 14,
    padding: 14,
    backgroundColor: 'beige',
  },
  counterText: {
    fontSize: 30,
    textAlign: 'center',
  }
})