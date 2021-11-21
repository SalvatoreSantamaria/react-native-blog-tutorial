// Too complicated to write out explanation, see https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707490#questions 138: More Automatic Context Creation for explanation
// This ^ is what we have to do if we don't use Redux!!

import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case 'add_blogpost': 
      return [
        ...state, 
        {
          id: Math.floor(Math.random() * 99999), 
          title: `Blog Post #${state.length+1}`
        }
      ];
    default: 
      return state;
  }
}

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({type: 'add_blogpost'});
  }
}

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({type: 'delete_blogpost', payload: id})
  }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost}, [])
