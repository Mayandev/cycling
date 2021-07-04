import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';

import StartIcon from '/assets/flag-start.svg';
import EndIcon from '/assets/flag-end.svg';
import CurrentIcon from '/assets/current-location.svg';

import { MAPBOX_TOKEN, CITIES } from '../../common/const';
import usePositions from '../../hooks/usePositions';
import './index.scss';

const RoadMap = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 500,
    latitude: 31.150826,
    longitude: 121.389456,
    zoom: 8,
    pitch: 50,
  });
  const { positions } = usePositions();

  const currentPostion = positions[positions.length - 1];

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
