import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { addCardToDeck } from '../utils/helpers';
import { coral, rust, dkTeal, teal, ltTeal, white } from '../utils/colors';
import { SubmitBtn } from './SubmitBtn';


class NewQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
    this.handleChangeAnswer = this.handleChangeAnswer.bind(this);

    this.state = {
    id: '',
    question: '',
    answer: '',
    questions: []
    }
  }

  handleChangeQuestion = (text) => {
    this.setState({question: text});
  }

  handleChangeAnswer = (text) => {
    this.setState({answer: text});
  }

  handleSubmit = () => {
    const { id, question, answer } = this.state;

    if (question === '') {
      alert('Please enter a question.');
      return
    }
    if (answer === '') {
      alert('Please enter an answer.');
      return
    }

    // add to asyncstorage
    addCardToDeck({id, question, answer});

    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({
          routeName: 'Details',
          params: {
            id: id,
            question: question,
            answer: answer
          }
        }),
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  componentDidMount() {
    const id = this.props.id;
    const questions = this.props.questions;
    this.setState({id: id, questions: questions});
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.backBtn}>
          ADD QUESTION
        </Text>
        <KeyboardAvoidingView style={styles.center} behavior='padding' enabled>
          <Text style={styles.questionText}>what is your question?</Text>
          <TextInput
            style={styles.textInput}
            placeholder='question'
            onChangeText={this.handleChangeQuestion}
          />
          <Text style={styles.questionText}>... and the answer?</Text>
          <TextInput
            style={styles.textInput}
            placeholder='answer'
            onChangeText={this.handleChangeAnswer}
          />
          <SubmitBtn onPress={this.handleSubmit} btnText='ADD TO DECK'/>
        </KeyboardAvoidingView>
      </View>
    )
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
    marginLeft: 50,
    marginRight: 50,
  },
  textInput: {
    width: 250,
    height: 40,
    borderColor: dkTeal,
    borderWidth: 1,
    backgroundColor: white,
    padding: 10,
    margin: 10,
    borderRadius: 2,
  },
  iosSubmitBtn: {
    backgroundColor: dkTeal,
    padding: 10,
    borderRadius: 3,
    height: 40,
    alignSelf: 'flex-end'
  },
  AndroidSubmitBtn: {
    backgroundColor: dkTeal,
    padding: 10,
    height: 40,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  submitBtnText: {
    color: white
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
  },
  questionText: {
    color: dkTeal,
    fontSize: 20,
  },
  backBtn: {
    color: dkTeal,
    padding: 10,
    fontWeight: '700'
  },
})

export default NewQuestion;