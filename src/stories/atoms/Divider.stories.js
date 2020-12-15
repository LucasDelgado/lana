import React from "react";
import Divider from "../../components/atoms/Divider";

export default {
  title: "Lana/Átomos/Divisor",
  component: Divider,
  argTypes: {
    color: {
      control: "color",
    },
    width: {
      control: {
        type: "range",
        min: 1,
        max: 100,
        step: 1,
      },
    },
  },
};

const Template = (args) => <Divider {...args} />;

export const Tradicional = Template.bind({});
Tradicional.args = {
  color: "#CCCCCC",
  width: "100",
};
