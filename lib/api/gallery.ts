import client, { getClient } from "../sanity";

export interface AlbumImageQuery extends Sanity.Schema.Photo {
  _key: string;
}

export async function getAllAlbumsWithSlug(): Promise<Array<{ slug: string }>> {
  return await client.fetch(`*[_type == "album"]{ 'slug': slug.current }`);
}

export async function getAllAlbumsWithSlugAndImages(): Promise<Array<{
  slug: string,
  images: Array<{ _key: string }>
}>> {
  return await client.fetch(`*[_type == "album"]{
    'slug': slug.current,
    'images': images[]
  }`);
}

export interface AlbumWithImagesQuery
  extends Omit<Sanity.Schema.Album, "slug" | "images"> {
  slug: string;
  images: Array<AlbumImageQuery>
}

export async function getAlbumWithImages(
  slug: string | string[] | undefined,
  preview: boolean
): Promise<AlbumWithImagesQuery> {
  return getClient(preview)
    .fetch(
      `*[ _type == "album" && slug.current == $slug ]{
      name,
      'slug': slug.current,
      'images': images[],
    }`,
      { slug }
    )
    .then((res) => res?.[0]);
}
