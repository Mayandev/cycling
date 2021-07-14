import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, Layer, Source } from 'react-map-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';

import StartIcon from '/assets/flag-start.svg';
import EndIcon from '/assets/flag-end.svg';
import CurrentIcon from '/assets/current-location.svg';

import { MAPBOX_TOKEN, CITIES, MAIN_COLOR } from '../../common/const';
import usePositions from '../../hooks/usePositions';
import useActivities from '../../hooks/useActivities';
import { geoJsonForRide } from '../../common/utils';
import './index.scss';
const SIZE = 20;
const UNIT = 'px';
const RoadMap = () => {
  const { positions } = usePositions();
  const { activities } = useActivities();
  const geoData = geoJsonForRide(activities);
  const currentPostion = positions[positions.length - 1];
  const { latitude = 31.150826, longitude = 121.389456 } = currentPostion;
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 500,
    latitude,
    longitude,
    zoom: 8,
    pitch: 50,
  });
  const addControlHandler = (event) => {
    const map = event && event.target;
    if (map) {
      map.addControl(
        new MapboxLanguage({
          defaultLanguage: 'zh',
        })
      );
      map.setLayoutProperty('country-label-lg', 'text-field', [
        'get',
        'name_zh',
      ]);
    }
  };
  return (
    <ReactMapGL
      {...viewport}
      onLoad={addControlHandler}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Source id="data" type="geojson" data={geoData}>
        <Layer
          id="riddes"
          type="line"
          paint={{
            'line-color': MAIN_COLOR,
            'line-width': 3,
          }}
          layout={{
            'line-join': 'round',
            'line-cap': 'round',
          }}
        />
      </Source>
      <Marker
        latitude={CITIES.start.latitude}
        longitude={CITIES.start.longitude}
      >
        <StartIcon className="flag-icon" />
      </Marker>
      {currentPostion && (
        <Marker
          latitude={Number(currentPostion.latitude)}
          longitude={Number(currentPostion.longitude)}
          styles={{ width: '1px' }}
        >
          <CurrentIcon className="flag-icon" />
        </Marker>
      )}
      <Marker latitude={CITIES.end.latitude} longitude={CITIES.end.longitude}>
        <EndIcon className="flag-icon" />
      </Marker>
    </ReactMapGL>
  );
};

export default RoadMap;
