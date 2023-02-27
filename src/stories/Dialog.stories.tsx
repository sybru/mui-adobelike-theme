import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle } from '@mui/material'
import { Paper, Button } from '@mui/material'
import '../'

export default {
    title: 'AdobeMuiTheme/Dialog',
    component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => (
    <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
        <Dialog open>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogContent dividers>
                <DialogContentText>
                    An H1 tag is an HTML heading used to mark up a webpage's main subject. In a webpage's code, you'll see the H1 text wrapped in <h1></h1> tags.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="adobe-danger-outlined">Cancel</Button>
                <Button variant="adobe-primary-contained">Subscribe</Button>
            </DialogActions>
        </Dialog>
    </Paper>
    
)

export const AdobeDialog = Template.bind({});
AdobeDialog.args = {
    
}