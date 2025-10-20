import React from 'react';
import ResourcesComponent from './_layout';
import 'react-notion-x/src/styles.css';
import { NotionAPI } from 'notion-client';

const pageId = '2912b03d59958192a652c3b03d84beaf';
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

const ML = ({ pageData }) => {
  return <ResourcesComponent pageData={pageData} pageLink="/resources/ml" />;
};

export default ML;
