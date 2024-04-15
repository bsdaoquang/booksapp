import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FilmItem from '../components/FilmItem';
import {addBooks} from '../redux/reducers/bookReducer';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const api = `https://apis.tridinhne.click/cro102/eGetList.php`;

    setIsLoading(true);
    try {
      const res = await axios(api);

      if (res.status === 200 && res.data) {
        setBooks(res.data);
        // dispatch(addBooks(res.data));
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <View style={[styles.container]}>
      <ActivityIndicator />
      <Text>Loading...</Text>
    </View>
  ) : (
    <View style={{flex: 1}}>
      <FlatList
        data={books}
        numColumns={2}
        renderItem={({item}) => <FilmItem key={item._id} item={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
