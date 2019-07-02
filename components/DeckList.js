import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, FlatList, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationActions } from 'react-navigation';
import { getDecks, clearLocalNotification, setLocalNotification } from '../utils/helpers';
import { coral, rust, dkTeal, teal, ltTeal, white, ltYellow } from '../utils/colors';
import DeckListCard from './DeckListCard';


const createNewAction = NavigationActions.navigate({
  routeName: 'AddDeck',
  params: {
    screen: 'addDeck'
  }
});

class DeckList extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateNew = this.handleCreateNew.bind(this);
    this.state = {
      decks: []
    }
  }
  componentDidMount() {
    // get data from async storage
    // AsyncStorage.clear();
    getDecks().then((decks) => this.setState({decks: decks}));
    setLocalNotification();
  }

  handleCreateNew() {
    this.props.navigation.dispatch(createNewAction);
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
            <TouchableOpacity style={styles.createNew} onPress={this.handleCreateNew}>
              <Text style={{color: white, fontWeight:'700', fontSize: 20, paddingTop: 5}}>CREATE NEW DECK</Text>
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle-outline'}
                size={40} style={{color: white}}
              />
            </TouchableOpacity>
          </View>
          {this.state.decks !== []
            ? <FlatList
                style={styles.deckList}
                data={this.state.decks}
                renderItem={ (item) => <DeckListCard item={item} navigation={this.props.navigation} /> }
                keyExtractor={(item, index) => item.toString()}
                />
            : null
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ltYellow
  },
  titleRow: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  titleText: {
    color: dkTeal,
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
    padding: 10,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: coral,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  createNew: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'auto'
  },
  topRow: {
  },
  iosSubmitBtn: {
  },
  AndroidSubmitBtn: {
  },
  submitBtnText: {
  },
  deckList: {
    flexDirection: 'column',
    flex: 1,
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
  }
})

export default DeckList;