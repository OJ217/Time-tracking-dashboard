import jeremey from "./image/image-jeremy.png";
import { useState } from "react";

function Profile(props) {
  var [dailyButton, dailyButtonSetter] = useState(false);
  var [weeklyButton, weeklyButtonSetter] = useState(true);
  var [monthlyButton, monthlyButtonSetter] = useState(false);

  return (
    <div className="profile-container">
      <div className="top-container">
        <img src={jeremey} alt="jeremey-profile" />
        <h1>
          <span>Report for</span>
          <br />
          Jeremy Robson
        </h1>
      </div>
      <div className="bottom-container">
        <form>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.clickHandler("daily");
              dailyButtonSetter(true);
              weeklyButtonSetter(false);
              monthlyButtonSetter(false);
            }}
            className={dailyButton ? "active" : "not-active"}
          >
            Daily
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.clickHandler("weekly");
              weeklyButtonSetter(true);
              dailyButtonSetter(false);
              monthlyButtonSetter(false);
            }}
            className={weeklyButton ? "active" : "not-active"}
          >
            Weekly
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.clickHandler("monthly");
              monthlyButtonSetter(true);
              dailyButtonSetter(false);
              weeklyButtonSetter(false);
            }}
            className={monthlyButton ? "active" : "not-active"}
          >
            Monthly
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
