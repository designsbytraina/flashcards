import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getDecks } from '../utils/helpers';
import { coral, rust, dkTeal, teal, ltTeal, white } from '../utils/colors';

class DeckDetail extends React.Component {
  componentDidMount() {
    // TODO: get data from async storage
    // getDecks
  }
  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.backBtn}>
            <Ionicons
                name={Platform.OS === 'ios' ? 'ios-arrow-dropleft' : 'md-arrow-dropleft'}
                size={15} style={{color: white}}/>
            BACK
          </Text>
        </TouchableOpacity>
        <View style={styles.center}>
          <Text style={styles.titleText}>DECK TITLE</Text>
          <Text style={styles.subtitleText}># questions</Text>
        </View>
        <View style={{}}>
          <TouchableOpacity style={[styles.startQuizBtn, styles.btn]}>
            <View style={styles.left}>
              <Text style={{color: white, fontWeight:'700', fontSize: 20}}>START QUIZ</Text>
            </View>
            <View style={styles.right}>
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-arrow-dropright-circle' : 'md-arrow-dropright-circle'}
                size={40} style={{color: white}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.addQuestionBtn, styles.btn]}>
            <View style={styles.left}>
              <Text style={{color: white, fontWeight:'700', fontSize: 20}}>ADD QUESTION</Text>
            </View>
            <View style={styles.right}>
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-arrow-dropright-circle' : 'md-arrow-dropright-circle'}
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
  startQuizBtn: {
    backgroundColor: 'rgba(0,0,0, .1)',
  },
  addQuestionBtn: {
    backgroundColor: 'rgba(0,0,0, .2)',
  },
  btn: {
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20
  },
  titleText: {
    color: white,
    // justifyContent: 'center'
    fontSize: 40,
    fontWeight: "700"
  },
  subtitleText: {
    color: white,
    fontSize: 25,
    padding: 10,
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

export default DeckDetail;