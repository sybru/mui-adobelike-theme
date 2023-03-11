import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToggleButtonGroup, ToggleButton, Button } from '@mui/material'
import { Paper } from '@mui/material'
import { AccessAlarm, AccountTreeRounded, AirlineSeatLegroomExtraRounded } from '@mui/icons-material'
import '../'

export default {
    title: 'AdobeMuiTheme/ToggleButton',
    component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => {
    const [enables, setEnables] = useState<string[]>(["c"]);
    return (
        <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
            <ToggleButtonGroup value={enables} sx={{ gap: "10px" }} onChange={(event, values) => { setEnables(values); console.log(values); }}>
                <ToggleButton value="l">
                    <AccessAlarm fontSize='large' />
                </ToggleButton>
                <ToggleButton value="c">
                    <AccountTreeRounded />
                </ToggleButton>
                <ToggleButton value="r">
                    <AirlineSeatLegroomExtraRounded />
                </ToggleButton>
                <ToggleButton value="push">
                    Push
                </ToggleButton>
                <ToggleButton value="押して">
                    押して
                </ToggleButton>
            </ToggleButtonGroup>
        </Paper>
    )
}

export const AdobeToggleButton = Template.bind({});
AdobeToggleButton.args = {
    
}