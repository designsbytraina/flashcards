import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getDecks } from '../utils/helpers';
import { coral, rust, dkTeal, teal, ltTeal, white } from '../utils/colors';
import QuizQuestion from './QuizQuestion';
import QuizAnswer from './QuizAnswer';
import QuizComplete from './QuizComplete';
import DeckDetail from './DeckDetail';
import NewDeck from './NewDeck';
import NewQuestion from './NewQuestion';

class QuizCard extends React.Component {
  componentDidMount() {
    // TODO: get data from async storage
    // getDecks
  }
  render() {
    return(
      <View style={styles.questionContainer}>
        <QuizQuestion />
{/*        <QuizAnswer />
        <QuizComplete />
        <DeckDetail />
        <NewDeck />
        <NewQuestion />*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    margin: 10,
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: coral,
    borderColor: white,
    borderRadius: 5,
    borderWidth: 5
  },
  answerContainer: {
    flex: 1,
    margin: 10,
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: 'rgba(255,255,255,.8)',
    borderColor: coral,
    borderRadius: 5,
    borderWidth: 5
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
  showAnswerBtn: {
    backgroundColor: 'rgba(0,0,0, .1)',
  },
  addQuestionBtn: {
    backgroundColor: 'rgba(0,0,0, .2)',
  },
  btn: {
    padding: 10,
    paddingTop: 40,
    paddingBottom: 30
  },
  questionText: {
    color: white,
    fontSize: 25,
    textAlign: 'center'
  },
  backBtn: {
    color: white,
    padding: 10,
    fontWeight: '700'
  },
  left: {
    // flex: 1,
  },
  right: {
    // flex: 1
  }
})

export default QuizCard;