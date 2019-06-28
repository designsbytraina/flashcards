import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getDecks } from '../utils/helpers';
import { coral, rust, dkTeal, teal, ltTeal, white } from '../utils/colors';
import DeckListCard from './DeckListCard';

class DeckList extends React.Component {
  componentDidMount() {
    // TODO: get data from async storage
    // getDecks
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.titleRow}>
          <Text style={styles.titleText}>flashcards</Text>
          <Text style={styles.subtitleText}>a quiz where you make up all the questions then learn something</Text>
        </View>
        <View style={styles.cardSection}>
          <View style={styles.createNewCard}>
           {/* TODO: onPress */}
            <TouchableOpacity style={styles.createNew}>
              <View style={styles.left}>
                <Text style={{color: white, fontWeight:'700', fontSize: 18}}>CREATE NEW DECK</Text>
              </View>
              <View style={styles.right}>
                <Ionicons
                  name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle-outline'}
                  size={40} style={{color: white}}
                />
              </View>
            </TouchableOpacity>
          </View>
        {[1,2,3].map( (k) =>
          <DeckListCard key={k} />
          )}
        </View>
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
    flex: 2,
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

export default DeckList;