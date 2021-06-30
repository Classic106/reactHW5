import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';

import Participant from './Participant';
import Participants from './Participants';
import Registration from './Registration';
import TotalParticipant from './TotalParticipant';

const CompetitionDescribe = ()=>{

    const history = useHistory();
    const { competitionId } = useParams();
    const { participants } = useSelector(store => store.participants);
    const { competitions } = useSelector(store => store.competitions);

    const competition = competitions.filter(c => c.id === competitionId)[0];    
    const competition_participants = competitionId ?
        participants.filter(p => p.competitionId === competitionId) :
            [...participants];

    useEffect(()=>{
        if(!competition) {
            history.push('/competiton_notfound');
        }
    }, [competition, history]);
    
    if(!competition) {
        return (<></>);
    }

    return(
    (competition.status === 'active') ?
        <div className='competition'>
            <div className='left'>
                <Participants
                    competition_participants={competitionId ? competition_participants : null}
                />
            </div>
            <div className='right'>
                <Registration competitionId={competitionId}/>
                <TotalParticipant competition={competition}/>
            </div> 
        </div> : 
        <div className='winner'>
            <h4>Winner</h4>
            <p>ID: {competition.id}</p>
            <p>Name: {competition.winner.name}</p>
            <p>Surname: {competition.winner.surname}</p>
            <p>Winner time: {competition.winner.time}</p>

            <h4>Participants</h4>
            <div className='participants'>
            {
                competition_participants
                .map(p => <Participant button={false} participant={p} key={p.id}/>)
            }
            </div>
        </div>
    );
}

export default CompetitionDescribe;