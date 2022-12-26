import React from "react";
import Layout from "../../components/layout";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import { getPage, PageQuery } from "../../lib/api/pages";
import Groups from '../../components/groups';
import { PAGE_SLUGS } from '../../lib/constants';
import { getAllGroups, GroupQuery } from '../../lib/api/group';

interface Props extends SiteSettingsPage {
  page?: PageQuery;
  groups: Array<GroupQuery>;
}

export default function Page({ siteSettings, page, groups }: Props) {
  return (
    <Layout pageTitle={page?.title} siteSettings={siteSettings}>
      <Groups groups={groups}/>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const [siteSettings, page, groups] = await Promise.all([
    getSiteSettings(preview),
    getPage(PAGE_SLUGS.GROUP, preview),
    getAllGroups(preview),
  ]);
  return {
    props: { siteSettings, page, groups },
    revalidate: 1,
  };
}
