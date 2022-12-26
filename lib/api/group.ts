import { getClient } from '../sanity';

export interface GroupQuery extends Sanity.Schema.Group {
  // empty for now, but might add more later
}

export function getAllGroups(preview: boolean): Promise<Array<GroupQuery>> {
  return getClient(preview).fetch(`*[ _type == "group" ] | order(order asc)`);
}
