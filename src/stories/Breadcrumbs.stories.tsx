import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumbs, Link, Button } from '@mui/material'
import { Paper } from '@mui/material'

export default {
    title: 'AdobeMuiTheme/Breadcrumbs',
    component: Link,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
    <Paper sx={{ height: "100%", padding: "8px", display: "flex", flexDirection: "column" }}>
        <Breadcrumbs maxItems={2} expandText='aaa'>
            <Link underline='hover'>MUI-ADOBE-THEME</Link>
            <Link underline='hover'>Develop</Link>
            <Link underline='hover'>After Effects</Link>
            <Link underline='hover'>Composition</Link>
            <Link underline='hover'>Layers</Link>
            <Link underline='hover'>
                <Button>プロパティ</Button>
                Properties
            </Link>
        </Breadcrumbs>
        
    </Paper>
    
)

export const AdobeBreadcrumbs = Template.bind({});
AdobeBreadcrumbs.args = {
    
}