import { GetLocalStorage } from '../helpers/helpers.js';

const InitialState = {
  competitions: GetLocalStorage('competitions'),
};
  
const reducer = function (state = InitialState, action){
  
    switch (action.type) {
        case "ADD_COMPETITION": {
          return { ...state, competitions: [...state.competitions, action.payload]};
        }
        case "SET_WINNER_COMPETITION": {
          const newCompetitions = [...state.competitions];

          for(let key in newCompetitions){
            if(newCompetitions[key].id === action.payload.id){
              newCompetitions[key].winner = action.payload.winner;
              newCompetitions[key].status = 'finished';
            }
          }
          
          return { ...state, competitions: newCompetitions}
        }
        default:
          return state;
    }
  };
  
export default reducer;