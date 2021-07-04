import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import RoadMap from '../components/road-map';
import CurrentPosition from '../components/current-position';
import RoutePlan from '../components/plan';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <RoadMap />
    <CurrentPosition />
    <RoutePlan />
  </Layout>
);

export default IndexPage;
