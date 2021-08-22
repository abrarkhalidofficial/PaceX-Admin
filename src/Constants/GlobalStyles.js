const {Dimensions} = require('react-native');

module.exports = {
  HEIGHT: Dimensions.get('window').height,
  WIDTH: Dimensions.get('window').width,
  SCREEN_PADDING_HORIZONTAL: 20,
  SCREEN_PADDING_TOP: 20,
  SCREEN_PADDING_BOTTOM: 50,
  BORDER_RADIUS: 5,
  HEADING_FONT_SIZE: 25,
  NORMAL_FONT_SIZE: 14,
};
