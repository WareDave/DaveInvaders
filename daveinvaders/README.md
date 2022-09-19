# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/

troubleshooting#npm-run-build-fails-to-minify)




1. Create a node project

create a new folder, open it in VSCode and run npm init -y this will initialize a new node project and add the package.json file.

npm init -y

2. Install Babel dependencies

Babel is a compiler that converts your modern JavaScript to run in older browsers. Mainly in React we use jsx syntax which is not supported by older browser and we will need Babel to convert it |

Run the following command to install Babel dependencies (note that we install them as dev dependencies)

npm install --save-dev @babel/core babel-loader @babel/cli @babel/preset-env @babel/preset-react


3. Install Webpack dependencies
Webpack is a static module bundler for modern JavaScript applications. it takes different files and bundles them into a single JavaScript file. When building React apps you will end up with many files with different formats and you will need them bundled in a single JavaScript file that will be severed along our index.html to make our app run | 

Run the following command to install Webpack dependencies (note that we install them as dev dependencies)

npm install --save-dev webpack webpack-cli webpack-dev-server


4. Install HtmlWebpackPlugin
The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. as mentioned above when Webpack bundles all our files, it generate a single JavaScript (know as bundle) that will be served along our html file. HtmlWebpackPlugin handles creation these html files. you can

run the following command to install HtmlWebpackPlugin


npm install --save-dev html-webpack-plugin


5. Install React dependencies
React is a JavaScript library for creating user interfaces.
The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web. an these are the main dependencies that allows as to actually use React

Run the follow command (note that we install them as main dependencies not dev)

npm install react react-dom 


6. Add React files
create a public folder and create an index.html file and add the following code

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
</head>
<body>
    <div id="root"></div>
</body>
</html> -->


this will be the html file for our app and our whole application will live in that div with id root

create a src folder and create an App.js file and add the following code

<!-- import React from "react";

const App = () =>{
    return (
        <h1>
            Hello world! I am using React
        </h1>
    )
}

export default App -->


we just created our react component note that the name is capitalized as it is a react component

back in the root folder create an index.js which will be the entry of our app. add the following code

<!-- import React from 'react'
import  { createRoot }  from 'react-dom/client';
import App from './src/App.js'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>); -->

7. configure Babel

create a file named .babelrc and add the following code

<!-- {
    "presets": ["@babel/preset-env","@babel/preset-react"]
} -->


<!-- const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  target: 'web',
  devServer: {
    port: '5000',
    static: {
      directory: path.join(__dirname, 'public')
},
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader', 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ]
}; -->



There is some issue in npm install which is not able to complete the installation of react scripts. Follow these simple steps to get it worked.


Run npm install
Run npm i -S react-scripts
Run npm start