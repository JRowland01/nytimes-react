module.exports = {
  
 // This is the entry point or start of the react applicaton
  entry: "./app/App.js",

  // The plain compiled Javascript will be output into this file
  output: {
    filename: "public/bundle.js"
  },

  // This section describes the transformations we will perform
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          // These are the specific transformations that will be used 
          presets: ['react', 'es2015']
        }
      }
    ]
  }

}