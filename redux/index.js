import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import AuthReducer from './reducers/AuthReducer';
const root = combineReducers({
  testREducer: () => true,
  Authentication: AuthReducer,
});

const store = createStore(root, applyMiddleware(ReduxThunk));

export default store;
