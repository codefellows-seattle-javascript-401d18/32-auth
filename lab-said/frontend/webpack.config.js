{
  "name": "36-d18",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "build": "webpack",
    "watch": "webpack-dev-server --inline --hot",
    "test": "jest",
    "test:watch": "jest --watchAll"
  },
  "jest": {
    "globals": {
      "__DEBUG__": false,
      "process.env": {
        "NODE_ENV": "testing"
      }
    },
    "verbose": true,
    "collectCoverage": true,
    "coverageDirectory": "./coverage"
  },
  "keywords": [],
  "author": "Code Fellows, LLC",
  "license": "MIT",
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.16",
    "css-loader": "^0.28.7",
    "dotenv": "^4.0.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^0.11.2",
    "html-webpack-plugin": "^2.30.1",
    "node-sass": "^4.5.3",
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "react-redux": "^5.0.6",
    "react-router-dom": "^4.2.2",
    "react-test-renderer": "^15.6.1",
    "redux": "^3.7.2",
    "sass-loader": "^6.0.6",
    "superagent": "^3.6.0",
    "uglifyjs-webpack-plugin": "^0.4.6",
    "url-loader": "^0.5.9",
    "webpack": "^3.5.6",
    "webpack-dev-server": "^2.8.2"
  }
}
