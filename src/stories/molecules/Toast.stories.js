import React from "react";
import Toast from "../../components/molecules/Toast";

export default {
  title: "LANA/Moléculas/Toast",
  component: Toast,
  argTypes: {
    status: {
      control: {
        type: "inline-radio",
        options: ["success", "warning", "info", "alert"],
      },
    },
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

const Template = (args) => <Toast {...args} />;

export const Exito = Template.bind({});
Exito.args = {
  title: "Información importante",
  text: "Bajada del error, lorem ipsum",
  status: "success",
};

export const Advertencia = Template.bind({});
Advertencia.args = {
  title: "Información importante",
  text: "Bajada del error, lorem ipsum",
  status: "warning",
};

export const Info = Template.bind({});
Info.args = {
  title: "Información importante",
  text: "Bajada del error, lorem ipsum <strong>bold</strong>",
  status: "info",
  close: true,
  href: "#",
  linkText: "soy un link",
};

export const Alerta = Template.bind({});
Alerta.args = {
  title: "Información importante",
  text: "Bajada del error, lorem ipsum",
  status: "alert",
  close: true,
  callbackListTitle: 'Acceso digital',
  callbackListText: ['Listado desordenado', 'Listado desordenado'],
  description: "En caso de querer vincular la tarjeta a otra cuenta deben pasar 48hs hábiles para volver a tener Acceso Digital.",
  href1: "#",
  href2: "#",
  textButton1: "Botón",
  textButton2: "Botón",
  modButton1: "--primary",
  modButton2: "--secondary",
};
