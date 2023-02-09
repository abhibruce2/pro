import React, {useState} from "react";
import DatePicker from "react-datepicker"

const DateDuration = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [duration, setDuration] = useState(0);
  
    const  calculateDuration = () => {
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const diffMinutes = Math.floor(diffTime / (1000 * 60*24));
      setDuration(
        {days:diffDays,
         minutes:diffMinutes
         }
    );
      
    }
  console.log("sk;dflksdjmlfkjsdlk");
    return (
        <><h1>Date Duration</h1>
        <div className="d-flex">
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                showTimeSelect
                 />
            <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                showTimeSelect
                 />

            <button onClick={calculateDuration}>Calculate Duration</button>
            <div>Duration: {duration.days} days, {duration.minutes}Minutes</div>
        </div></>
    );
  }
  export default DateDuration;