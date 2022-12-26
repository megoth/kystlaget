import { getClient } from "../sanity";

export interface EventForListQuery
  extends Omit<Sanity.Schema.Event, "sources"> {
  href: string;
  sources: Array<Sanity.Schema.Source>;
}

export async function getAllEventsForHistoryPage(
  preview: boolean
): Promise<Array<EventForListQuery>> {
  const [events] = await Promise.all([
    getClient(preview)
      .fetch(`*[ _type == "event" ] | order(year asc, date asc){
    name,
    short,
    year,
    date,
    description,
    'sources': sources[]->,
  }`),
  ]);
  return events.map(({ slug, ...data }) => ({ ...data, href: `/history/${slug}` }))
}

export function getYearsFromEvents(events: Array<EventForListQuery>): string[] {
  return events.map(({ year }) => year);
}
