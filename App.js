import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { getBooks } from './shared/api';

export default function App() {
  const [books, setBooks] = useState();

  useEffect( () => {
    getBooks()
    .then(res => {
      setBooks(res)
      console.log(res[0].title)
    })
  },[])
  function onLoadButton(){
    console.log("letöltés")
    getBooks()
    .then(res => {
      setBooks(res)
      console.log(res[0].title)
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Könyvek</Text>
      <View style={styles.bookList}>
        <FlatList 
          data={books}
          renderItem={ ({item}) => (
            <Text style={styles.title}>{item.title}</Text>
          )}
        />
      </View>
      <Button 
        title="letölt"
        onPress={onLoadButton}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    fontSize: 32,
    color: '#fff',
  },
  title: {
    fontSize: 20,
    padding: 15,
    marginBottom: 15,
    backgroundColor: "yellow",
  },
  bookList: {
    width: '100%',
    backgroundColor: "red",
    marginVertical: 30,
  }
});
