import { useStaticQuery, graphql } from 'gatsby';

const usePositions = () => {
  const { allPositionJson } = useStaticQuery(
    graphql`
      query AllPosition {
        allPositionJson {
          nodes {
            id
            latitude
            longitude
            address
            time
          }
        }
      }
    `
  );

  const positions = allPositionJson.nodes;
  return {
    positions,
  };
};

export default usePositions;
