import React from 'react';

const BlogContext = React.createContext(); //think of this as a direct line pipe to bypass props.

// Context 2:
// children- create a component inside a component and pass that created component as a prop 
// this is called a 'named export' because it's not using `export default`: export const BlogProvider = ({ children}) => {

  export const BlogProvider = ({ children }) => {
    return <BlogContext.Provider>{children}</BlogContext.Provider>;
  };