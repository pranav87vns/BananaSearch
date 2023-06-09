import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const SvgComponent = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <Path d="M10.5 1C8.02 1 6 3.02 6 5.5a4.45 4.45 0 0 0 1 2.793L2.023 13.27l.704.71L7.707 9c.77.617 1.734 1 2.793 1 2.48 0 4.5-2.02 4.5-4.5S12.98 1 10.5 1Zm0 1C12.438 2 14 3.563 14 5.5 14 7.438 12.437 9 10.5 9A3.494 3.494 0 0 1 7 5.5C7 3.562 8.563 2 10.5 2Z" />
  </Svg>
);
export default SvgComponent;
