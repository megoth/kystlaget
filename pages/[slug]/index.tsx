import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { GetStaticProps } from "next";
import { getSiteSettings, SiteSettingsPage } from "../../lib/api/site-settings";
import Loading from "../../components/loading";
import { getAllPagesWithSlug, getPage, getSubpages, PageQuery, SubpageQuery } from '../../lib/api/pages';
import PageComponents from '../../components/page-components';
import { existsSync } from 'fs';
import { join } from 'path';

interface Props extends SiteSettingsPage {
  page: PageQuery,
  subpages: Array<SubpageQuery>,
  parentPage?: PageQuery,
}

export default function CustomPage({ page, subpages, parentPage, siteSettings }: Props) {
  const router = useRouter();
  const crumbs = parentPage ? [
    { href: `/${parentPage.slug}`, text: parentPage.title}
  ] : [];
  return (
    <Layout pageTitle={page.title} siteSettings={siteSettings} crumbs={crumbs}>
      {router.isFallback ? <Loading/> : <PageComponents page={page} subpages={subpages}/>}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
                                                       params,
                                                       preview = false,
                                                     }) => {
  const [page, subpages, siteSettings] = await Promise.all([
    getPage(params.slug, preview),
    getSubpages(params.slug, preview),
    getSiteSettings(preview),
  ]);
  return {
    props: {
      preview,
      page,
      subpages,
      siteSettings,
    },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  const pages = (await getAllPagesWithSlug())
    .filter(({ parentSlug }) => !parentSlug)
    .filter(({ slug }) => !existsSync(join(process.cwd(), "pages", slug, "index.tsx")));
  return {
    paths:
      pages?.map(({ slug }) => ({
        params: {
          slug,
        },
      })) || [],
    fallback: false,
  };
}
