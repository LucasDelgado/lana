import React from 'react';
import Card from '../../components/atoms/Card';


export default {
    title: "LANA/Átomos/Tarjeta",
    component: Card,
    argTypes: {
        type: {
            control: {
                type: "inline-radio",
                options: ["Classic", "Premium", "Black"]
            },
        },
    },
}


const Template = (args) => <Card {...args} />

export const Classic = Template.bind({}); 
Classic.args = {
    type: "Classic",
    cardNumber: "111111-22222222-33",
}

export const Premium = Template.bind({});
Premium.args = {
    type: "Premium",
}

export const Black = Template.bind({});
Black.args = {
    type: "Black",
    cardNumber: "111111-22222222-33",
}