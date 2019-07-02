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
          <TouchableOpacity>
            <Text style={styles.backBtn}>
              {this.state.id}
            </Text>
          </TouchableOpacity>
          <View style={styles.center}>
            <Text style={styles.questionText}>{this.state.questions[this.state.currentQuestionIndex].question}?</Text>
          </View>
          <View style={{}}>
            <TouchableOpacity style={[styles.showAnswerBtn, styles.btn]} onPress={this.showAnswer}>
              <View style={styles.left}>
                <Text style={{color: white, fontWeight:'700', fontSize: 20}}>SHOW ANSWER</Text>
              </View>
              <View style={styles.right}>
                <Ionicons
                  name={Platform.OS === 'ios' ? 'ios-finger-print' : 'md-finger-print'}
                  size={40} style={{color: white}}
                />
              </View>
            </TouchableOpacity>
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

export default QuizQuestion;