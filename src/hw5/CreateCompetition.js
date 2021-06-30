import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const CreateCompetition = ()=>{
    
    const dispatch = useDispatch();
    const history = useHistory();

    const RegisterCompetition = competition =>{
        return{
            type: "ADD_COMPETITION",
            payload: competition,
        }
    };
    
    const HandleSubmit = e =>{
        
        e.preventDefault();

        const { name } = e.target;

        if(name.value.length > 0){

            const competition = {
                id: `${Date.now()}`,
                name: name.value,
                status: 'active',
                winner: null,
            }
            dispatch(RegisterCompetition(competition));
            history.push(`/competition/${competition.id}`);
        }else alert('Fill rigth form!!!');
    };
    
    return(
    <div>
        <form onSubmit={HandleSubmit} className='registeredForm'>
            <h3>Create competition</h3>
            <input
                type='text'
                name='name'
                placeholder='Enter competition name...'
            />
            <button type='submit'>Create</button>
        </form>
    </div>);
}

export default CreateCompetition;