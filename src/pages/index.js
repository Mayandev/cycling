import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import RoadMap from '../components/road-map';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <RoadMap />
  </Layout>
);

export default IndexPage;
