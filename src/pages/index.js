import * as React from 'react';
import Valine from 'gatsby-plugin-valine'; // 导入
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
    <h3>评论</h3>
    <Valine
      appId="HimnBF5dOWB9mpOT6nv7AF5V-gzGzoHsz"
      appKey="yqbsml92HhijF81xs7fHOxII"
    />
  </Layout>
);

export default IndexPage;
