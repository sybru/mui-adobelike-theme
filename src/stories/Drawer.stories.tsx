import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Drawer } from '@mui/material'
import { Paper } from '@mui/material'

export default {
    title: 'AdobeMuiTheme/Drawer',
    component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => (
    <Paper sx={{ height: "100%", padding: "8px", display: "flex", flexDirection: "column" }}>
        <Drawer anchor="left" open>
            <Button variant="adobe-primary-contained">adobe-primary</Button>
            <Button variant="adobe-danger-contained">adobe-danger</Button>
            <Button variant="adobe-primary-outlined">adobe-primary</Button>
            <Button variant="adobe-danger-outlined">adobe-danger</Button>
            <Button variant="adobe-cta">adobe-cta</Button>
            <Button disabled>disabled</Button>
        </Drawer>
    </Paper>
    
)

export const AdobeDrawer = Template.bind({});
AdobeDrawer.args = {
    
}