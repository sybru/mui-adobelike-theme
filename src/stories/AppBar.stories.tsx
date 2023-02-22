import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppBar } from '@mui/material'
import { Paper } from '@mui/material'

export default {
    title: 'AdobeMuiTheme/AppBar',
    component: AppBar,
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => (
    <Paper sx={{ height: "50px", padding: "8px", display: "flex", flexDirection: "column" }}>
        <AppBar position="static">AIUEO</AppBar>
    </Paper>
    
)

export const AdobeAppBar = Template.bind({});
AdobeAppBar.args = {
    
}