import React from "react";
import { EventForListQuery } from "../../../lib/api/history";
import DateFormat from "../../date-format";
import Link from "../../link";

interface Props {
  event: EventForListQuery;
}

export default function HistoryYearListItem({ event }: Props) {
  return (
    <li>
      <DateFormat date={event.date} format={"d. MMMM"} postfix={": "} />
      {event.href ? (
        <Link href={event.href}>{event.name}</Link>
      ) : (
        <span>{event.name}</span>
      )}
      {event.sources && (
        <>
          <span> (</span>
          {event.sources.map((source) => (
            <Link key={source.url} href={source.url}>{source.text}</Link>
          ))}
          <span>)</span>
        </>
      )}
    </li>
  );
}
