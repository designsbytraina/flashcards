import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { getDecks } from '../utils/helpers';
import { coral, rust, dkTeal, teal, ltTeal, white } from '../utils/colors';


class QuizQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.showAnswer = this.showAnswer.bind(this);
    this.state = {
      id: '',
      questions: [],
      numCorrect: 0,
      numIncorrect: 0,
      currentQuestionIndex: 0
    }
  }

  showAnswer = () => {
    let currIndex;
    if (this.state.currentQuestionIndex === 'undefined' || this.state.currIndex === 0) {
      currIndex = 0;
    } else if (this.state.currentQuestionIndex > 0){
      currIndex = this.state.currentQuestionIndex;
    }

    // navigate to show answer and pass in question id/index
    const navigateAction = NavigationActions.navigate({
      routeName: 'Answer',
      params: {
        id: this.state.id,
        screen: 'answer',
        questions: this.state.questions,
        numCorrect: this.state.numCorrect,
        numIncorrect: this.state.numIncorrect,
        currentQuestionIndex: this.state.currentQuestionIndex
      }
    });
    this.props.navigation.dispatch(navigateAction);
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

  render() {
    // TODO: add loading
    if (this.state.questions.length > 0) {
      return(
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.backBtn}>
              {this.state.id}
            </Text>
            <Text style={styles.questionCount}>
              {this.state.questions.length - (this.state.numCorrect + this.state.numIncorrect)} questions remaining
            </Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.questionText}>{this.state.questions[this.state.currentQuestionIndex].question}?</Text>
          </View>
          <View style={styles.touchableCard}>
            <View style={styles.answerButtons}>
              <TouchableOpacity style={[styles.showAnswerBtn, styles.btn]} onPress={this.showAnswer}>
                <Text style={{color: white, fontWeight:'700', fontSize: 20, paddingTop: 5, textAlign: 'center'}}>SHOW ANSWER</Text>
                <Ionicons
                  name={Platform.OS === 'ios' ? 'ios-finger-print' : 'md-finger-print'}
                  size={40} style={{color: white, alignSelf: 'center'}}
                />
              </TouchableOpacity>
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
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerButtons: {
    alignSelf: 'stretch',
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
  questionCount: {
    alignSelf: 'stretch',
    color: white,
    padding: 10,
    fontWeight: '700',
    marginLeft: 110
  },
  touchableCard: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'auto'
  },
})

export default QuizQuestion;