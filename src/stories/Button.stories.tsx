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
        <Button variant="contained" color="adobe-primary">adobe-primary-contained</Button>
        <Button variant="contained" color="adobe-danger">adobe-danger-contained</Button>
        <Button variant="outlined" color="adobe-primary">adobe-primary-outlined</Button>
        <Button variant="outlined" color="adobe-danger">adobe-danger-outlined</Button>
        <Button variant="text" color="adobe-primary">adobe-primary-text</Button>
        <Button variant="text" color="adobe-danger">adobe-danger-text</Button>
        <Button variant="adobe-cta">adobe-cta</Button>
        <Button variant="contained" color="adobe-primary" disabled>adobe-primary-contained</Button>
        <Button variant="contained" color="adobe-danger" disabled>adobe-danger-contained</Button>
        <Button variant="outlined" color="adobe-primary" disabled>adobe-primary-outlined</Button>
        <Button variant="outlined" color="adobe-danger" disabled>adobe-danger-outlined</Button>
        <Button variant="text" color="adobe-primary" disabled>adobe-primary-outlined</Button>
        <Button variant="text" color="adobe-danger" disabled>adobe-danger-outlined</Button>
        <Button variant="adobe-cta" disabled>adobe-cta</Button>
    </Paper>
    
)

export const AdobeButton = Template.bind({});
AdobeButton.args = {
    
}