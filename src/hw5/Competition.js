import { Link } from 'react-router-dom';

const Competition = ({ competition })=>{

    return(
    <div className='participant'>
        <div className='competitionInfo'>
            <p>ID: {competition.id}</p>
            <p>Name: {competition.name}</p>
            <p>Status: <span
                className={competition.status === 'active' ? 'active' : 'notActive'}>
                {competition.status}
                </span>
            </p>
            {
                (competition.winner) ?
                    <p>Winner: {competition.winner.name} {competition.winner.surname}</p> :
                <></>
            }
        </div>
        <Link to={`/competition/${competition.id}`}>
            <button>Show</button>
        </Link>
    </div>);
}

export default Competition;

