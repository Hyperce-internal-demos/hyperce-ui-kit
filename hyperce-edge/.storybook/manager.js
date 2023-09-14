// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import HyperceTheme from './HyperceTheme';

addons.setConfig({
  theme: HyperceTheme,
});
