import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@mui/material'
import { Paper } from '@mui/material'
import '../'

export default {
    title: 'AdobeMuiTheme/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
        <Button variant="adobe-primary-contained">adobe-primary-contained</Button>
        <Button variant="adobe-danger-contained">adobe-danger-contained</Button>
        <Button variant="adobe-primary-outlined">adobe-primary-outlined</Button>
        <Button variant="adobe-danger-outlined">adobe-danger-outlined</Button>
        <Button variant="adobe-cta">adobe-cta</Button>
        <Button variant="adobe-primary-contained" disabled>adobe-primary-contained</Button>
        <Button variant="adobe-danger-contained" disabled>adobe-danger-contained</Button>
        <Button variant="adobe-primary-outlined" disabled>adobe-primary-outlined</Button>
        <Button variant="adobe-danger-outlined" disabled>adobe-danger-outlined</Button>
        <Button variant="adobe-cta" disabled>adobe-cta</Button>
    </Paper>
    
)

export const AdobeButton = Template.bind({});
AdobeButton.args = {
    
}