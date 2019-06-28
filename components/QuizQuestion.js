import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getDecks } from '../utils/helpers';
import { coral, rust, dkTeal, teal, ltTeal, white } from '../utils/colors';

class QuizQuestion extends React.Component {
  componentDidMount() {
    // TODO: get data from async storage
    // getDecks
  }
  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.backBtn}>
            DECK TITLE
          </Text>
        </TouchableOpacity>
        <View style={styles.center}>
          <Text style={styles.questionText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?</Text>
        </View>
        <View style={{}}>
          <TouchableOpacity style={[styles.showAnswerBtn, styles.btn]}>
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