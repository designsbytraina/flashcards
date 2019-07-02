import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { saveDeckTitle } from '../utils/helpers';
import { coral, rust, dkTeal, teal, ltTeal, white } from '../utils/colors';
import { SubmitBtn } from './SubmitBtn';


class NewDeck extends React.Component {
  state = {
    title: ''
  }

  submit = () => {
    const title = this.state.title;
    if (title === '') {
      alert('Please enter a new deck title.');
      return
    }
    // add to asyncstorage
    saveDeckTitle(title);
    // navigate to new detail page for deck passing newly created id
    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({
          routeName: 'Details',
          params: {id: title}
        }),
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.backBtn}>
          CREATE A NEW DECK
        </Text>
        <KeyboardAvoidingView style={styles.center} behavior='padding' enabled>
          <Text style={styles.deckTitleText}>what should we call it?</Text>
          <TextInput
            style={styles.textInput}
            placeholder='title'
            onChangeText={(text)=> this.setState({title: text})}
          />
          <SubmitBtn onPress={this.submit} btnText='CREATE'/>
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
  deckTitleText: {
    color: dkTeal,
    fontSize: 20,
  },
  backBtn: {
    color: dkTeal,
    padding: 10,
    fontWeight: '700'
  },
})

export default NewDeck;