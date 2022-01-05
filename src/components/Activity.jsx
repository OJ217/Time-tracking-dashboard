const classNames = require("classnames");

function Activity(props) {
  return (
    <div className={classNames("activity-card-container", props.iconClass)}>
      <div className="activity-container">
        <div className="activity-description">
          <h1>{props.activityName}</h1>
          <div>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="activity-data">
          <h1>{props.currentData}hrs</h1>
          <p>Last Week - {props.previousData}hrs</p>
        </div>
      </div>
    </div>
  );
}

export default Activity;
