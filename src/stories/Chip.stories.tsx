import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip, FormControl } from '@mui/material'
import { Paper } from '@mui/material'
import '..'

export default {
    title: 'AdobeMuiTheme/Chip',
    component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
    <Paper sx={{ padding: "8px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <Chip variant="filled" label="Filled" onDelete={e => {}} />
        <Chip variant="outlined" label="Outlined" onDelete={e => {}} />
        <Chip variant="filled" size="small" label="Filled small" onDelete={e => {}} />
        <Chip variant="outlined" size="small" label="Outlined small" onDelete={e => {}} />
        <Chip variant="filled" size="small" label="Filled small" color="adobe-primary" onDelete={e => {}} />
        <Chip variant="outlined" size="small" label="Outlined small" color="adobe-primary" onDelete={e => {}} />
        <Chip variant="filled" size="small" label="Filled small" color="adobe-danger" onDelete={e => {}} />
        <Chip variant="outlined" size="small" label="Outlined small" color="adobe-danger" onDelete={e => {}} />
        <Chip variant="adobe-cta" size="small" label="Filled small" color="adobe-danger" onDelete={e => {}} />

        <Chip variant="filled" label="Filled" onDelete={e => {}} disabled />
        <Chip variant="outlined" label="Outlined" onDelete={e => {}} disabled />
        <Chip variant="filled" size="small" label="Filled small" onDelete={e => {}} disabled />
        <Chip variant="outlined" size="small" label="Outlined small" onDelete={e => {}} disabled />
        <Chip variant="filled" size="small" label="Filled small" color="adobe-primary" onDelete={e => {}} disabled />
        <Chip variant="outlined" size="small" label="Outlined small" color="adobe-primary" onDelete={e => {}} disabled />
        <Chip variant="filled" size="small" label="Filled small" color="adobe-danger" onDelete={e => {}} disabled />
        <Chip variant="outlined" size="small" label="Outlined small" color="adobe-danger" onDelete={e => {}} disabled />
        <Chip variant="adobe-cta" size="small" label="Filled small" color="adobe-danger" onDelete={e => {}} disabled />
    </Paper>
    
)

export const AdobeChip = Template.bind({});
AdobeChip.args = {
    
}