import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List, ListItem, ListItemButton } from '@mui/material'
import { Paper } from '@mui/material'
import '../theme'

export default {
    title: 'AdobeMuiTheme/List',
    component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => (
    <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
        <List>
            <ListItemButton>List item 1</ListItemButton>
            <ListItemButton selected>List item 2</ListItemButton>
            <ListItemButton>List item 3</ListItemButton>
            <ListItemButton>List item 4</ListItemButton>
            <ListItemButton selected>List item 5</ListItemButton>
        </List>
    </Paper>
    
)

export const AdobeList = Template.bind({});
AdobeList.args = {
    
}