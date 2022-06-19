/*  Imports from Redux:
 applyMiddleware: Applies middleware to the dispatch method of the Redux store
 combineReducers: Merges reducers into one
 createStore: Creates a Redux store that holds the state tree
 Store: The TS Type used for the store, or state tree
 */
import { applyMiddleware, combineReducers, createStore, Store, compose } from 'redux';
/*  Thunk
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
*/
// Import reducers and state type
import { IUserState, userReducer } from '../reducers/userReducer';
import thunk from 'redux-thunk';

// Create an interface for the application state
export interface IAppState {
    userState: IUserState;
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
    userState: userReducer,
});

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, composeEnhancer(applyMiddleware(thunk)));
    return store;
}
