import { Sidebar } from ".";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {
    type: {
      options: ["collapsed", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "collapsed",
  },
};
