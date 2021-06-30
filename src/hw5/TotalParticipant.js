import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { TimeToDigit } from "./helpers/helpers.js";

const TotalParticipant = ({ competition })=>{

    const participants = useSelector(store => store.participants.participants);
    const dispatch = useDispatch();
    const competition_participants =
        participants.filter(p => p.competitionId === competition.id);
        
    const HandelShow = ()=>{
        const winner = competition_participants.reduce((acc, curItem)=>{
            const time = TimeToDigit(curItem.time);
            return (TimeToDigit(acc.time) < time) ? acc : curItem; 
          }, competition_participants[0]);

        if(!winner || winner.length === 0){
            alert('Have no one participants!!!')
            return;
        }
        dispatch(Winner({
            id: competition.id,
            winner,
        }));
    }

    const Winner = (winner) =>{
        return {
            type: 'SET_WINNER_COMPETITION',
            payload: winner,
        }
    }
    
    return(
        <div className='totalParticipant'>
            <p>Total Participant: {competition_participants.length}</p>
            <button onClick={HandelShow}>Show winner</button>
        </div>);
}

export default TotalParticipant;