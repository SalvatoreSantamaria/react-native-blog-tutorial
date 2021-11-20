import React, { useState } from 'react';

const BlogContext = React.createContext(); //think of this as a direct line pipe to bypass props.

// Context 2:
// children- create a component inside a component and pass that created component as a prop 
// this is called a 'named export' because it's not using `export default`: export const BlogProvider = ({ children}) => {

  export const BlogProvider = ({ children }) => {
    const [blogPosts, setterBlogPosts] = useState([])


    const addBlogPost = () => {
      setterBlogPosts([...blogPosts], { title: `Blog Post #${blogPosts.length + 1}`}) //create a brand new array from scratch, don't change existing 'blogPosts', and use ... to add in current data. Then add the new in the object
    }

    //Context 5: add value prop
    const blogPosts = [
      { title: 'Post 1'},
      { title: 'Post 2'},
    ]
    // pass in object with data and addBlogPost callback function 
    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost}}>{children}</BlogContext.Provider>; // key and value are indentical for addBlogPost, so we could condense to one value like { data: blogPosts, addBlogPost}
  };

  export default BlogContext;