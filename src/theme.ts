import { createTheme } from '@mui/material/styles'
import { Color } from './color'

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        "adobe-primary-contained":  true;
        "adobe-warning-contained":  true;
        "adobe-primary-outlined":   true;
        "adobe-warning-outlined":   true;
        "adobe-cta":                true;
    }
}

export const afterEffectsTheme = createTheme({
    typography: {
        // fontSize: "0.85rem"
        allVariants: {
            fontSize: "0.85rem"
        }
    },
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    color: Color.AfterEffects.text.common,
                    backgroundColor: Color.AfterEffects.skin.common
                }
            }
        },

        MuiDivider: {
            styleOverrides: {

            }
        },

        MuiButton: {
            variants: [
                {
                    props: { variant: "adobe-primary-contained" },
                    style: {}
                },
                {
                    props: { variant: "adobe-warning-contained" },
                    style: {}
                },
                {
                    props: { variant: "adobe-primary-outlined" },
                    style: {}
                },
                {
                    props: { variant: "adobe-warning-outlined" },
                    style: {}
                },
                {
                    props: { variant: "adobe-cta" },
                    style: {}
                },
            ],
            defaultProps: {
                variant: "contained",
                disableRipple: true,
                disableFocusRipple: true,
                disableTouchRipple: true,
                disableElevation: true
            },
            styleOverrides: {
                colorInherit: ({ ownerState }) => {
                    ownerState.variant
                    return {

                    }
                },
                root: ({ ownerState }) => {
                    return {
                        borderRadius:   "1000000px",
                        padding:        "0 4px",
                        ...(ownerState.variant === "adobe-primary-contained" && {
                            color: Color.AfterEffects.text.button,
                            backgroundColor: Color.AfterEffects.skin.buttonPrimary,
                            "&:hover": {
                                backgroundColor: Color.AfterEffects.skin.buttonPrimary,
                            }
                        }),
                        ...(ownerState.variant === "adobe-warning-contained" && {
                            color: Color.AfterEffects.text.buttonCta,
                            backgroundColor: Color.AfterEffects.skin.buttonWarning,
                            "&:hover": {
                                backgroundColor: Color.AfterEffects.skin.buttonWarning,
                            }
                        }),
                        ...(ownerState.variant === "adobe-primary-outlined" && {
                            color: Color.AfterEffects.text.buttonPrimary,
                            backgroundColor: Color.AfterEffects.skin.common,
                            borderColor: Color.AfterEffects.border.buttonPrimary,
                            borderStyle: "solid",
                            borderWidth: "1px",
                        }),
                        ...(ownerState.variant === "adobe-warning-outlined" && {
                            color: Color.AfterEffects.text.buttonWarning,
                            backgroundColor: Color.AfterEffects.skin.common,
                            borderColor: Color.AfterEffects.border.buttonWarning,
                            borderStyle: "solid",
                            borderWidth: "1px",
                        }),
                        ...(ownerState.variant === "adobe-cta" && {
                            color: Color.AfterEffects.text.buttonCta,
                            backgroundColor: Color.AfterEffects.skin.buttonCta,
                            borderColor: Color.AfterEffects.border.buttonCta,
                            borderStyle: "solid",
                            borderWidth: "1px",
                            transition: "none",
                            "&:hover": {
                                color: Color.AfterEffects.text.buttonCtaHover,
                                backgroundColor: Color.AfterEffects.skin.buttonCtaHover,
                            }
                        }),
                        "&.Mui-disabled": {
                            color: Color.AfterEffects.text.disabled,
                            backgroundColor: "transparent",
                            borderColor: Color.AfterEffects.border.disabled,
                            borderStyle: "solid",
                            borderWidth: "1px",
                        }
                    }
                }
            }
        },

        MuiToggleButton: {
            defaultProps: {
                disableRipple: true,
                disableFocusRipple: true,
                disableTouchRipple: true,
            },
            styleOverrides: {
                root: {
                    padding: "3px",
                    borderColor: "transparent",
                    "&.Mui-selected": {
                        backgroundColor: Color.AfterEffects.skin.toggleButtonEnable,
                        borderStyle: "solid",
                        borderWidth: "1px",
                        borderColor: Color.AfterEffects.border.toggleButtonEnable
                    },
                    "&.Mui-selected .MuiSvgIcon-root": {
                        color: Color.AfterEffects.text.highlight
                    }
                }
            }
        },

        MuiCheckbox: {
            defaultProps: {
                disableRipple: true,
                disableFocusRipple: true,
                disableTouchRipple: true,
            },
            styleOverrides: {
                root: {
                    color: Color.AfterEffects.border.checkbox,
                    padding: 0,
                    "&:hover": {
                        color: Color.AfterEffects.hover.checkbox,
                    },
                    "&.Mui-checked": {
                        color: Color.AfterEffects.border.checkbox,
                    },
                    "&.Mui-checked:hover": {
                        color: Color.AfterEffects.hover.checkbox,
                    },
                    "&.Mui-disabled": {
                        color: Color.AfterEffects.border.disabled,
                    }
                }
            }
        },
        MuiRadio: {
            defaultProps: {
                disableRipple: true,
                disableFocusRipple: true,
                disableTouchRipple: true
            },
            styleOverrides: {
                root: ({ ownerState }) => {
                    const after = {
                        content: "''",
                        position: "absolute",
                        width: "1rem",
                        height: "1rem",
                        borderStyle: "solid",
                        borderWidth: "2px",
                        borderRadius: "50%",
                        borderColor: Color.AfterEffects.border.checkbox,
                    }
                    return {
                        padding: "2px",
                        color: Color.AfterEffects.border.checkbox,
                        "& .MuiSvgIcon-root": {
                            visibility: "hidden"
                        },
                        "&:after": after,
                        "&:hover:after": {
                            ...after,
                            borderColor: Color.AfterEffects.hover.checkbox,
                        },
                        "&.Mui-checked:after": {
                            ...after,
                            backgroundColor: Color.AfterEffects.icon.primary,
                            borderColor: Color.AfterEffects.icon.primary,
                        }
                    }
                }
            }
        },

        MuiSelect: {
            defaultProps: {
                sx: {
                    "&.MuiInputBase-root": {
                        color:              Color.AfterEffects.text.dropdown,
                        backgroundColor:    Color.AfterEffects.skin.dropdown,
                        borderStyle:        "solid",
                        borderWidth:        "2px",
                        borderColor:        Color.AfterEffects.border.dropdown,
                    },
                    "&.MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
                        borderStyle: "none"
                        // borderColor:        Color.AfterEffects.border.dropdown,
                    },
                    "&.MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
                        borderStyle: "none"
                        // borderColor:        Color.AfterEffects.border.dropdown,
                    },
                    "&.MuiInputBase-root:before": {
                        borderBottom: "none"
                    },
                    "&.MuiInputBase-root:hover:before": {
                        borderBottom: "none"
                    },
                    "&.MuiInputBase-root:after": {
                        borderBottom: "none"
                    },
                    "& .MuiInputBase-input": {
                        padding:            "3px 6px",
                    },
                    "& .MuiInputBase-input:hover": {
                        borderColor: Color.AfterEffects.border.dropdown,
                    },
                    "& .MuiSelect-icon": {
                        color: Color.AfterEffects.icon.dropdown,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        // borderColor: "red"
                    },
                    
                },
            }
        },

        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: Color.AfterEffects.skin.dropdownBox,
                    
                }
            }
        },

        MuiMenuItem: {
            styleOverrides: {
                root: {
                    minHeight: 0,
                    padding: "3px 6px",
                    "&:hover": {
                        backgroundColor: Color.AfterEffects.hover.dropdownBox
                    },
                    "&.Mui-selected": {
                        color: Color.AfterEffects.text.highlight,
                        backgroundColor: "inherit",
                    },
                    "&.Mui-selected:hover": {
                        backgroundColor: Color.AfterEffects.hover.dropdownBox
                    }

                    
                }
            }
        },

        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                    backgroundColor: Color.AfterEffects.skin.list
                }
            }
        },

        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: "4px 0",
                    backgroundColor: Color.AfterEffects.skin.listItem,
                    "&:not(:last-child)": {
                        borderBottomStyle: "solid",
                        borderWidth: "1px",
                        borderBottomColor: Color.AfterEffects.skin.divider
                    }
                }
            }
        },

        MuiListItemButton: {
            defaultProps: {
                disableRipple: true,
                disableTouchRipple: true,
                divider: true
            },
            styleOverrides: {
                root: {
                    padding: "2px 0",
                    color: Color.AfterEffects.text.common,
                    backgroundColor: Color.AfterEffects.skin.listItem,
                    "&:hover": {
                        backgroundColor: Color.AfterEffects.skin.listItem,
                    },
                    "&.Mui-selected": {
                        backgroundColor: Color.AfterEffects.skin.listItemSelected,
                    },
                    "&.Mui-selected:hover": {
                        backgroundColor: Color.AfterEffects.skin.listItemSelected,
                    },
                    "&.MuiListItemButton-divider:not(:last-child)": {
                        borderBottomColor: Color.AfterEffects.skin.divider
                    }
                }
            }
        },

        MuiSlider: {
            styleOverrides: {
                root: {
                    color: Color.AfterEffects.skin.sliderRail,
                },
                rail: {
                    opacity: 1,
                },
                track: {
                    display: "none"
                },
                thumb: {
                    width:  "17px",
                    height: "17px",
                    color:          Color.AfterEffects.skin.sliderThumb,
                    borderStyle:    "solid",
                    borderWidth:    "2px",
                    borderColor:    Color.AfterEffects.border.sliderThumb,
                    boxShadow:      `0 0 0 2px ${Color.AfterEffects.skin.common}`,
                    "&.Mui-active": {
                        color:          Color.AfterEffects.skin.sliderThumbActive,
                        borderColor:    Color.AfterEffects.skin.sliderThumbActive,
                        boxShadow:      `0 0 0 2px ${Color.AfterEffects.skin.common}`,
                    },
                    "&.Mui-focusVisible": {
                        boxShadow:      `0 0 0 2px ${Color.AfterEffects.skin.common}`,
                    },
                    "&:before": {
                        boxShadow:      "none",
                    },
                    "&:hover": {
                        boxShadow:      `0 0 0 2px ${Color.AfterEffects.skin.common}`,
                    }
                }
            }
        },

        MuiAccordion: {
            styleOverrides: {
                root: {
                    "&.Mui-expanded": {
                        margin: 0,
                    },
                    "&:before": {
                        backgroundColor: "transparent"
                    },
                    "& .MuiCollapse-root": {
                        transition: "none"
                    }
                },
            }
        },

        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    minHeight: 0,
                    flexDirection: "row-reverse",
                    "&.Mui-expanded": {
                        minHeight: 0,
                    }
                },
                content: {
                    margin: 0,
                    "&.Mui-expanded": {
                        margin: 0,
                    }
                },
                expandIconWrapper: {
                    color: Color.AfterEffects.icon.accordion,
                    transition: "none",
                    "&.Mui-expanded": {
                        margin: 0,
                        transform: "rotate(90deg)",
                    },
                    "& .MuiSvgIcon-root": {
                        fontSize: "0.75rem"
                    }
                }
            }
        },

        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: "4px 25px"
                },
            }
        },

        MuiTabs: {
            styleOverrides: {
                root: {
                    minHeight: 0
                },
                indicator: {
                    backgroundColor: Color.AfterEffects.text.commonLight,
                    transition: "none"
                }
            }
        },

        MuiTab: {
            defaultProps: {
                disableRipple: true,
                disableTouchRipple: true,
                disableFocusRipple: true,
            },
            styleOverrides: {
                root: {
                    minHeight: 0,
                    padding: "4px 6px",
                    color: Color.AfterEffects.text.common,
                    "&.Mui-selected": {
                        color: Color.AfterEffects.text.commonLight,
                    }
                },
            }
        },

        MuiDrawer: {
            // styleOverrides: {
            //     paper: {
            //         color: Color.AfterEffects.text.common,
            //         backgroundColor: Color.AfterEffects.skin.common
            //     }
            // }
        },

        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: Color.AfterEffects.skin.tooltip
                }
            }
        },

        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: Color.AfterEffects.icon.common
                }
            }
        }
    }
});