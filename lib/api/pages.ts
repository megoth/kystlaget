import client, { getClient } from "../sanity";
import { Asset } from '@sanity/types/src/assets/types';

export async function getAllPagesWithSlug(): Promise<Array<{ slug: string, parentSlug: string | null }>> {
  return await client.fetch(`*[_type == "page"]{ 'slug': slug.current, 'parentSlug': parent.page->slug.current }`);
}

export interface AlbumsComponentQuery extends Omit<Sanity.Schema.AlbumsComponent, "albums"> {
  albums: Array<Sanity.Schema.Album>
}

export interface FileComponentQuery extends Omit<Sanity.Schema.FileComponent, "file"> {
  file: Asset
}

export interface MemberQuery extends Omit<Sanity.Schema.Membership, "association" | "person"> {
  _key: string
  association: Sanity.Schema.Association
  person: Sanity.Schema.Person
}

export interface GroupQuery extends Omit<Sanity.Schema.Group, "members"> {
  members: Array<MemberQuery>;
}

export interface GroupComponentQuery extends Omit<Sanity.Schema.GroupComponent, "group"> {
  group: GroupQuery
}

export type ComponentQuery =
  AlbumsComponentQuery
  | Sanity.Schema.ButtonComponent
  | Sanity.Schema.ButtonsComponent
  | Sanity.Schema.DataComponent
  | FileComponentQuery
  | GroupComponentQuery
  | Sanity.Schema.ImageComponent
  | Sanity.Schema.SubpagesComponent
  | Sanity.Schema.TextComponent;

export interface PageQuery extends Omit<Sanity.Schema.Page, "slug" | "components"> {
  slug: string;
  components: Array<ComponentQuery>;
}

export async function getPage(
  slug: string | string[] | undefined,
  preview: boolean
): Promise<PageQuery> {
  /**
   * TODO: Find a way to not having to list all possible properties we want to get for page components
   * For now we have to update this every time we change properties we want to use for page components
   */
  return getClient(preview)
    .fetch(`*[ _type == "page" && slug.current == $slug ]{
      name,
      title,
      'slug': slug.current,
      description,
      'components': components[]{
        _type,
        name,
        photo,
        sortReverse,
        text,
        type,
        'file': file.asset->,
        'group': group->{
          _id,
          _createdAt,
          _rev,
          _updatedAt,
          _type,
          name,
          description,
          'members': members[]{
            _type,
            'association': association->,
            'person': person->,
            note,
          },
        },
        'albums': albums[]->
      },
    }`,
      { slug }
    )
    .then((res) => res?.[0] || null);
}

export interface SubpageQuery {
  title: string;
  order: number;
  date: string;
  slug: string;
}

export async function getSubpages(
  slug: string | string[] | undefined,
  preview: boolean
): Promise<SubpageQuery> {
  return getClient(preview)
    .fetch(
      `*[ _type == "page" && parent.page->slug.current == $slug ]{
      title,
      'slug': slug.current,
      'order': parent.orderNo,
      'date': parent.date,
    }`,
      { slug }
    );
}
