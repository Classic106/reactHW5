import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Competition from './Competition';

const Competitions = ()=>{
    const [finder, setFinder] = useState("");
    const [activeCompetitions, setActiveCompetitions] = useState(null);
    const { competitions } = useSelector(store => store.competitions);

    return (
    <div className="competitions">
        <Link to='/create'><button>Create competiton</button></Link>
      <input
        type="text"
        placeholder="Enter competition name..."
        onChange={e => setFinder(e.target.value)}
      />
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}} >
        <p>Status:</p>
        <select onChange={e => setActiveCompetitions(e.target.value)}>
          <option value='null'>Default</option>
          <option value='finished'>Active</option>
          <option value='active'>Finished</option>
        </select>
      </div>
      <div className="participants">  
        {
          [...competitions].filter(item => {
            const search = (item.name.includes(finder));
            if(!search) return false;

            const isActive = (activeCompetitions === item.status);
            if(isActive) return false;

            return true;
          }).map(item => <Competition competition={item} key={item.id} />)
        }
      </div>
    </div>
  );
}

export default Competitions;