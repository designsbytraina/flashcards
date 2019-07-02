import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DeckList from './components/DeckList';
import DeckDetail from './components/DeckDetail';
import QuizCard from './components/QuizCard';


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