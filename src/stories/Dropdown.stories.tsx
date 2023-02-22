import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select, MenuItem } from '@mui/material'
import { Paper } from '@mui/material'

export default {
    title: 'AdobeMuiTheme/Dropdown',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
    <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
        <Select { ...args } variant="outlined" value="item-1">
            <MenuItem value={"item-1"}>Item 1</MenuItem>
            <MenuItem value={"item-2"}>Item 2</MenuItem>
            <MenuItem value={"item-3"}>Item 3</MenuItem>
        </Select>
        <Select { ...args } variant="standard" value="item-2">
            <MenuItem value={"item-1"}>Item 1</MenuItem>
            <MenuItem value={"item-2"}>Item 2</MenuItem>
            <MenuItem value={"item-3"}>Item 3</MenuItem>
        </Select>
        <Select { ...args } variant="filled" value="item-3">
            <MenuItem value={"item-1"}>Item 1</MenuItem>
            <MenuItem value={"item-2"}>Item 2</MenuItem>
            <MenuItem value={"item-3"}>Item 3</MenuItem>
        </Select>
    </Paper>
    
)

export const AdobeDropdown = Template.bind({});
AdobeDropdown.args = {
    
}