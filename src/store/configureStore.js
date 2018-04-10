import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import App from '../reducers/'
import * as getFilter from '../actions/showFilter'

// const argv = require('minimist')(process.argv.slice(2))

const composeEnhancers = 
	typeof window === 'object' && 
	window.__REDUX_DEVTOOLS_EXTENSION__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionCreators: getFilter,
      actionsBlacklist: ['test'],
      features: {
        pause: true, // start/pause recording of dispatched actions
        lock: true, // lock/unlock dispatching actions and side effects    
        persist: true, // persist states on page reloading
        export: true, // export history of actions in a file
        import: 'custom', // import history of actions from a file
        jump: true, // jump back and forth (time travelling)
        skip: true, // skip (cancel) actions
        reorder: true, // drag and drop actions in the history list 
        dispatch: true, // dispatch custom actions or action creators
        test: true // generate tests for the selected actions
      },
		}) : compose;


const enhancers = composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )

const configureStore = preloadedState => createStore(
	App,
	preloadedState,
	enhancers
);
export default configureStore
