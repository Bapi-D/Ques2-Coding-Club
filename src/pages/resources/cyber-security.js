import React from 'react';
import 'react-notion-x/src/styles.css';
import ResourcesComponent from './_layout';
import { NotionAPI } from 'notion-client';

const pageId = '2912b03d599581e9b852fa601b4aadd9';
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

const CyberSecurity = ({ pageData }) => (
  <ResourcesComponent pageData={pageData} pageLink="/resources/cyber-security" />
);

export default CyberSecurity;
