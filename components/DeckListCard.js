import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getDecks } from '../utils/helpers';
import { coral, rust, dkTeal, teal, ltTeal, white } from '../utils/colors';

class DeckListCard extends React.Component {
  componentDidMount() {
    // TODO: get data from async storage
    // getDecks
  }
  render() {
    return(
      <View style={styles.card}>
        <TouchableOpacity style={styles.touchableCard}>
          <View style={styles.left}>
            <Text style={{color: white, fontWeight:'700', fontSize: 18}}>DECK TITLE</Text>
            <Text style={{color: white, fontWeight:'700', fontSize: 15}}># questions in this deck</Text>
          </View>
          <View style={styles.right}>
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-arrow-dropright-circle' : 'md-arrow-dropright-circle'}
              size={40} style={{color: white}}
            />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    // backgroundColor: 'white'
  },
  titleRow: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    // color: '#00393B',
    // backgroundColor: 'lightblue',
    // textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  titleText: {
    color: dkTeal,
    // justifyContent: 'center'
    fontSize: 50,
    fontWeight: "700"
  },
  subtitleText: {
    color: dkTeal,
    fontSize: 15,
    padding: 10,
    textAlign: 'center'
  },
  createNewCard: {
    flexDirection: 'column',
    flex: 1,
    // alignItems: 'center',
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: coral,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  createNew: {
  },
  topRow: {
  },
  iosSubmitBtn: {
  },
  AndroidSubmitBtn: {
  },
  submitBtnText: {
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
  cardSection: {
    flexDirection: 'column',
    flex: 1,
    // alignItems: 'center',
    // padding: 10,
    // marginTop: 10,
    // marginBottom: 10,
    // backgroundColor: 'red'
  },
  card: {
    flexDirection: 'column',
    color: white,
    flex: 1,
    // alignItems: 'center',
    padding: 10,
    // marginTop: 10,
    // marginBottom: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    backgroundColor: rust
  },
  left: {
    // flex: 2,
    // flexDirection: 'row',
    // flex:1
  },
  right: {
    // flex: 1,
    // flexDirection: 'row'
  }
})

export default DeckListCard;