import React from "react";
import { EventForListQuery, getYearsFromEvents } from "../../lib/api/history";
import HistoryYearEntry from "../history-year-entry";
import Container from "../container";
import { onlyUnique } from "../../lib/utils";
import { listStyle } from "./styles.css";

interface Props {
  events: Array<EventForListQuery>;
}

export default function Events({ events }: Props) {
  const eventYears = [
    ...getYearsFromEvents(events),
  ]
    .filter(onlyUnique)
    .reverse();
  return (
    <Container>
      <ul className={listStyle}>
        {eventYears.map((year) => (
          <li key={`year-${year}`}>
            <HistoryYearEntry
              events={events.filter((event) => event.year === year)}
              year={year}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}
