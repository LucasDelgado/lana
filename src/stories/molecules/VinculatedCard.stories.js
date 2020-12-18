import React from 'react';
import VinculatedCard from '../../components/molecules/VinculatedCard';


export default {
    title: "LANA/Moléculas/TarjetaVinculada",
    component: VinculatedCard,
    argTypes: {
        type: {
            control: {
                type: "inline-radio",
                options: ["Classic", "Premium", "Black"]
            },
        },
    },
}


const Template = (args) => <VinculatedCard {...args} />

export const Classic = Template.bind({}); 
Classic.args = {
    type: "Classic",
    cardNumber: "111111-22222222-33",
    href1: "#",
    href2: "#",
    linkText1: "Desvincular",
    linkText2: "Activar <strong>Acceso Digital</strong> sin cargo",
}

export const Premium = Template.bind({});
Premium.args = {
    type: "Premium",
    cardNumber: "111111-22222222-33",
    href1: "#",
    href2: "#",
    linkText1: "Desvincular",
    linkText2: "Activar <strong>Acceso Digital</strong> sin cargo",
}

export const Black = Template.bind({});
Black.args = {
    type: "Black",
    cardNumber: "111111-22222222-33",
    href1: "#",
    href2: "#",
    linkText1: "Desvincular",
    linkText2: "Activar <strong>Acceso Digital</strong> sin cargo",
}