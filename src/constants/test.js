import _ from 'lodash';

const count = 5;
export const testData = _.map(_.range(0, count), (value, index) => {
  return {
    name: 'Blonda',
    distance: '1.3 miles',
    image_url: require('../assets/testImage/starbucks_photo.png'),
  };
});
