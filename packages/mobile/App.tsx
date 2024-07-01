import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {add} from '@ultimateturborepoapp/shared';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>Hello, {add(2, 2)}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
