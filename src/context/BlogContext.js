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
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    default: 
      return state;
  }
}

const addBlogPost = (dispatch) => {
  // accept title and content arguments from the component
  return (title, content) => {
    dispatch({type: 'add_blogpost', payload: {title: title, content: content}}); //these can be condensed as just {title, content} because the key value pairs are identical
  }
}

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({type: 'delete_blogpost', payload: id})
  }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost}, [])
