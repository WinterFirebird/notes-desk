/**
 * Calculate brightness value by RGB or HEX color.
 * @param color (String) The color value in RGB or HEX (for example: #000000 || #000 || rgb(0,0,0) || rgba(0,0,0,0))
 * @returns (Number) The brightness value (dark) 0 ... 255 (light)
 */
const brightnessByColor = (color) => {
  var color = '' + color, isHEX = color.indexOf('#') === 0, isRGB = color.indexOf('rgb') === 0;

  if (isHEX) {
  const hasFullSpec = color.length === 7;
  var m = color.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g);
  if (m) var r = parseInt(m[0] + (hasFullSpec ? '' : m[0]), 16), g = parseInt(m[1] + (hasFullSpec ? '' : m[1]), 16), b = parseInt(m[2] + (hasFullSpec ? '' : m[2]), 16);
  }
    
  if (isRGB) {
  var m = color.match(/(\d+){3}/g);
  if (m) var r = m[0], g = m[1], b = m[2];
  }
  if (typeof r != 'undefined') return ((r*299)+(g*587)+(b*114))/1000;
};

export default brightnessByColor;
