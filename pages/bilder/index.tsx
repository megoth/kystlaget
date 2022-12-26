import React from "react";
import Layout from "../../components/layout";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import { getPage, PageQuery } from "../../lib/api/pages";
import { AlbumQuery, getAllAlbums } from "../../lib/api/gallery";
import Albums from '../../components/albums';
import { PAGE_SLUGS } from '../../lib/constants';

interface Props extends SiteSettingsPage {
  albums?: Array<AlbumQuery>;
  page?: PageQuery;
}

export default function AllAlbumsPage({ albums, siteSettings, page }: Props) {
  return (
    <Layout pageTitle={page?.title} siteSettings={siteSettings}>
      <Albums albums={albums} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const [albums, siteSettings, page] = await Promise.all([
    getAllAlbums(preview),
    getSiteSettings(preview),
    getPage(PAGE_SLUGS.GALLERY, preview),
  ]);
  return {
    props: { albums, siteSettings, page },
    revalidate: 1,
  };
}
