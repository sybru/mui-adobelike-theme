import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import { Paper } from '@mui/material'
import { AccessAlarm, AccountTreeRounded, AirlineSeatLegroomExtraRounded } from '@mui/icons-material'
import '../theme'

export default {
    title: 'AdobeMuiTheme/ToggleButton',
    component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
    <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
        <ToggleButtonGroup defaultValue="c" sx={{ gap: "10px" }}>
            <ToggleButton value="l">
                <AccessAlarm fontSize='large' />
            </ToggleButton>
            <ToggleButton value="c">
                <AccountTreeRounded />
            </ToggleButton>
            <ToggleButton value="r">
                <AirlineSeatLegroomExtraRounded />
            </ToggleButton>
        </ToggleButtonGroup>
    </Paper>
    
)

export const AdobeToggleButton = Template.bind({});
AdobeToggleButton.args = {
    
}