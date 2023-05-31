import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Open up App.tsx to start working on your app!</Text>
      <Link href="/TelA">TelaA</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titulo:{
    fontWeight:'bold',
    fontSize:20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
