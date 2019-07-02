import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getDecks } from '../utils/helpers';
import { coral, rust, dkTeal, teal, ltTeal, white } from '../utils/colors';
import { NavigationActions } from 'react-navigation';


class DeckListCard extends React.Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
    this.state = {
      id: '',
      questionCount: 0
    }
  }

  handlePress() {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Details',
      params: {
        id: this.state.id
      }
    });
    this.props.navigation.dispatch(navigateAction);
  }

  componentDidMount() {
    const id = this.props.item.item[0];
    const questionCount = this.props.item.item[1];
    this.setState({id: id, questionCount: questionCount});
  }

  render() {
    return(
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.touchableCard}
          onPress={this.handlePress}>
          <View style={styles.left}>
            <Text style={{color: white, fontWeight:'700', fontSize: 20}}>{this.state.id}</Text>
            <Text style={{color: white, fontWeight:'500', fontSize: 15}}>{this.state.questionCount} questions in this deck</Text>
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
  card: {
    flexDirection: 'column',
    color: white,
    flex: 1,
    // alignItems: 'center',
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    // marginTop: 10,
    // marginBottom: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    backgroundColor: rust
  },
  touchableCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'auto'
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