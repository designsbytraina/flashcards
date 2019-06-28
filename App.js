import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';
import DeckDetail from './components/DeckDetail';
import QuizCard from './components/QuizCard';
import { ltYellow } from './utils/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <DeckList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ltYellow,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
