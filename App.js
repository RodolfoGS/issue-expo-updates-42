import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Updates from 'expo-updates';

export default function App() {
  handleCheckUpdate = async () => {
    try {
      const asd = await Updates.fetchUpdateAsync();
      alert(JSON.stringify(asd));
    } catch (error) {
      alert(JSON.stringify(error.message));
    }
  }

  handleForceUpdate = async () => {
    await Updates.reloadAsync();
  }

  return (
    <View style={styles.container}>
      <Text>Release: {Updates.manifest.revisionId}</Text>
      <Button onPress={handleCheckUpdate} title="Check Update" />
      <Text />
      <Button onPress={handleForceUpdate} title="Force Update" />
    </View>
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
