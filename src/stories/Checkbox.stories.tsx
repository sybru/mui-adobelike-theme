import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '@mui/material'
import { Paper, FormGroup, FormControl, FormLabel } from '@mui/material'

export default {
    title: 'AdobeMuiTheme/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
        <Checkbox />
        <Checkbox disabled />
        <Checkbox checked disabled />
        <FormGroup row>
            <FormLabel>Checkbox</FormLabel>
            <Checkbox />
        </FormGroup>
        
    </Paper>
    
)

export const AdobeCheckbox = Template.bind({});
AdobeCheckbox.args = {
    
}