import React from 'react';

// use context to create global variables and functions
// that can be shared with all components

// create a context object
// will still work if this is empty
// because replaced with values passed into Provider (see App.js)
const MyContext = React.createContext({});

// don't have to do:
// const MyContext = React.createContext({
// 	count: 0,
// 	updateCount: () => {}
// });

export default MyContext;
