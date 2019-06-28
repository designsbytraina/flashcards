import {AsyncStorage} from 'react-native';

/////////////////////////
// - getDecks: return all of the decks along with their titles, questions, and answers.
export function getDecks () {
  //
  return {}
}

_retrieveData1 = async () => {
  try {
    const values = await AsyncStorage.getAllKeys();
    if (values !== null) {
      // We have data!!
      console.log(values);
    }
  } catch (error) {
    // Error retrieving data
  }
};

/////////////////////////
// - getDeck: take in a single id argument and return the deck associated with that id.

_retrieveData2 = async () => {
  try {
    const value = await AsyncStorage.getItem('<DECK TITLE>');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};


////////////////////////////
// - saveDeckTitle: take in a single title argument and add it to the decks.

_storeData = async () => {
  try {
    // figure out how to grab and set in AsyncStorage
    const value = await AsyncStorage.getItem('<DECK TITLE>');

    await AsyncStorage.setItem('questions', [{'question': 'answer'}]);
  } catch (error) {
    // Error saving data
  }
};


// let UID123_object = {
//   name: 'Chris',
//   age: 30,
//   traits: {hair: 'brown', eyes: 'brown'},
// };
// // You only need to define what will be added or updated
// let UID123_delta = {
//   age: 31,
//   traits: {eyes: 'blue', shoe_size: 10},
// };

// AsyncStorage.setItem('UID123', JSON.stringify(UID123_object), () => {
//   AsyncStorage.mergeItem('UID123', JSON.stringify(UID123_delta), () => {
//     AsyncStorage.getItem('UID123', (err, result) => {
//       console.log(result);
//     });
//   });
// });

// Console log result:
// => {'name':'Chris','age':31,'traits':
//    {'shoe_size':10,'hair':'brown','eyes':'blue'}}


///////////////////////////
// - addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.

_storeData = async () => {
  try {
    await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
  } catch (error) {
    // Error saving data
  }
};