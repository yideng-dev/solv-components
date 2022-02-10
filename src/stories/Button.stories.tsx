import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  label: 'a类型按钮',
  btnType: 'link',
  href: 'https://app.solv.finance/marketplace?network=mainnet',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  backgroundColor: '#ff0000',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
