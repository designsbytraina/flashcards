import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { getDecks } from '../utils/helpers';
import { coral, rust, dkTeal, teal, ltTeal, white } from '../utils/colors';


class QuizAnswer extends React.Component {
  state = {
    id: '',
    questions: [],
    numCorrect: 0,
    numIncorrect: 0,
    currentQuestionIndex: 0
  }

  componentDidMount() {
    const {id, screen, questions, numCorrect, numIncorrect, currentQuestionIndex} = this.props.navigation.state.params;
    if (id !== '') {
      this.setState({
        id,
        questions,
        numCorrect,
        numIncorrect,
        currentQuestionIndex
      });
    }
  }

  checkFinalQuestion() {
    if ( this.state.currentQuestionIndex === (this.state.questions.length-1) ) {
      return true
    } else {
      return false
    }
  }

  handleCorrectAnswer = () => {
    // mark correct
    numCorrect = this.state.numCorrect !== 'undefined' ? this.state.numCorrect++ : 1

    // check if final question
    let finalQuestion = this.checkFinalQuestion();

    if (finalQuestion === true) {
      let endQuizAction = NavigationActions.navigate({
        routeName: 'Question',
        params: {
          id: this.state.id,
          screen: 'complete',
          questions: this.state.questions,
          numCorrect: this.state.numCorrect,
          numQuestions: this.state.questions.length
        }
      });
      this.props.navigation.dispatch(endQuizAction);
    } else {
      // navigate to next question
      let questionAction = NavigationActions.navigate({
        routeName: 'Question',
        params: {
          id: this.state.id,
          screen: 'question',
          questions: this.state.questions,
          numCorrect: numCorrect,
          numIncorrect: this.state.numIncorrect,
          currentQuestionIndex: this.state.currentQuestionIndex++
        }
      });
      this.props.navigation.dispatch(questionAction);
    }
  }

  handleWrongAnswer = () => {
    // mark incorrect
    numIncorrect = this.state.numIncorrect !== 'undefined' ? this.state.numIncorrect++ : 1

    // check if final question
    let finalQuestion = this.checkFinalQuestion();

    if (finalQuestion === true) {
      let endQuizAction = NavigationActions.navigate({
        routeName: 'Question',
        params: {
          id: this.state.id,
          screen: 'complete',
          questions: this.state.questions,
          numCorrect: this.state.numCorrect,
          numQuestions: this.state.questions.length
        }
      });
      this.props.navigation.dispatch(endQuizAction);
    } else {
      // navigate to next question
      let questionAction = NavigationActions.navigate({
        routeName: 'Question',
        params: {
          id: this.state.id,
          screen: 'question',
          questions: this.state.questions,
          numCorrect: this.state.numCorrect,
          numIncorrect: numIncorrect,
          currentQuestionIndex: this.state.currentQuestionIndex++
        }
      });
      this.props.navigation.dispatch(questionAction);
    }
  }

  render() {
    if (this.state.questions.length > 0) {
      return(
        <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.backBtn}>
              {this.state.id}
            </Text>
          </TouchableOpacity>
          <View style={styles.center}>
            <Text style={styles.questionText}>{this.state.questions[this.state.currentQuestionIndex].answer}</Text>
          </View>
          <View>
            <View style={styles.showAnswerBtn}>
              <View style={styles.left}>
                <Text style={{color: coral, fontWeight:'700', fontSize: 20}}>how did you do?</Text>
              </View>
              <View style={styles.right}>
                <TouchableOpacity style={styles.btn} onPress={this.handleCorrectAnswer}>
                  <Text style={{color: 'green', fontWeight:'700', fontSize: 20}}>YAH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={this.handleWrongAnswer}>
                  <Text style={{color: 'red', fontWeight:'700', fontSize: 20}}>NAH</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    // marginTop: 50,
    // marginBottom: 50,
    // backgroundColor: coral,
    // borderColor: white,
    // borderRadius: 5,
    // borderWidth: 5
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
  showAnswerBtn: {
    backgroundColor: white,
  },
  addQuestionBtn: {
    backgroundColor: 'rgba(0,0,0, .2)',
  },
  btn: {
    padding: 10,
    paddingTop: 40,
    paddingBottom: 30,
    // backgroundColor: teal
  },
  questionText: {
    color: coral,
    fontSize: 25,
    textAlign: 'center'
  },
  backBtn: {
    color: coral,
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

export default QuizAnswer;