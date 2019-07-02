import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { getDecks } from '../utils/helpers';
import { coral, rust, dkTeal, teal, ltTeal, white } from '../utils/colors';


class QuizComplete extends React.Component {
  state = {
    id: '',
    numCorrect: 0,
    numQuestions: 0
  }

  handleTryAgain = () => {
    // clear total incorrect/correct and bring user back to beginning quiz question
    const resetAction = StackActions.reset({
      index: 2,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({
          routeName: 'Details',
          params: {
            id: this.state.id,
          }
        }),
        NavigationActions.navigate({
          routeName: 'StartQuiz',
          params: {
            screen: 'startQuiz',
            id: this.state.id,
            questions: this.state.questions,
            numCorrect: 0,
            numIncorrect: 0,
            currentQuestionIndex: 0
          }
        })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  handleGoHome = () => {
    const deckHomeAction = NavigationActions.navigate({
      routeName: 'Details',
      params: {
        id: this.props.id
      }
    })
    // clear total incorrect/correct and bring user back to deck Details
    this.props.navigation.dispatch(deckHomeAction);
  }

  componentDidMount() {
    const {id, questions, numCorrect, numQuestions} = this.props.navigation.state.params;
    this.setState({id: id, questions: questions, numCorrect: numCorrect, numQuestions: numQuestions});
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.titleText}>{this.state.id}</Text>
          <Text style={styles.subtitleText}>{this.state.numCorrect} / {this.state.numQuestions}</Text>
        </View>
        <View style={{}}>
          <View style={styles.showAnswerBtn}>
            <View style={styles.left}>
              <Text style={{color: white, fontWeight:'700', fontSize: 20}}>try again?</Text>
            </View>
            <View style={styles.right}>
              <TouchableOpacity style={styles.btn} onPress={this.handleTryAgain}>
                <Text style={{color: white, fontWeight:'700', fontSize: 20}}>YAH</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={this.handleGoHome}>
                <Text style={{color: white, fontWeight:'700', fontSize: 20}}>NAH</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
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
  titleText: {
    color: white,
    // justifyContent: 'center'
    fontSize: 30,
    fontWeight: "700"
  },
  subtitleText: {
    color: white,
    fontSize: 65,
    padding: 10,
    marginTop: 40,
    textAlign: 'center'
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
    paddingBottom: 30,
    // backgroundColor: teal
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

export default QuizComplete;