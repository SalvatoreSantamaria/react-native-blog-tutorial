import React, { useContext } from 'react'; //Context 3: import the useContext hook from react
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext'; //Context 4: import the context function


const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext) //Context 6: get the value prop and callback with destructuring
  return (
    <View>
      <Text>Index Screen</Text>
      {/* can also pass as onPress={addBlogPost} with no parens! */}
      <Button title='Add Post' onPress={() => addBlogPost()}/>
      {/* Context 7: Output the value prop- will only output if its a string, number, not an object */}
      {/* <Text>Using Context, the value is: {value1}</Text> */}
      <FlatList 
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;