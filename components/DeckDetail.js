import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { getDecks } from '../utils/helpers';
import { coral, rust, dkTeal, teal, ltTeal, white, ltYellow } from '../utils/colors';
import { getDeck } from '../utils/helpers';


class DeckDetail extends React.Component {
  state = {
    id: '',
    questions: []
  }

  componentDidMount() {
    const _id = this.props.navigation.getParam('id', '');
    if (_id !== '') {
      this.setState({id: _id})
    }
    // get data from async storage
    const question = this.props.navigation.getParam('question', '');
    const answer = this.props.navigation.getParam('answer', '');
    getDeck(_id).then((data) => this.setState( (state) => ({id: _id, questions: state.questions.concat(data.questions)})));

    if (this.props.navigation.getParam('question', '') !== '') {
      this.setState((state) => ({questions: state.questions.concat([{
        question: question,
        answer: answer
      }])}));
    }
  }

  startQuiz = () => {
    // load first question/redirect
    const startQuizAction = NavigationActions.navigate({
      routeName: 'StartQuiz',
      params: {
        screen: 'startQuiz',
        id: this.state.id,
        questions: this.state.questions,
        numCorrect: 0,
        numIncorrect: 0,
        currentQuestionIndex: 0
      }
    });
    this.props.navigation.dispatch(startQuizAction);
  }

  addQuestion = () => {
    // navigate to add question View
    const addQuestionAction = NavigationActions.navigate({
      routeName: 'AddQuestion',
      params: {
        screen: 'addQuestion',
        id: this.state.id
      }
    });
    this.props.navigation.dispatch(addQuestionAction);
  }

  render() {
    return(
      <View style={{backgroundColor: ltYellow, flex: 1}}>
        <View style={styles.container}>
          <View style={styles.center}>
            <Text style={styles.titleText}>{this.state.id}</Text>
            <Text style={styles.subtitleText}>{this.state.questions.length} questions</Text>
          </View>
          <View style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
            }}>
            <TouchableOpacity style={[styles.startQuizBtn, styles.btn]} onPress={this.startQuiz}>
              <Text style={{color: white, fontWeight:'700', fontSize: 20}}>START QUIZ</Text>
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-arrow-dropright-circle' : 'md-arrow-dropright-circle'}
                size={40} style={{color: white}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.addQuestionBtn, styles.btn]} onPress={this.addQuestion}>
              <View>
                <Text style={{color: white, fontWeight:'700', fontSize: 20}}>ADD QUESTION</Text>
              </View>
              <View>
                <Ionicons
                  name={Platform.OS === 'ios' ? 'ios-arrow-dropright-circle' : 'md-arrow-dropright-circle'}
                  size={40} style={{color: white}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: teal,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
  startQuizBtn: {
    backgroundColor: 'rgba(0,0,0, .1)',
  },
  addQuestionBtn: {
    backgroundColor: 'rgba(0,0,0, .2)',
  },
  btn: {
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'auto'
  },
  titleText: {
    color: white,
    fontSize: 35,
    fontWeight: "700"
  },
  subtitleText: {
    color: white,
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  },
  backBtn: {
    color: white,
    padding: 10,
    fontWeight: '700'
  },
})

export default DeckDetail;