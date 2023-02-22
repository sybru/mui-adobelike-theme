import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioGroup, Radio, FormControlLabel } from '@mui/material'
import { Paper } from '@mui/material'

export default {
    title: 'AdobeMuiTheme/RadioButton',
    component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
    <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
        <RadioGroup>
            <FormControlLabel value="24fps" control={<Radio />} label="Change framerate to 24" />
            <FormControlLabel value="30fps" control={<Radio />} label="Change framerate to 30" />
        </RadioGroup>
    </Paper>
    
)

export const AdobeRadioButton = Template.bind({});
AdobeRadioButton.args = {
    
}