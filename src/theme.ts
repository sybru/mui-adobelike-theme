import { createTheme } from '@mui/material/styles'
import { Color, AfterEffectElementColor } from './color'

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        "adobe-primary-contained":  true;
        "adobe-danger-contained":   true;
        "adobe-primary-outlined":   true;
        "adobe-danger-outlined":    true;
        "adobe-cta":                true;
        "adobe-inherit":            true;
    }
}

export const afterEffectsTheme = createTheme({
    typography: {
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
                    ...Color.AfterEffects.surface,
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
                    props: { variant: "adobe-danger-contained" },
                    style: {}
                },
                {
                    props: { variant: "adobe-primary-outlined" },
                    style: {}
                },
                {
                    props: { variant: "adobe-danger-outlined" },
                    style: {}
                },
                {
                    props: { variant: "adobe-cta" },
                    style: {}
                },
                {
                    props: { variant: "adobe-inherit" },
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
                root: ({ ownerState }) => ({
                    borderRadius:   "1000000px",
                    padding:        "0 12px",
                    ...(ownerState.variant === "adobe-primary-contained" && {
                        ...Color.AfterEffects.buttonPrimaryContained,
                        "&:hover": {
                            ...Color.AfterEffects.buttonPrimaryContained
                        }
                    }),
                    ...(ownerState.variant === "adobe-danger-contained" && {
                        ...Color.AfterEffects.buttonDangerContained,
                        "&:hover": {
                            ...Color.AfterEffects.buttonDangerContained
                        }
                    }),
                    ...(ownerState.variant === "adobe-primary-outlined" && {
                        ...Color.AfterEffects.buttonPrimaryOutlined,
                        borderStyle: "solid",
                        borderWidth: "1px",
                    }),
                    ...(ownerState.variant === "adobe-danger-outlined" && {
                        ...Color.AfterEffects.buttonDangerOutlined,
                        borderStyle: "solid",
                        borderWidth: "1px",
                    }),
                    ...(ownerState.variant === "adobe-cta" && {
                        ...Color.AfterEffects.buttonCta,
                        borderStyle: "solid",
                        borderWidth: "1px",
                        transition: "none",
                        "&:hover": {
                            ...Color.AfterEffects.buttonCtaHover,
                        }
                    }),
                    ...(ownerState.variant === "adobe-inherit" && {
                        color: "inherit",
                        backgroundColor: "inherit",
                        borderColor: "inherit",
                        borderStyle: "solid",
                        borderWidth: "1px",
                    }),
                    "&.Mui-disabled": {
                        ...Color.AfterEffects.buttonDisabled,
                        borderStyle: "solid",
                        borderWidth: "1px",
                    }
                })
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
                        ...Color.AfterEffects.toggleButtonSelected,
                        borderStyle: "solid",
                        borderWidth: "1px",
                    },
                    "&.Mui-selected .MuiSvgIcon-root": {
                        ...Color.AfterEffects.toggleButtonIconSelected
                    }
                }
            }
        },

        MuiInputBase: {
            styleOverrides: {
                root: {
                    "& :after": {
                        borderBottom: "none"
                    },
                    "& .Mui-focused:after": {
                        transform: "none"
                    }
                },
                input: ({ ownerState }) => ({
                    ...Color.AfterEffects.textField,
                    padding: "3px 8px",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderRadius: "4px",
                    "&:focus": {
                        ...Color.AfterEffects.textFieldFocused,
                        ...(ownerState.readOnly && {
                            ...Color.AfterEffects.textField,
                        }),
                    },
                    "&.Mui-disabled": {
                        ...Color.AfterEffects.textFieldDisabled,
                        WebkitTextFillColor: Color.AfterEffects.textFieldDisabled.color
                    },
                })
            }
        },
        MuiInput: {
            defaultProps: {
                disableUnderline: true,
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    "& .MuiInputLabel-root": {
                        ...Color.AfterEffects.textFieldLabel
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        ...(!ownerState.InputProps?.readOnly && {
                            ...Color.AfterEffects.textFieldLabelFocused
                        })
                    },
                    "& .MuiInputLabel-root.Mui-disabled": {
                        ...Color.AfterEffects.textFieldLabelDisabled
                    },
                    ...(ownerState.variant === "standard" && {
                        "& .MuiInputLabel-root.Mui-focused": {
                            ...Color.AfterEffects.textFieldLabel
                        }
                    })
                })
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderWidth: 0
                    }
                },
                notchedOutline: {
                    borderWidth: 0
                }
            }
        },
        MuiFilledInput: {
            defaultProps: {
                disableUnderline: true,
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
                    ...Color.AfterEffects.checkbox,
                    padding: 0,
                    "&:hover .MuiSvgIcon-root": {
                        ...Color.AfterEffects.checkboxHover,
                    },
                    "&.Mui-checked:hover .MuiSvgIcon-root": {
                        ...Color.AfterEffects.checkboxHover,
                    },
                    "&.Mui-disabled .MuiSvgIcon-root": {
                        ...Color.AfterEffects.checkboxDisabled,
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
                root: () => {
                    const after = {
                        content: "''",
                        position: "absolute",
                        width: "1rem",
                        height: "1rem",
                        borderStyle: "solid",
                        borderWidth: "2px",
                        borderRadius: "50%",
                        borderColor: Color.AfterEffects.radioButton.color,
                    }
                    return {
                        padding: "2px",
                        "& .MuiSvgIcon-root": {
                            visibility: "hidden"
                        },
                        "&:after": after,
                        "&:hover:after": {
                            ...after,
                            borderColor: Color.AfterEffects.radioButtonHover.color,
                        },
                        "&.Mui-checked:after": {
                            ...after,
                            backgroundColor: Color.AfterEffects.radioButtonChecked.color,
                            borderColor: Color.AfterEffects.radioButtonChecked.color,
                        }
                    }
                }
            }
        },

        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                    backgroundColor: Color.AfterEffects.list.backgroundColor
                }
            }
        },

        MuiListItem: {
            defaultProps: {
                divider: true,
            },
            styleOverrides: {
                root: {
                    padding: "3px 12px",
                    ...Color.AfterEffects.listItem,
                    "&:hover": {
                        ...Color.AfterEffects.listItem,
                    },
                    "&.Mui-selected": {
                        ...Color.AfterEffects.listItemSelected,
                    },
                    "&.Mui-selected:hover": {
                        ...Color.AfterEffects.listItemSelected,
                    },
                    "&.MuiListItemButton-divider:not(:last-child)": {
                        borderBottomColor: Color.AfterEffects.divider.backgroundColor
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
                    padding: "3px 12px",
                    ...Color.AfterEffects.listItem,
                    "&:hover": {
                        ...Color.AfterEffects.listItem,
                    },
                    "&.Mui-selected": {
                        ...Color.AfterEffects.listItemSelected,
                    },
                    "&.Mui-selected:hover": {
                        ...Color.AfterEffects.listItemSelected,
                    },
                    "&.MuiListItemButton-divider:not(:last-child)": {
                        borderBottomColor: Color.AfterEffects.divider.backgroundColor
                    }
                }
            }
        },

        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: Color.AfterEffects.menu.backgroundColor,
                }
            }
        },

        MuiMenuItem: {
            defaultProps: {
                disableRipple: true,
                disableTouchRipple: true,
                divider: true
            },
            styleOverrides: {
                root: {
                    minHeight: 0,
                    padding: "3px 24px",
                    ...Color.AfterEffects.listItem,
                    "&:hover": {
                        ...Color.AfterEffects.listItem,
                    },
                    "&.Mui-selected": {
                        ...Color.AfterEffects.listItemSelected,
                    },
                    "&.Mui-selected:hover": {
                        ...Color.AfterEffects.listItemSelected,
                    },
                    "&.MuiListItemButton-divider:not(:last-child)": {
                        borderBottomColor: Color.AfterEffects.divider.backgroundColor
                    }
                }
            }
        },

        MuiSelect: {
            styleOverrides: {
                select: {
                    "&.MuiInput-input:focus": {
                        color: Color.AfterEffects.select.color,
                        backgroundColor: Color.AfterEffects.select.backgroundColor
                    },
                    "&.MuiOutlinedInput-input:focus": {
                        color: Color.AfterEffects.select.color,
                        backgroundColor: Color.AfterEffects.select.backgroundColor
                    },
                    "&.MuiFilledInput-input:focus": {
                        color: Color.AfterEffects.select.color,
                        backgroundColor: Color.AfterEffects.select.backgroundColor
                    }
                },
                icon: {
                    color: Color.AfterEffects.select.color
                }
            }
        },

        MuiSlider: {
            styleOverrides: {
                root: {
                    ...Color.AfterEffects.sliderRail,
                },
                rail: {
                    opacity: 1,
                },
                track: {
                    display: "none"
                },
                thumb: {
                    ...Color.AfterEffects.sliderThumb,
                    width:  "17px",
                    height: "17px",
                    borderStyle:    "solid",
                    borderWidth:    "2px",
                    boxShadow:      `0 0 0 2px ${Color.AfterEffects.sliderThumb.color}`,
                    "&.Mui-active": {
                        ...Color.AfterEffects.sliderThumbActive,
                        boxShadow:      `0 0 0 2px ${Color.AfterEffects.sliderThumb.color}`,
                    },
                    "&.Mui-focusVisible": {
                        boxShadow:      `0 0 0 2px ${Color.AfterEffects.sliderThumb.color}`,
                    },
                    "&:before": {
                        boxShadow:      "none",
                    },
                    "&:hover": {
                        boxShadow:      `0 0 0 2px ${Color.AfterEffects.sliderThumb.color}`,
                    }
                }
            }
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    ...Color.AfterEffects.surface
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
                    ...Color.AfterEffects.accordionIcon,
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
                    ...Color.AfterEffects.tabsIndicator,
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
                    ...Color.AfterEffects.tab,
                    minHeight: 0,
                    padding: "4px 6px",
                    "&.Mui-selected": {
                        ...Color.AfterEffects.tabSelected,
                    }
                },
            }
        },

        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: "#454545"
                }
            }
        },

        MuiDialog: {

        },
        MuiDialogContent: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...Color.AfterEffects.surface,
                    ...(ownerState.dividers && {
                        borderTopColor: Color.AfterEffects.divider.backgroundColor,
                        borderBottomColor: Color.AfterEffects.divider.backgroundColor
                    })
                })
            }
        },
        MuiDialogContentText: {
            styleOverrides: {
                root: {
                    ...Color.AfterEffects.surface
                }
            }
        },

        MuiAlert: {
            styleOverrides: {
                standard: {
                    ...Color.AfterEffects.surface
                },
                standardSuccess: {
                    ...Color.AfterEffects.alertSuccess
                },
                standardError: {
                    ...Color.AfterEffects.alertError
                },
                outlined: {
                    ...Color.AfterEffects.alertInfoOutlined
                },
                outlinedSuccess: {
                    ...Color.AfterEffects.alertSuccessOutlined
                },
                outlinedError: {
                    ...Color.AfterEffects.alertErrorOutlined
                },
                filled: {
                    ...Color.AfterEffects.alertInfoFilled
                },
                filledSuccess: {
                    ...Color.AfterEffects.alertSuccessFilled
                },
                filledError: {
                    ...Color.AfterEffects.alertErrorFilled
                },
                icon: ({ ownerState }) => ({
                    "& .MuiSvgIcon-root": {
                        ...(ownerState.severity === "info" && {
                            ...(ownerState.variant === "standard" && {
                                color: Color.AfterEffects.alertInfo.color
                            }),
                            ...(ownerState.variant === "filled" && {
                                color: Color.AfterEffects.alertInfoFilled.color
                            }),
                            ...(ownerState.variant === "outlined" && {
                                color: Color.AfterEffects.alertInfoOutlined.color
                            })
                        }),
                        ...(ownerState.severity === "success" && {
                            ...(ownerState.variant === "standard" && {
                                color: Color.AfterEffects.alertSuccess.color
                            }),
                            ...(ownerState.variant === "filled" && {
                                color: Color.AfterEffects.alertSuccessFilled.color
                            }),
                            ...(ownerState.variant === "outlined" && {
                                color: Color.AfterEffects.alertSuccessOutlined.color
                            })
                        }),
                        ...(ownerState.severity === "error" && {
                            ...(ownerState.variant === "standard" && {
                                color: Color.AfterEffects.alertError.color
                            }),
                            ...(ownerState.variant === "filled" && {
                                color: Color.AfterEffects.alertErrorFilled.color
                            }),
                            ...(ownerState.variant === "outlined" && {
                                color: Color.AfterEffects.alertErrorOutlined.color
                            })
                        })
                    }
                    
                })
            }
        },

        MuiAlertTitle: {

        },

        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: AfterEffectElementColor.icon
                }
            }
        }
    }
});