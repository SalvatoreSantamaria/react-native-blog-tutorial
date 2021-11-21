import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <View>
      <Text style={styles.input}>Enter Title:</Text>
      <TextInput style={styles.label} value={title} onChangeText={(text) => setTitle(text)}/>
      <Text style={styles.input}>Enter Content:</Text>
      <TextInput style={styles.label} value={content} onChangeText={(text) => setContent(text)}/>
      <Button title="Add Blog Post" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20, 
    marginBottom: 5,
    marginLeft: 5,
  }

});

export default CreateScreen;