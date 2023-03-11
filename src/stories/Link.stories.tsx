import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from '@mui/material'
import { Paper } from '@mui/material'

export default {
    title: 'AdobeMuiTheme/Link',
    component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
    <Paper sx={{ height: "100%", padding: "8px", display: "flex", flexDirection: "column" }}>
        <Link>リンク</Link>
        <Link underline='hover'>リンク</Link>
        <Link underline='none'>リンク</Link>
    </Paper>
    
)

export const AdobeLink = Template.bind({});
AdobeLink.args = {
    
}