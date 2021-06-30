import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import participantsReducer from './participants/reducer';
import competitionsReducer from './competitions/reducer';
import { SetLocalStorage } from './helpers/helpers';

const rootReducer = combineReducers({
  participants: participantsReducer,
  competitions: competitionsReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

store.subscribe(() => {
  const newstore = store.getState();
  const { competitions } = newstore.competitions;
  const { participants } = newstore.participants;

  competitions.length !== 0 ?
    SetLocalStorage('competitions', competitions) :
    SetLocalStorage('competitions');
  participants.length !== 0 ?
    SetLocalStorage('participants', participants) :
    SetLocalStorage('participants');
});

export default store;