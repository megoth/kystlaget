import { HistoryEventForListQuery } from "../../lib/api/history";
import { yearContentStyle, yearListStyle, yearTitleStyle, } from "./styles.css";
import HistoryYearListItem from "./history-year-list-item";
import DateFormat from "../date-format";

interface Props {
  events: Array<HistoryEventForListQuery>;
  year: string;
}

export default function HistoryYearEntry({ events, year, }: Props) {
  return (
    <>
      <h3 className={yearTitleStyle}>
        <DateFormat date={year.toString()} format={"yyyy"}/>
      </h3>
      <div className={yearContentStyle}>
        <ul className={yearListStyle}>
          {events.map((event, index) => (
            <HistoryYearListItem
              event={event}
              key={`event-${event.year}-${index}`}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
