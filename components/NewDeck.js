import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
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
        <View style={styles.center}>
          <Text style={styles.deckTitleText}>what should we call it?</Text>
          <TextInput
            style={styles.textInput}
            placeholder='title'
            onChangeText={(text)=> this.setState({title: text})}
          />
          <SubmitBtn onPress={this.submit} btnText='CREATE'/>
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
    // textAlign: 'left'
    // flexDirection: 'row'
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
    // marginLeft: 40,
    // marginRight: 40,
    alignSelf: 'flex-end'
  },
  AndroidSubmitBtn: {
    backgroundColor: dkTeal,
    padding: 10,
    // paddingLeft: 30,
    // paddingRight: 30,
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
    // backgroundColor: teal
  },
  deckTitleText: {
    color: dkTeal,
    fontSize: 20,
    // textAlign: 'left'
  },
  backBtn: {
    color: dkTeal,
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

export default NewDeck;