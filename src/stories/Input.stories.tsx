import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input, TextField } from '@mui/material'
import { Paper } from '@mui/material'
import '../'

export default {
    title: 'AdobeMuiTheme/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
    <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
        <Input value="input" />
        <TextField variant="outlined" label="テキストフィールド" value="text field" />
        <TextField variant="filled" label="テキストフィールド" value="text field" />
        <TextField variant="standard" label="テキストフィールド" value="text field" />

        <Input value="input" readOnly/>
        <TextField variant="outlined" label="テキストフィールド" value="text field" InputProps={{ readOnly: true }} />
        <TextField variant="filled" label="テキストフィールド" value="text field" InputProps={{ readOnly: true }}/>
        <TextField variant="standard" label="テキストフィールド" value="text field" InputProps={{ readOnly: true }}/>

        <Input value="input" disabled/>
        <TextField variant="outlined" label="テキストフィールド" value="text field" disabled/>
        <TextField variant="filled" label="テキストフィールド" value="text field" disabled/>
        <TextField variant="standard" label="テキストフィールド" value="text field" disabled/>
    </Paper>
    
)

export const AdobeInput = Template.bind({});
AdobeInput.args = {
    
}