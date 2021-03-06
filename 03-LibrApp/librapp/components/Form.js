import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Picker, Button,
} from 'react-native';

import { GENRES } from '../const';
import {addBook, putBook} from '../storage/library';

export default function Form(props) {
  const [ title, setTitle ] = useState('');
  const [ author, setAuthor ] = useState('');
  const [ genre, setGenre ] = useState(null);
  const [ pages, setPages ] = useState(null);
  const [ punct, setPunct ] = useState(null);
  const [ error, setError ] = useState(false);

  const { buttonLabel, isEdit, initialBook, callback } = props;

  useEffect(() => {
    if (isEdit && initialBook) {
      setTitle(initialBook.title);
      setAuthor(initialBook.author);
      setGenre(initialBook.genre || null);
      setPages(initialBook.pages ? String(initialBook.pages) : null);
      setPunct(initialBook.punct ? String(initialBook.punct) : null);
    }
  }, []);

  function handleSubmit() {
    if (title && author) {
      const book = {
        ...initialBook,
        title,
        author,
        genre,
        pages: +pages,
        punct: +punct,
      };

      isEdit ? putBook(book) : addBook(book);
      clear();
      callback();
    } else {
      handleError();
    }
  }

  function clear() {
    setTitle('');
    setAuthor('');
    setGenre(null);
    setPages(null);
    setPunct(null);
  }

  function handleError () {
    setError(true);

    setTimeout(() => {
      setError(false);
    }, 4000)
  }

  return (
    <SafeAreaView style={styles.form}>
      <View style={styles.element}>
        <Text>Título:  </Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={val => setTitle(val)}
        />
      </View>
      <View style={styles.element}>
        <Text>Autor:  </Text>
        <TextInput
          style={styles.input}
          value={author}
          onChangeText={val => setAuthor(val)}
        />
      </View>
      <View style={styles.element}>
        <Text>Género:  </Text>
        <Picker
          selectedValue={genre}
          style={{height: 50, width: 200}}
          onValueChange={itemValue =>
            setGenre(itemValue)
          }
        >
          <Picker.Item label='Select' value={null} enabled={false} />
          {GENRES.map(item => (
            <Picker.Item key={item.name} label={item.name} value={item.name} />
          ))}
        </Picker>
      </View>
      <View style={styles.element}>
        <Text>Páginas:  </Text>
        <TextInput
          style={styles.input}
          value={pages}
          keyboardType={'numeric'}
          onChangeText={val => setPages(val)}
        />
      </View>
      <View style={styles.element}>
        <Text>Puntuación:  </Text>
        <TextInput
          style={styles.input}
          value={punct}
          keyboardType={'numeric'}
          onChangeText={val => setPunct(val)}
        />
      </View>

      {error && <Text>Algo ha ido mal</Text>}

      <View>
        <Button
          title={buttonLabel}
          onPress={() => handleSubmit()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    backgroundColor: '#C57C33',
    height: '100%',
  },
  element: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '75%',
    borderColor: 'white',
    borderWidth: .5,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 'auto',
  },
  button: {
    backgroundColor: 'red'
  },
  error: {
    backgroundColor: 'red',

  }
});
