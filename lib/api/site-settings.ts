import { getClient } from "../sanity";

export interface SiteSettingsPage {
  siteSettings?: SiteSettingsQuery;
}

export interface LinkQuery {
  text?: string;
  slug?: string;
  url?: string;
}

export interface SiteSettingsQuery
  extends Omit<Sanity.Schema.SiteSettings, "mainNav" | "subNav"> {
  mainNavItems: Array<LinkQuery>;
}

export async function getSiteSettings(
  preview: boolean
): Promise<SiteSettingsQuery | null> {
  return await getClient(preview)
    .fetch(
      `*[ _type == "siteSettings" ]{
    title,
    description,
    "mainNavItems": mainNav.items[]{
      text,
      "slug": navigationItemUrl.internalLink -> slug.current,
      "url": navigationItemUrl.externalUrl
    },
    footer
  }`
    )
    .then((results) => results[0] || null);
}
