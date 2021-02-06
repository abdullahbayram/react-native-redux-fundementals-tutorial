import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { print1, print2, print3 } from './exampleAddons/middleware'


const middlewareEnhancer = applyMiddleware(print1, print2, print3)

// Pass enhancer as the second arg, since there's no preloadedState
const store = createStore(rootReducer, middlewareEnhancer)

export default store

// Using redux-devtools-extension is different for React Native
// https://stackoverflow.com/questions/52121683/use-redux-devtools-extension-with-react-native-with-chrome
// This link have two possibilities to use redux-devtools-extension for React Native. I chose to use https://github.com/jhen0409/react-native-debugger.
// You can install and use react-native-debugger easily.
