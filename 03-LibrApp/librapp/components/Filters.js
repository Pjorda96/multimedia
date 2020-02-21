import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Picker, TextInput,
} from 'react-native';
import {parse} from 'react-native-svg';

const themes = [
  {
    label: 'Buscar por título',
    value: 'title',
  },
  {
    label: 'Buscar por autor',
    value: 'author',
  },
  {
    label: 'Buscar por temática',
    value: 'genre',
  },
  {
    label: 'Buscar por puntuación',
    value: 'punct',
  },
];

export default function Filter({list, filter}) {
  const [ theme, setTheme ] = useState(themes[0].value);
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    const filtered = list.filter(item => (
      (theme === 'title' && item.title === search)
        || (theme === 'author' && item.author === search)
        || (theme === 'genre' && item.genre === search)
        || (theme === 'punct' && item.punct === parseInt(search))
    ));

    filter(filtered);
    console.log(filtered);
  }, [search]);

  function handlePick(itemValue) {
    setTheme(itemValue);
    setSearch('');
  }

  return (
    <SafeAreaView style={styles.filters}>
      <TextInput
        placeholder="Type Here..."
        onChangeText={text => setSearch(text)}
        value={search}
        style={styles.search}
      />
      <Picker
        selectedValue={theme}
        style={{height: 50, width: 200}}
        onValueChange={itemValue => handlePick(itemValue)}
      >
        {themes.map(item => <Picker.Item key={item.value} label={item.label} value={item.value} />)}
      </Picker>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  filters: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  search: {
    height: 40,
    width: '50%',
    borderColor: 'gray',
    borderWidth: .2,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 'auto',
  },
  buttons: {
    borderColor: 'gray',
    borderWidth: .5,
    borderRadius: 5,
    marginHorizontal: 3,
    height: 40,
    width:40,
  },
  buttonsContent: {
    display: 'flex',
    alignSelf: 'center',
    color: 'gray',
  }
});
