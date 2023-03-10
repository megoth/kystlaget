import React from "react";
import Layout from "../components/layout";
import { getSiteSettings, SiteSettingsPage } from "../lib/api/site-settings";
import { getPage, PageQuery } from "../lib/api/pages";
import PageComponents from "../components/page-components";

interface Props extends SiteSettingsPage {
  page?: PageQuery;
}

export default function Frontpage({ siteSettings, page }: Props) {
  return (
    <Layout siteSettings={siteSettings}>
      <PageComponents page={page} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const [siteSettings, page] = await Promise.all([
    getSiteSettings(preview),
    getPage("index", preview),
  ]);
  return {
    props: { siteSettings, page },
    revalidate: 1,
  };
}
