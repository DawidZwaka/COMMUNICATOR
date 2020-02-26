import { createStore } from 'redux';
import Reducer from './reducers';

const store = createStore(Reducer);

store.dispatch({ type: 'SET_REDIRECT' });

export default store;
