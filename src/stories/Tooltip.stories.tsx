import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Tooltip } from '@mui/material'
import { Paper } from '@mui/material'
import '../'

export default {
    title: 'AdobeMuiTheme/Tooltip',
    component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
    <Paper sx={{ height: "400px", padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
        <Tooltip open title="Primary Button">
            <Button variant="adobe-primary-contained">adobe-primary</Button>
        </Tooltip>
    </Paper>
    
)

export const AdobeTooltip = Template.bind({});
AdobeTooltip.args = {
    
}