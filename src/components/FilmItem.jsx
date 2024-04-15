import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';

const FilmItem = props => {
  const {item} = props;

  const WIDTH = Dimensions.get('window').width;
  const imgSize = (WIDTH - 48) / 2;
  return (
    <View style={{flex: 1, paddingHorizontal: 12, paddingVertical: 16}}>
      <Image
        source={{uri: item.image}}
        style={{
          width: imgSize,
          height: imgSize,
          resizeMode: 'cover',
        }}
      />
      <Text>{item.title}</Text>
      <Text>{item.author}</Text>
    </View>
  );
};

export default FilmItem;
