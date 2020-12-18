import React from "react";
import CallbackList from "../../components/molecules/CallbackList";

export default {
  title: "LANA/Moléculas/CallbackList",
  component: CallbackList,
  argTypes: {
    modButton1: {
      control: {
        type: "inline-radio",
        options: ["--primary", "--secondary", "--tertiary", "--special"],
      },
    },
    modButton2: {
        control: {
            type: "inline-radio",
            options: ["--primary", "--secondary", "--tertiary", "--special"],
        },
    },
  },
};

const Template = (args) => <CallbackList {...args} />;

export const Tradicional = Template.bind({});
Tradicional.args = {
  title: "Información importante",
  listText: ["Acceso ilimitado a LA NACION", "Acceso a Edición impresa en PDF"],
  description: "En caso de querer vincular la tarjeta a otra cuenta deben pasar 48hs hábiles para volver a tener Acceso Digital",
  href1: "#",
  href2: "#",
  textButton1: "Desvincular",
  textButton2: "Mantener beneficios",
  modButton1: "--primary",
  modButton2: "--secondary",
};