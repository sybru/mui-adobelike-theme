import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@mui/material'
import { Paper } from '@mui/material'
import '../theme'

export default {
    title: 'AdobeMuiTheme/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
        <Button variant="adobe-primary-contained">adobe-primary</Button>
        <Button variant="adobe-warning-contained">adobe-warning</Button>
        <Button variant="adobe-primary-outlined">adobe-primary</Button>
        <Button variant="adobe-warning-outlined">adobe-warning</Button>
        <Button variant="adobe-cta">adobe-cta</Button>
        <Button disabled>disabled</Button>
    </Paper>
    
)

export const AdobeButton = Template.bind({});
AdobeButton.args = {
    
}