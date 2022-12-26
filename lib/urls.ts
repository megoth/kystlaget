import { PAGE_SLUGS } from './constants';

export function getIdForGroup(slug: string, year: string, semester: string): string {
  return `${slug}-${year}-${semester}`;
}

export function getUrlForGroup(slug: string, year: string, semester: string): string {
  return `/${PAGE_SLUGS.GROUP}/#${getIdForGroup(slug, year, semester)}`
}
