import React, { useContext } from 'react'; //Context 3: import the useContext hook from react
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext'; //Context 4: import the context function


const IndexScreen = () => {
  const value1 = useContext(BlogContext) //Context 6: get the value prop
  return (
    <View>
      <Text>Index Screen</Text>
      {/* Context 7: Output the value prop- will only output if its a string, number, not an object */}
      {/* <Text>Using Context, the value is: {value1}</Text> */}
      <FlatList 
        data={value1}
        keyExtractor={(value1) => value1.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;