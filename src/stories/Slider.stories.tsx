import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from '@mui/material'
import { Paper } from '@mui/material'
import { FormControl, FormLabel } from '@mui/material'

export default {
    title: 'AdobeMuiTheme/Slider',
    component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
    <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
        <Slider />
        <FormControl>
            <FormLabel>スライダー</FormLabel>
            <Slider />
        </FormControl>
        
    </Paper>
    
)

export const AbobeSlider = Template.bind({});
AbobeSlider.args = {
    
}