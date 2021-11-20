import React, { useReducer } from 'react'; //useReducer 1
// TOO COMPLEX FOR NUMBERED NOTES!
// But, Stephen Grider has an excellect step by step explanation in 136: Updating with UseReducter (at 6:52)
// see https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707480#questions


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost': 
      return [...state, {title: `Blog Post #${state.length+1}`}];
    default: 
      return state;
  }
}

const BlogContext = React.createContext(); //think of this as a direct line pipe to bypass props.

// Context 2:
// children- create a component inside a component and pass that created component as a prop 
// this is called a 'named export' because it's not using `export default`: export const BlogProvider = ({ children}) => {

  export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []) //first arg in useReducers is reducer to use, second is the intitial state object

    const addBlogPost = () => {
      dispatch({type: 'add_blogpost'});
    }

    // pass in object with data and addBlogPost callback function 
    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>; 
  };

  export default BlogContext;