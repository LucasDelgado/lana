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
  text: "Bajada del error, lorem ipsum",
  status: "info",
};

export const Alerta = Template.bind({});
Alerta.args = {
  title: "Información importante",
  text: "Bajada del error, lorem ipsum",
  status: "alert",
};
