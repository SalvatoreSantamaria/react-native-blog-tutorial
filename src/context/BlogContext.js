// Too complicated to write out explanation, see https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707490#questions 137: Automating Context Creation for explanation

import React, { useReducer } from 'react'; //useReducer 1
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost': 
      return [...state, {title: `Blog Post #${state.length+1}`}];
    default: 
      return state;
  }
}

const addBlogPost = () => {
  dispatch({type: 'add_blogpost'});
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost}, [])
