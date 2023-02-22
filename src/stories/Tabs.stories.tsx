import React, { useState, useCallback } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs, Tab } from '@mui/material'
import { Paper } from '@mui/material'
import '../theme'

export default {
    title: 'AdobeMuiTheme/Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
    const [currentTab, setCurrentTab] = useState("tab-01")
    const onChange = useCallback((event: React.SyntheticEvent<Element, Event>, value: string) => {
        setCurrentTab(value);
    }, []);
    return (
        <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
            <Tabs value={currentTab} onChange={onChange}>
                <Tab value="tab-01" label="Tab 1" />
                <Tab value="tab-02" label="Tab 2" />
                <Tab value="tab-03" label="Tab 3" />
            </Tabs>
        </Paper>
    )
}

export const AdobeTabs = Template.bind({});
AdobeTabs.args = {
    
}