import * as React from 'react';
import { Marker } from 'react-map-gl';

function Pin({ city, icon }) {
  return (
    <Marker latitude={CITIES.start.latitude} longitude={CITIES.start.longitude}>
      <StartIcon />
    </Marker>
  );
}

export default React.memo(Pin);
