import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Button",
    showButtonText: true,
    showCaretup: true,
    type: "hover",
    className: {},
  },
};
