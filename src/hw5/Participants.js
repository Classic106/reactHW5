import React, { useState } from "react";

import Participant from "./Participant";

const Participants = ({ competition_participants }) => {

  const [finder, setFinder] = useState("");
  
  return (
    <div className="catalog">
      <input
        type="text"
        placeholder="Enter participant name or ID..."
        onChange={e => setFinder(e.target.value)}
      />
      <div className="participants">  
        { [...competition_participants].filter(item => {
            if (finder === "") return item;
            if (item.name.includes(finder) ||
              item.id.toString().includes(finder)) return item;
            return false;
          }).map(item => <Participant participant={item} key={item.name} />)
        }
      </div>
    </div>
  );
};

export default Participants;
