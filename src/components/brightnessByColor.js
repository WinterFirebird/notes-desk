/**
 * Calculate brightness value by RGB or HEX color.
 * @param colour (String) The color value in RGB or HEX (for example: #000000 || #000 || rgb(0,0,0) || rgba(0,0,0,0))
 * @returns (Number) The brightness value (dark) 0 ... 255 (light)
 */
const brightnessByColor = (colour) => {
  let color = '' + colour; 
  let isHEX = colour.indexOf('#') === 0; 
  let isRGB = colour.indexOf('rgb') === 0;

  const hasFullSpec = color.length === 7;
  let match = color.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g);
  let r, g, b;

  if (isHEX) {
    if (match) {
      r = parseInt(match[0] + (hasFullSpec ? '' : match[0]), 16); g = parseInt(match[1] + (hasFullSpec ? '' : match[1]), 16); b = parseInt(match[2] + (hasFullSpec ? '' : match[2]), 16);
    }
  }
    
  if (isRGB) {
    match = color.match(/(\d+){3}/g);
    if (match) {
      r = match[0]; 
      g = match[1]; 
      b = match[2];
    }
  }
  if (typeof r != 'undefined') return ((r*299)+(g*587)+(b*114))/1000;
};

export default brightnessByColor;
