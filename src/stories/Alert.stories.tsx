import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert, AlertTitle } from '@mui/material'
import { Paper, Button } from '@mui/material'
import '../theme'

export default {
    title: 'AdobeMuiTheme/Alert',
    component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => {
    return (
        <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column", gap: "16px"}}>
            <Alert variant="standard" severity="info" action={<Button variant="adobe-inherit">Action</Button>}>
                <AlertTitle>Alert title</AlertTitle>
                Alert - info - standard
            </Alert>
            <Alert variant="standard" severity="success" action={<Button variant="adobe-inherit">Action</Button>}>
                <AlertTitle>Alert title</AlertTitle>
                Alert - success - standard
            </Alert>
            {/* <Alert variant="standard" severity="warning">Alert - warning - standard</Alert> */}
            <Alert variant="standard" severity="error" action={<Button variant="adobe-inherit">Action</Button>}>
                <AlertTitle>Alert title</AlertTitle>
                Alert - error - standard
            </Alert>
            <Alert variant="filled" severity="info" action={<Button variant="adobe-inherit">Action</Button>}>
                <AlertTitle>Alert title</AlertTitle>
                Alert - info - filled
            </Alert>
            <Alert variant="filled" severity="success" action={<Button variant="adobe-inherit">Action</Button>}>
                <AlertTitle>Alert title</AlertTitle>
                Alert - success - filled
            </Alert>
            {/* <Alert variant="filled" severity="warning">Alert - warning - filled</Alert> */}
            <Alert variant="filled" severity="error" action={<Button variant="adobe-inherit">Action</Button>}>
                <AlertTitle>Alert title</AlertTitle>
                Alert - error - filled
            </Alert>
            <Alert variant="outlined" severity="info" action={<Button variant="adobe-inherit">Action</Button>}>
                <AlertTitle>Alert title</AlertTitle>
                Alert - info - outlined
            </Alert>
            <Alert variant="outlined" severity="success" action={<Button variant="adobe-inherit">Action</Button>}>
                <AlertTitle>Alert title</AlertTitle>
                Alert - success - outlined
            </Alert>
            {/* <Alert variant="outlined" severity="warning">Alert - warning - outlined</Alert> */}
            <Alert variant="outlined" severity="error" action={<Button variant="adobe-inherit">Action</Button>}>
                <AlertTitle>Alert title</AlertTitle>
                Alert - error - outlined
            </Alert>
        </Paper>
    )
    
}

export const AdobeAlert = Template.bind({});
AdobeAlert.args = {
    
}