import { Meta } from '@storybook/react';
import Input, { InputPropsRules } from '../../../../components/atoms/Input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as Meta;

const Template = (args: InputPropsRules) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Nama Lengkap',
};
