import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({navigation}) => {
  console.log(navigation.getParam('id'))
  const { state } = useContext(Context) //state comes from the value property in createDataContext which passes in 'state' as a property
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;