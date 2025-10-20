import React from 'react';
import { NotionAPI } from 'notion-client';
import Head from 'next/head';
import ResourcesComponent from './_layout';
import 'react-notion-x/src/styles.css';

const pageId = '2912b03d599581e0a896dfacd95ec32b';
export async function getServerSideProps() {
  // Fetch Notion page data from the Notion API
  const notion = new NotionAPI();
  const pageData = await notion.getPage(pageId);
  return {
    props: {
      pageData
    }
  };
}

const DevOS = ({ pageData }) => (
  <ResourcesComponent pageData={pageData} pageLink="/resources/dev-os" />
);

export default DevOS;
