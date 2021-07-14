const fs = require('fs');
const originPosition = require('./src/static/position.json');

const [latitude, longitude, address, time] = process.argv.slice(2);

console.log(latitude, 'test');

if (latitude) {
  originPosition.push({
    latitude: Number(latitude),
    longitude: Number(longitude),
    address,
    time,
  });
}

fs.writeFileSync(
  './src/static/position.json',
  JSON.stringify(originPosition),
  'utf-8'
);
