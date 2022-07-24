import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarView.css";
import ChevronRight from "../Icons/ChevronRight";
import ChevronLeft from "../Icons/ChevronLeft";

// Format day tile labels
const formatDayTile = (_, date) => {
  return date.getDate().toString().padStart(2, "0");
};

// Format day tile labels
const formatWeekdayTile = (_, weekdayDate) => {
  switch (weekdayDate.getDay()) {
    case 1:
      return "Mo";
    case 2:
      return "Tu";
    case 3:
      return "We";
    case 4:
      return "Th";
    case 5:
      return "Fr";
    case 6:
      return "Sa";
    case 0:
      return "Su";
    default:
      return "__";
  }
};

const CalendarView = (props) => {
  return (
    <Calendar
      minDetail={"year"}
      showNeighboringMonth={true}
      formatDay={formatDayTile}
      formatShortWeekday={formatWeekdayTile}
      nextLabel={
        <div className={"month-change-button"}>
          <ChevronRight />
        </div>
      }
      prevLabel={
        <div className={"month-change-button"}>
          <ChevronLeft />
        </div>
      }
      onClickDay={props.onClickDay}
    />
  );
};

export default CalendarView;
