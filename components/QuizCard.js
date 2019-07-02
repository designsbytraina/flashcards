import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getDeck } from '../utils/helpers';
import { coral, rust, dkTeal, teal, ltTeal, white } from '../utils/colors';
import QuizQuestion from './QuizQuestion';
import QuizAnswer from './QuizAnswer';
import QuizComplete from './QuizComplete';
import DeckDetail from './DeckDetail';
import NewDeck from './NewDeck';
import NewQuestion from './NewQuestion';

class QuizCard extends React.Component {
  state = {
    id: '',
    questions: [],
    screen: ''
  }

  componentDidMount() {
    // get questions for specific id using getDeck()
    const _id = this.props.navigation.getParam('id', '');
    this.setState({id: _id});

    let checkQuestions = this.props.navigation.getParam('questions', []);
    console.log(checkQuestions);

    if (checkQuestions !== []) {
      this.setState({questions: checkQuestions});
    } else if (checkQuestions === []) {
      let data = getDeck(_id);
      if (typeof data.questions !== 'undefined') {
        this.setState({questions: data.questions});
      } else {
        console.log('EMPTY')
        this.setState({questions: []})
      }
    }

    const desiredScreen = this.props.navigation.getParam('screen', '');
    this.setState({screen: desiredScreen});
  }

  render() {

    if (this.state.screen === 'addDeck') {
      return (
        <View style={styles.addContainer}>
          <NewDeck navigation={this.props.navigation} />
        </View>)

    } else if (this.state.screen === 'startQuiz' || this.state.screen === 'question') {
      if (this.state.questions.length === 0) {
        return (
          <View style={styles.addContainer}>
            <View style={styles.center}>
              <Text style={styles.centerText}>
                This deck does not currently have any questions.
              </Text>
            </View>
          </View>
        )
      }

      return (
        <View style={styles.questionContainer}>
          <QuizQuestion questions={this.state.questions} navigation={this.props.navigation} />
        </View>)

    } else if (this.state.screen === 'answer') {
      return (
        <View style={styles.answerContainer}>
          <QuizAnswer questions={this.state.questions} navigation={this.props.navigation} />
        </View>)

    } else if (this.state.screen === 'complete') {
      return (
        <View style={styles.questionContainer}>
          <QuizComplete questions={this.state.questions} navigation={this.props.navigation} />
        </View>)

    } else if (this.state.screen === 'addQuestion') {
      return (
        <View style={styles.addContainer}>
          <NewQuestion id={this.state.id} navigation={this.props.navigation} />
        </View>)

    } else {
      // TODO: Render a 404 style default card
      return (
        <View style={styles.addContainer}>
          <NewDeck navigation={this.props.navigation} />
        </View>)
    }
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
  addContainer: {
    flex: 1,
    margin: 10,
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: 'rgba(255,255,255,.8)',
    borderColor: dkTeal,
    borderRadius: 5,
    borderWidth: 5
  },
  center: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  centerText: {
    fontSize: 25,
    textAlign: 'center',
    color: dkTeal
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