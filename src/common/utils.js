import * as mapboxPolyline from '@mapbox/polyline';

const geoJsonForRide = (rides) => ({
  type: 'FeatureCollection',
  features: rides.map((ride) => {
    const points = pathForRide(ride);
    if (!points) {
      return null;
    }

    return {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: points,
      },
    };
  }),
});

const pathForRide = (ride) => {
  try {
    const c = mapboxPolyline.decode(ride.summary_polyline);
    // reverse lat long for mapbox
    c.forEach((arr) => {
      [arr[0], arr[1]] = [arr[1], arr[0]];
    });
    return c;
  } catch (err) {
    return [];
  }
};

export { pathForRide, geoJsonForRide };
