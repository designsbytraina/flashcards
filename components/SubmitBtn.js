import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { coral, rust, dkTeal, teal, ltTeal, white } from '../utils/colors';

export function SubmitBtn ({btnText, onPress}) {
  // { onPress }
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}>
        <Text style={styles.submitBtnText}>{btnText}</Text>
    </TouchableOpacity>
  )
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
    height: 38,
    alignSelf: 'flex-end'
  },
  AndroidSubmitBtn: {
    backgroundColor: dkTeal,
    padding: 10,
    height: 38,
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
  left: {
    // flex: 1,
  },
  right: {
    // flex: 1
  }
})