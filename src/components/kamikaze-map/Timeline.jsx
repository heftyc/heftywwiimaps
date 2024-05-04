import React, { useState, useEffect } from "react";
import moment from "moment";
import rewindImage from "../../assets/images/rewind.svg";
import fastForwardImage from "../../assets/images/skip.svg";
import playImage from "../../assets/images/play.svg";
import pauseImage from "../../assets/images/pause.svg";
import "./Timeline.css";

/**startDate: js Date for the start of the timeline.
 * maxDateNum: integer - total number of days on the timeline
 */
const Timeline = ({
  startDate,
  currentDateNum,
  setCurrentDateNum,
  maxDateNum,
}) => {
  const [advancing, setAdvancing] = useState(false);
  const [dateNum, setDateNum] = useState(maxDateNum);

  const initialCurrentDate = new Date(startDate);
  initialCurrentDate.setDate(startDate.getDate() + maxDateNum);
  const [currentDate, setCurrentDate] = useState(initialCurrentDate);

  useEffect(() => {
    setDateNum(dateNum);
  }, [currentDateNum]);

  const updateDateNum = (value) => {
    setCurrentDateNum(value);
    setDateNum(value);

    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + value);
    setCurrentDate(newDate);
  };

  const handleFastForward = () => {
    updateDateNum(maxDateNum);
    setAdvancing(false);
  };

  const handleRewind = () => {
    updateDateNum(0);
    setAdvancing(false);
  };

  const handlePlayPause = () => {
    if (!advancing && dateNum == maxDateNum) {
      updateDateNum(0);
      setAdvancing(true);
    } else {
      setAdvancing(!advancing);
    }
  };

  const handleSliderChange = (event) => {
    updateDateNum(parseInt(event.target.value));
  };

  useEffect(() => {
    let intervalId;
    if (advancing && dateNum < maxDateNum) {
      intervalId = setInterval(() => {
        updateDateNum(dateNum + 1);
      }, 200);
    } else {
      setAdvancing(false);
    }

    return () => clearInterval(intervalId);
  }, [advancing, dateNum, maxDateNum]);

  return (
    <div className="timeline">
      <input
        className="timeline-slider"
        type="range"
        min="0"
        max={maxDateNum}
        step="1"
        value={currentDateNum}
        onChange={handleSliderChange}
      ></input>
      <div className="timeline-dates">
        <div className="timeline-from-date">
          <div>{moment(startDate).format("MMMM Do, YYYY")}</div>
        </div>
        <div className="timeline-text-divide">to</div>
        <div className="timeline-to-date">
          <div>{moment(currentDate).format("MMMM Do, YYYY")}</div>
        </div>
      </div>
      <div className="timeline-buttons">
        <button className="timeline-rewind" onClick={handleRewind}>
          <img src={rewindImage} />
        </button>
        <button className="timeline-play-pause" onClick={handlePlayPause}>
          <img src={advancing ? pauseImage : playImage} />
        </button>
        <button className="timeline-fast-forward" onClick={handleFastForward}>
          <img src={fastForwardImage} />
        </button>
      </div>
    </div>
  );
};
export default Timeline;
