import React from "react";
import Button from "../../components/molecules/Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "LANA/Moléculas/Botón",
  component: Button,
  argTypes: {
    mod: {
      control: {
        type: "select",
        options: ["--primary", "--secondary", "--tertiary", "--special"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["--compact", "--medium"],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primario = Template.bind({});
Primario.args = {
  label: "Button",
  mod: "--primary",
  size: "--compact",
  disabled: false,
  icon: null,
  iconSize: null,
};

export const PrimarioConIcono = Template.bind({});
PrimarioConIcono.args = {
  label: "Button",
  icon: "search",
  mod: "--primary",
  size: "--compact",
  disabled: false,
  iconSize: "3xs",
  isFirstPositioned: true,
};

export const Secundario = Template.bind({});
Secundario.args = {
  label: "Button",
  mod: "--secondary",
  size: "--compact",
  disabled: false,
  icon: null,
  iconSize: null,
};

export const Terciario = Template.bind({});
Terciario.args = {
  label: "Button",
  mod: "--tertiary",
  size: "--compact",
  disabled: false,
  icon: null,
  iconSize: null,
};

export const Especial = Template.bind({});
Especial.args = {
  label: "Button",
  mod: "--special",
  size: "--compact",
  disabled: false,
  icon: null,
  iconSize: null,
};

export const Link = Template.bind({});
Link.args = {
  tag: "a",
  href: "https://google.com",
  target: "_blank",
  label: "Button",
  mod: "--tertiary",
  size: "--compact",
  disabled: false,
  icon: null,
  iconSize: null,
};

export const Deshabilitado = Template.bind({});
Deshabilitado.args = {
  label: "Button",
  mod: "--primary",
  size: "--medium",
  disabled: true,
  icon: null,
  iconSize: null,
};
