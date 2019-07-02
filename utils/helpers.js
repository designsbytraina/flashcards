import { AsyncStorage } from 'react-native';

/////////////////////////
// - getDecks: return all decks as list of lists containing name and question count
export const getDecks = async () => {
  let decks = [];
  try {
    decks = await AsyncStorage.getAllKeys();
  } catch(e) {
    console.log(e);
  }
  console.log('getDecks() called');

  let decksInfo = [];
  await AsyncStorage.multiGet(decks, (err, stores) => {
    stores.map((result, i, store) => {
      let key = store[i][0];
      let value = JSON.parse(store[i][1]).questions.length;
      decksInfo.push([key, value]);
    })
  });

  return decksInfo;
}

/////////////////////////
// - getDeck: take in a single id argument and return the deck associated with that id
export const getDeck = async (id) => {
  let deckResults = {};
  try {
    let deckDetails = await AsyncStorage.getItem(id);
    if (deckDetails !== null) {
      // let key = store[i][0];
      deckResults = JSON.parse(deckDetails);
      // decksInfo.push([key, value]);
      // console.log(typeof JSON.parse(deckDetails));
      // deckDetails = JSON.parse(deckDetails);
    }
  } catch(e) {
    console.log(e);
  }
  console.log(`getDeck(${id}) called`);
  // console.log(deckResults)
  return deckResults;
}

// _retrieveData2 = async () => {
//   try {
//     const value = await AsyncStorage.getItem('<DECK TITLE>');
//     if (value !== null) {
//       // We have data!!
//       console.log(value);
//     }
//   } catch (error) {
//     // Error retrieving data
//   }
// };

// getMyValue = async () => {
//   try {
//     const value = await AsyncStorage.getItem('@MyApp_key')
//   } catch(e) {
//     // read error
//     console.log(e)
//   }
// }


////////////////////////////
// - saveDeckTitle: take in a single title argument and add it to the decks.

export const saveDeckTitle = async (title) => {
  try {
    await AsyncStorage.setItem(title, JSON.stringify({ title: title, questions: [] }));
  } catch(e) {
    console.log('ERROR: Problem saving deck title.');
  }
  console.log(`saveDeckTitle(${title}) called`);
}

// setValue = async () => {
//   try {
//     await AsyncStorage.setItem('@MyApp_key', 'my secret value')
//   } catch(e) {
//     // save error
//   }

//   console.log('Done.')
// }

// _storeData = async () => {
//   try {
//     await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
//   } catch (error) {
//     // Error saving data
//   }
// };



///////////////////////////
// - addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.

export const addCardToDeck = async ({id, question, answer}) => {
  const _question = {
    question: question,
    answer: answer
  }

  try {
    getDeck(id).then( async (deck) => {
      // console.log(deck.questions);
      deck.questions.push(_question);
      await AsyncStorage.setItem(id, JSON.stringify(deck));
      return _question
    } )
    // await AsyncStorage.mergeItem(id, JSON.stringify({}))
  } catch(e) {
    console.log(e)
  }

  console.log(`addCardToDeck({${id}, ${question}, ${answer}}) called`);
}
