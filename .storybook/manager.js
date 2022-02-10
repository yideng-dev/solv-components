import { addons } from '@storybook/addons';
// import { themes } from '@storybook/theming';
import solvTheme from './SolvTheme';
addons.setConfig({
  // theme: themes.dark,
  theme: solvTheme,
});
