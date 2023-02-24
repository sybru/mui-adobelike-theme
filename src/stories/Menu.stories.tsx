import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Menu, MenuItem } from '@mui/material'
import { Paper } from '@mui/material'
import '../theme'

export default {
    title: 'AdobeMuiTheme/Menu',
    component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => {
    const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
            <Button ref={setButtonRef} onClick={ () => setOpen((v => !v)) }>メニュー</Button>
            <Menu open={true ?? open} anchorEl={buttonRef}>
                <MenuItem>List item 1</MenuItem>
                <MenuItem selected>List item 2</MenuItem>
                <MenuItem>List item 3</MenuItem>
                <MenuItem>List item 4</MenuItem>
                <MenuItem selected>List item 5</MenuItem>
            </Menu>
        </Paper>
    )
    
}

export const AdobeMenu = Template.bind({});
AdobeMenu.args = {
    
}