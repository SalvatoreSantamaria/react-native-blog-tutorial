import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

// Navigation 1: Add the screen to the navigator, and import the screen from the ./src/screens... f
const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen
}, {
  initialRouteName: 'Index', 
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

//export default createAppContainer(navigator) //wrap 1. returning JUST this component, but we need to wrap it

const App = createAppContainer(navigator);
//wrap 2.  wrap inside our own custom component
// Context 1 : 
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
};

