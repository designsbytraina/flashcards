import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DeckList from './components/DeckList';
import DeckDetail from './components/DeckDetail';
import QuizCard from './components/QuizCard';
// import { ltYellow } from './utils/colors';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: ltYellow,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });

function addInitialData() {
  // TODO: Add initial user and deck values to store
  /* const store = {
  user: {
    currentDeck: '',
    numberCorrect: 0,
    numberIncorrect: 0,
    totalQuestions: 0
  },
  decks: {
    React: {
      title: 'React',
      questions: [
        {
          question: 'How do you do that?',
          answer: 'The world may never know.'
        }
      ]
    }
  }
} */
}


const AppNavigator = createStackNavigator(
  {
    Home: DeckList,
    AddDeck: QuizCard,
    Details: DeckDetail,
    StartQuiz: QuizCard,
    Question: QuizCard,
    Answer: QuizCard,
    AddQuestion: QuizCard,
    QuizComplete: QuizCard
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);