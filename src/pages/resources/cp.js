import React from 'react';
import 'react-notion-x/src/styles.css';
// import { NotionRenderer } from 'react-notion-x'
import { NotionAPI } from 'notion-client';
import ResourcesComponent from './_layout';

const pageId = '2912b03d599581ddbcc5eab82fc79667';
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

const CP = ({ pageData }) => {
  return <ResourcesComponent pageData={pageData} pageLink="/resources/cp" />;
};

export default CP;
