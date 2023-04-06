import React from "react";
import Layout from "../../components/layout";
import {
  HistoryEventForListQuery,
  getAllEventsForHistoryPage,
} from "../../lib/api/history";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import { getPage, PageQuery } from "../../lib/api/pages";
import HistoryEvents from '../../components/history-events';
import { PAGE_SLUGS } from '../../lib/constants';

interface Props extends SiteSettingsPage {
  allEvents?: Array<HistoryEventForListQuery>;
  page?: PageQuery;
}

export default function AllPeoplePage({
  allEvents,
  siteSettings,
  page,
}: Props) {
  return (
    <Layout pageTitle={page?.title} siteSettings={siteSettings}>
      <HistoryEvents events={allEvents} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const [allEvents, siteSettings, page] = await Promise.all([
    getAllEventsForHistoryPage(preview),
    getSiteSettings(preview),
    getPage(PAGE_SLUGS.HISTORY, preview),
  ]);
  return {
    props: { allEvents, siteSettings, page },
    revalidate: 1,
  };
}
