import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({navigation}) => {
  console.log(navigation.getParam('id'))
  const { state } = useContext(Context) //state comes from the value property in createDataContext which passes in 'state' as a property
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))
  console.log('this is blogPost ', blogPost)
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id')})}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({});

export default ShowScreen;