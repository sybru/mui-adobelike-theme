import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paper } from '@mui/material'

export default {
    title: 'AdobeMuiTheme/Paper',
    component: Paper,
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

export const AdobeSurface = Template.bind({});
AdobeSurface.args = {
    children: "After Effects",
    sx: {
        padding:    "8px",
        width:      "200px",
        height:     "200px",
        display:    "flex"
    }
}