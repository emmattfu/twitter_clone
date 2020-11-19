import {applyMiddleware, compose, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk'
import { TweetsState } from './ducks/tweets/contracts/state';

export interface RootState {
    tweets: TweetsState
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store


//https://trycode.pw/c/QH4M8.json