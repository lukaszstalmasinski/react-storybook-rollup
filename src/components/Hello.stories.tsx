import { Story } from "@storybook/react";
import Hello, { HelloProps } from "./Hello";

export default {
  title: "Hello",
  component: Hello,
};

const Template: Story<HelloProps> = (args) => <Hello {...args} />;

export const HelloJohn = Template.bind({});
HelloJohn.args = { name: "John" };
