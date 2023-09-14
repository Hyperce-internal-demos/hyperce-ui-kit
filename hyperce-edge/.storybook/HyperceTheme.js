// .storybook/YourTheme.js

import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  brandTitle: 'Hyperce Edge',
  brandUrl: 'https://hyperce.io',
  brandImage: '../src/assets/hyperce-edge-final.png',
  brandTarget: "_self",

  //colors
  colorPrimary: '#357D8A',
  colorSecondary: '#357D8A',

  // Text colors
  textColor: '#c8d1de',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#f0f4f5',
  barSelectedColor: '#F8E300',
  barBg: '#34363b',
});
