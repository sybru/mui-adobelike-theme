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
            <Button variant="contained" color="adobe-primary">adobe-primary</Button>
            <Button variant="contained" color="adobe-danger">adobe-danger</Button>
            <Button variant="outlined" color="adobe-primary">adobe-primary</Button>
            <Button variant="outlined" color="adobe-danger">adobe-danger</Button>
            <Button variant="text" color="adobe-primary">adobe-primary</Button>
            <Button variant="text" color="adobe-danger">adobe-danger</Button>
            <Button variant="adobe-cta">adobe-cta</Button>

            <Button variant="contained" color="adobe-primary" disabled>adobe-primary</Button>
            <Button variant="contained" color="adobe-danger" disabled>adobe-danger</Button>
            <Button variant="outlined" color="adobe-primary" disabled>adobe-primary</Button>
            <Button variant="outlined" color="adobe-danger" disabled>adobe-danger</Button>
            <Button variant="text" color="adobe-primary" disabled>adobe-primary</Button>
            <Button variant="text" color="adobe-danger" disabled>adobe-danger</Button>
            <Button variant="adobe-cta" disabled>adobe-cta</Button>
        </Drawer>
    </Paper>
    
)

export const AdobeDrawer = Template.bind({});
AdobeDrawer.args = {
    
}