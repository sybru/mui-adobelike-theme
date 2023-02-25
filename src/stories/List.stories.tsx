import React, { useState, useCallback } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { Paper, IconButton } from '@mui/material'
import { AccessAlarm } from '@mui/icons-material'
import '../'

export default {
    title: 'AdobeMuiTheme/List',
    component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => {
    const [selectedIndicies, setSelectedIndicies] = useState<number[]>([]);
    const onClick = useCallback<(event: React.MouseEvent<HTMLDivElement>, index: number) => void>((event, index) => {
        setSelectedIndicies(state => {
            return [index];
            // if(state.includes(index)){ return state.filter(value => value !== index); }
            // return [...state, index];
        })
    }, []);
    return (
        <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
            <List>
                {
                    new Array(10).fill(null).map((_, index) => {
                        return (
                            <ListItemButton
                            key={index}
                            selected={selectedIndicies.includes(index)}
                            onClick={event => onClick(event, index)}
                            >
                                <ListItemText>
                                    {`List Item Button ${index}`}
                                </ListItemText>
                                <IconButton edge="end">
                                    <AccessAlarm />
                                </IconButton>
                            </ListItemButton>
                        )
                    })
                }
                
                {/* <ListItemButton onClick={onClick}>List Item Button 2</ListItemButton>
                <ListItemButton onClick={onClick}>List Item Button 3</ListItemButton>
                <ListItemButton onClick={onClick}>List Item Button 4</ListItemButton>
                <ListItemButton onClick={onClick}>List Item Button 5</ListItemButton> */}
            </List>
        </Paper>
    )
}

export const AdobeList = Template.bind({});
AdobeList.args = {
    
}