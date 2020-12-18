import React from "react";
import VincularCredencial from "../../components/pages/VincularCredencial";

export default {
  title: "LANA/Páginas/VincularCredencial",
  component: VincularCredencial,
  argTypes: {
      cardType: {
        control: {
            type: "inline-radio",
            options: ["Classic", "Premium", "Black"],
          },
      },
  },
};

const Template = (args) => <VincularCredencial {...args} />;

export const VincularCredencialClassic = Template.bind({});
VincularCredencialClassic.args = {
    cardType: "Classic",
}

export const VincularCredencialPremium = Template.bind({});
VincularCredencialPremium.args = {
    cardType: "Premium",
}

export const VincularCredencialBlack = Template.bind({});
VincularCredencialBlack.args = {
    cardType: "Black",
}