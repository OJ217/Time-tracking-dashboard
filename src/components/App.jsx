import { useState } from "react";
import Profile from "./Profile";
import Activity from "./Activity";
import data from "./data.json";

function App() {
  var [timeframe, timeframeSetter] = useState("weekly");

  function handleClick(clickedButton) {
    timeframeSetter(clickedButton);
  }

  return (
    <div className="main-container">
      <Profile clickHandler={handleClick}></Profile>
      <div className="dashboard-container">
        {data.map((data) => {
          return (
            <Activity
              iconClass={data.iconClass}
              activityName={data.activityName}
              currentData={data.dashboard[timeframe].current}
              previousData={data.dashboard[timeframe].previous}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
