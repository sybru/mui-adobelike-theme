import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormGroup, FormControl, FormLabel, InputLabel, Select, MenuItem } from '@mui/material'
import { Paper } from '@mui/material'
import '..'

export default {
    title: 'AdobeMuiTheme/FormControl',
    component: FormControl,
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = (args) => (
    <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
        <FormControl disabled>
            <FormGroup>
                <FormLabel filled={false}>ラベル</FormLabel>
                <Select variant="standard" sx={{ width: "100%" }}>
                    <MenuItem value={"item-1"}>Item 1</MenuItem>
                    <MenuItem value={"item-2"}>Item 2</MenuItem>
                    <MenuItem value={"item-3"}>Item 3</MenuItem>
                </Select>
            </FormGroup>
        </FormControl>
        <FormGroup>
            <FormLabel>ラベル</FormLabel>
            <div>
                <Select variant="standard" sx={{ width: "100%" }}>
                    <MenuItem value={"item-1"}>Item 1</MenuItem>
                    <MenuItem value={"item-2"}>Item 2</MenuItem>
                    <MenuItem value={"item-3"}>Item 3</MenuItem>
                </Select>
            </div>
        </FormGroup>
        <FormGroup>
            <FormLabel>ラベル</FormLabel>
            <div>
                <Select variant="standard" sx={{ width: "100%" }}>
                    <MenuItem value={"item-1"}>Item 1</MenuItem>
                    <MenuItem value={"item-2"}>Item 2</MenuItem>
                    <MenuItem value={"item-3"}>Item 3</MenuItem>
                </Select>
            </div>
        </FormGroup>
    </Paper>
    
)

export const AdobeFormControl = Template.bind({});
AdobeFormControl.args = {
    
}