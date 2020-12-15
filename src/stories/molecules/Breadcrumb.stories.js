import React from "react";
import Breadcrumb from "../../components/molecules/Breadcrumb";

export default {
  title: "LANA/Moléculas/Breadcrumb",
  component: Breadcrumb,
  argTypes: {},
};

const Template = (args) => <Breadcrumb {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  href: null,
};

export const ConLink = Template.bind({});
ConLink.args = {
  href: "https://google.com.ar",
  text: "Google",
  markup: "<h1>Google</h1>",
  target: "_blank",
};
