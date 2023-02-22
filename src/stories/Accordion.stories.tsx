import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material'
import { ArrowForwardIosRounded } from '@mui/icons-material'
import { Paper } from '@mui/material'

export default {
    title: 'AdobeMuiTheme/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
    <Paper sx={{ padding: "8px", display: "flex", flexDirection: "column" }}>
        <Accordion>
            <AccordionSummary expandIcon={<ArrowForwardIosRounded fontSize="small" />}>
                Accordion 1
            </AccordionSummary>
            <AccordionDetails>
                AIUEO
            </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion>
            <AccordionSummary expandIcon={<ArrowForwardIosRounded fontSize="small" />}>
                Accordion 2
            </AccordionSummary>
            <AccordionDetails>
                KAKIKUKEKO
            </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion>
            <AccordionSummary expandIcon={<ArrowForwardIosRounded fontSize="small" />}>
                Accordion 3
            </AccordionSummary>
            <AccordionDetails>
                SASHISUSESO
            </AccordionDetails>
        </Accordion>
    </Paper>
    
)

export const AdobeAccordion = Template.bind({});
AdobeAccordion.args = {
    
}