import React, { useContext } from 'react'; //Context 3: import the useContext hook from react
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext'; //Context 4: import the context function
import { Feather } from '@expo/vector-icons';

// Navigation 2: destructure props.navigation 
const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context) //Context 6: get the value prop and callback with destructuring
  return (
    <View>
      <Text>Index Screen</Text>
      {/* can also pass as onPress={addBlogPost} with no parens! */}
      <Button title='Add Post' onPress={() => addBlogPost()}/>
      {/* Context 7: Output the value prop- will only output if its a string, number, not an object */}
      {/* <Text>Using Context, the value is: {value1}</Text> */}
      <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item}) => {
          return (
            // Navigation 3: call navigation with the navigate prop and pass in an optional object so the thing we navigate to can access
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id})}> 
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}
                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Feather name='trash' style={styles.icon}/>
                  </TouchableOpacity>
                </Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',//show on same line
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10, 
    borderTopWidth: 1, 
    borderColor: 'gray'

  }, 
  title: {
    fontSize: 18
  }, 
  icon: {
    fontSize: 24
  }


});

export default IndexScreen;