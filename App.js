import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  Index: IndexScreen
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

