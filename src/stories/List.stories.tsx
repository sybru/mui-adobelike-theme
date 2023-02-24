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
            <ListItem>List Item 1</ListItem>
            <ListItem selected>List Item 2</ListItem>
            <ListItem>List Item 3</ListItem>
            <ListItem>List Item 4</ListItem>
            <ListItem selected>List Item 5</ListItem>
        </List>
        <List>
            <ListItemButton>List Item Button 1</ListItemButton>
            <ListItemButton selected>List Item Button 2</ListItemButton>
            <ListItemButton>List Item Button 3</ListItemButton>
            <ListItemButton>List Item Button 4</ListItemButton>
            <ListItemButton selected>List Item Button 5</ListItemButton>
        </List>
    </Paper>
    
)

export const AdobeList = Template.bind({});
AdobeList.args = {
    
}