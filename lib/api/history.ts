import { getClient } from "../sanity";
import { PAGE_SLUGS } from '../constants';
import { AlbumImageQuery } from './gallery';

export interface EventForListQuery
  extends Omit<Sanity.Schema.Event, "sources"> {
  href?: string
  year: string
  sources?: Array<Sanity.Schema.Source>
  images?: Array<AlbumImageQuery>
}

export async function getAllEventsForHistoryPage(
  preview: boolean
): Promise<Array<EventForListQuery>> {
  const [events, albums, pages] = await Promise.all([
    getClient(preview).fetch(`*[ _type == "event" ] | order(date asc){
    _id,
    name,
    date,
    description,
    sources,
  }`),
    getClient(preview).fetch(`*[ _type == "album" && defined(date) ] | order(date asc){
    _id,
    name,
    'slug': slug.current,
    date,
    'images': images[],
  }`),
    getClient(preview).fetch(`*[ _type == "page" && defined(event.date) ] | order(date asc){
    _id,
    name,
    'slug': slug.current,
    'parentSlug': parent.page->slug.current,
    'date': event.date,
  }`),
  ]);
  return [
    ...events.map((event) => ({
      ...event,
      year: event.date.substring(0, 4)
    })),
    ...albums.map((album) => ({
      ...album,
      year: album.date.substring(0, 4),
      href: `/${PAGE_SLUGS.GALLERY}/${album.slug}`
    })),
    ...pages.map((page) => ({
      ...page,
      year: page.date.substring(0, 4),
      href: page.parentSlug ? `/${page.parentSlug}/${page.slug}` : `/${page.slug}`
    }))
  ]
    .sort((a, b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime());
}

export function getYearsFromEvents(events: Array<EventForListQuery>): string[] {
  return events.map(({ year }) => year);
}
