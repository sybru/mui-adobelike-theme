import { useMemo } from 'react'
import { deepmerge } from "@mui/utils"
import { createTheme } from '@mui/material/styles'
import { afterEffectsAppColor, afterEffectsElementColor } from './color'

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

export { afterEffectsAppColor }
export { afterEffectsElementColor }

const afterEffects = (params?: {
    appColor?: typeof afterEffectsAppColor;
    elementColor?: ReturnType<typeof afterEffectsElementColor>
}) => {
    const elementColor = afterEffectsElementColor(params?.appColor);
    const appTheme = deepmerge(elementColor, params?.elementColor);

    return createTheme({
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
                        ...appTheme.surface,
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
                            ...appTheme.buttonPrimaryContained,
                            "&:hover": {
                                ...appTheme.buttonPrimaryContained
                            }
                        }),
                        ...(ownerState.variant === "adobe-danger-contained" && {
                            ...appTheme.buttonDangerContained,
                            "&:hover": {
                                ...appTheme.buttonDangerContained
                            }
                        }),
                        ...(ownerState.variant === "adobe-primary-outlined" && {
                            ...appTheme.buttonPrimaryOutlined,
                            borderStyle: "solid",
                            borderWidth: "1px",
                        }),
                        ...(ownerState.variant === "adobe-danger-outlined" && {
                            ...appTheme.buttonDangerOutlined,
                            borderStyle: "solid",
                            borderWidth: "1px",
                        }),
                        ...(ownerState.variant === "adobe-cta" && {
                            ...appTheme.buttonCta,
                            borderStyle: "solid",
                            borderWidth: "1px",
                            transition: "none",
                            "&:hover": {
                                ...appTheme.buttonCtaHover,
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
                            ...appTheme.buttonDisabled,
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
                            ...appTheme.toggleButtonSelected,
                            borderStyle: "solid",
                            borderWidth: "1px",
                        },
                        "&.Mui-selected .MuiSvgIcon-root": {
                            ...appTheme.toggleButtonIconSelected
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
                        ...appTheme.textField,
                        padding: "3px 8px",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        borderRadius: "4px",
                        "&:focus": {
                            ...appTheme.textFieldFocused,
                            ...(ownerState.readOnly && {
                                ...appTheme.textField,
                            }),
                        },
                        "&.Mui-disabled": {
                            ...appTheme.textFieldDisabled,
                            WebkitTextFillColor: appTheme.textFieldDisabled.color
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
                            ...appTheme.textFieldLabel
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            ...(!ownerState.InputProps?.readOnly && {
                                ...appTheme.textFieldLabelFocused
                            })
                        },
                        "& .MuiInputLabel-root.Mui-disabled": {
                            ...appTheme.textFieldLabelDisabled
                        },
                        ...(ownerState.variant === "standard" && {
                            "& .MuiInputLabel-root.Mui-focused": {
                                ...appTheme.textFieldLabel
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
                        padding: 0,
                        "& .MuiSvgIcon-root": {
                            ...appTheme.checkbox,
                        },
                        "&:hover .MuiSvgIcon-root": {
                            ...appTheme.checkboxHover,
                        },
                        "&.Mui-checked:hover .MuiSvgIcon-root": {
                            ...appTheme.checkboxHover,
                        },
                        "&.Mui-disabled .MuiSvgIcon-root": {
                            ...appTheme.checkboxDisabled,
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
                            borderColor: appTheme.radioButton.color,
                        }
                        return {
                            padding: "2px",
                            "& .MuiSvgIcon-root": {
                                visibility: "hidden"
                            },
                            "&:after": after,
                            "&:hover:after": {
                                ...after,
                                borderColor: appTheme.radioButtonHover.color,
                            },
                            "&.Mui-checked:after": {
                                ...after,
                                backgroundColor: appTheme.radioButtonChecked.color,
                                borderColor: appTheme.radioButtonChecked.color,
                            }
                        }
                    }
                }
            },

            MuiList: {
                styleOverrides: {
                    root: {
                        padding: 0,
                        backgroundColor: appTheme.list.backgroundColor
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
                        ...appTheme.listItem,
                        "&:hover": {
                            ...appTheme.listItem,
                        },
                        "&.Mui-selected": {
                            ...appTheme.listItemSelected,
                        },
                        "&.Mui-selected:hover": {
                            ...appTheme.listItemSelected,
                        },
                        "&.MuiListItemButton-divider:not(:last-child)": {
                            borderBottomColor: appTheme.divider.backgroundColor
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
                        ...appTheme.listItem,
                        padding: "3px 12px",
                        transition: "none",
                        "& .MuiListItemText-root": {
                            margin: 0,
                        },
                        "& .MuiListItemText-root span": {
                            // ...appTheme.listItemSelectedText
                        },
                        "&:hover": {
                            ...appTheme.listItem,
                        },
                        "&.Mui-selected": {
                            ...appTheme.listItemSelected,
                        },
                        "&.Mui-selected:hover": {
                            ...appTheme.listItemSelected,
                        },
                        "&.MuiListItemButton-divider:not(:last-child)": {
                            borderBottomColor: appTheme.divider.backgroundColor
                        }
                    }
                }
            },

            MuiListItemText: {
                // styleOverrides: {
                //     root: {
                //         // ...appTheme.listItem,
                //         margin: 0,
                //         "& span": {
                //             width: "fit-content",
                //         }
                //     }
                // }
            },

            MuiMenu: {
                styleOverrides: {
                    paper: {
                        backgroundColor: appTheme.menu.backgroundColor,
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
                        ...appTheme.listItem,
                        "&:hover": {
                            ...appTheme.listItem,
                        },
                        "&.Mui-selected": {
                            ...appTheme.listItemSelected,
                        },
                        "&.Mui-selected:hover": {
                            ...appTheme.listItemSelected,
                        },
                        "&.MuiListItemButton-divider:not(:last-child)": {
                            borderBottomColor: appTheme.divider.backgroundColor
                        }
                    }
                }
            },

            MuiSelect: {
                styleOverrides: {
                    select: {
                        "&.MuiInput-input:focus": {
                            color: appTheme.select.color,
                            backgroundColor: appTheme.select.backgroundColor
                        },
                        "&.MuiOutlinedInput-input:focus": {
                            color: appTheme.select.color,
                            backgroundColor: appTheme.select.backgroundColor
                        },
                        "&.MuiFilledInput-input:focus": {
                            color: appTheme.select.color,
                            backgroundColor: appTheme.select.backgroundColor
                        }
                    },
                    icon: {
                        color: appTheme.select.color
                    }
                }
            },

            MuiSlider: {
                styleOverrides: {
                    root: {
                        ...appTheme.sliderRail,
                    },
                    rail: {
                        opacity: 1,
                    },
                    track: {
                        display: "none"
                    },
                    thumb: {
                        ...appTheme.sliderThumb,
                        width:  "17px",
                        height: "17px",
                        borderStyle:    "solid",
                        borderWidth:    "2px",
                        boxShadow:      `0 0 0 2px ${appTheme.sliderThumb.color}`,
                        "&.Mui-active": {
                            ...appTheme.sliderThumbActive,
                            boxShadow:      `0 0 0 2px ${appTheme.sliderThumb.color}`,
                        },
                        "&.Mui-focusVisible": {
                            boxShadow:      `0 0 0 2px ${appTheme.sliderThumb.color}`,
                        },
                        "&:before": {
                            boxShadow:      "none",
                        },
                        "&:hover": {
                            boxShadow:      `0 0 0 2px ${appTheme.sliderThumb.color}`,
                        }
                    }
                }
            },

            MuiAppBar: {
                styleOverrides: {
                    root: {
                        ...appTheme.surface
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
                        ...appTheme.accordionIcon,
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
                        ...appTheme.tabsIndicator,
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
                        ...appTheme.tab,
                        minHeight: 0,
                        padding: "4px 6px",
                        "&.Mui-selected": {
                            ...appTheme.tabSelected,
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

            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        padding: "8px",
                        gap: "16px"
                    }
                }
            },

            MuiDialog: {

            },
            MuiDialogContent: {
                styleOverrides: {
                    root: ({ ownerState }) => ({
                        ...appTheme.surface,
                        ...(ownerState.dividers && {
                            borderTopColor: appTheme.divider.backgroundColor,
                            borderBottomColor: appTheme.divider.backgroundColor
                        })
                    })
                }
            },
            MuiDialogContentText: {
                styleOverrides: {
                    root: {
                        ...appTheme.surface
                    }
                }
            },

            MuiAlert: {
                styleOverrides: {
                    standard: {
                        ...appTheme.surface
                    },
                    standardSuccess: {
                        ...appTheme.alertSuccess
                    },
                    standardError: {
                        ...appTheme.alertError
                    },
                    outlined: {
                        ...appTheme.alertInfoOutlined
                    },
                    outlinedSuccess: {
                        ...appTheme.alertSuccessOutlined
                    },
                    outlinedError: {
                        ...appTheme.alertErrorOutlined
                    },
                    filled: {
                        ...appTheme.alertInfoFilled
                    },
                    filledSuccess: {
                        ...appTheme.alertSuccessFilled
                    },
                    filledError: {
                        ...appTheme.alertErrorFilled
                    },
                    icon: ({ ownerState }) => ({
                        "& .MuiSvgIcon-root": {
                            ...(ownerState.severity === "info" && {
                                ...(ownerState.variant === "standard" && {
                                    color: appTheme.alertInfo.color
                                }),
                                ...(ownerState.variant === "filled" && {
                                    color: appTheme.alertInfoFilled.color
                                }),
                                ...(ownerState.variant === "outlined" && {
                                    color: appTheme.alertInfoOutlined.color
                                })
                            }),
                            ...(ownerState.severity === "success" && {
                                ...(ownerState.variant === "standard" && {
                                    color: appTheme.alertSuccess.color
                                }),
                                ...(ownerState.variant === "filled" && {
                                    color: appTheme.alertSuccessFilled.color
                                }),
                                ...(ownerState.variant === "outlined" && {
                                    color: appTheme.alertSuccessOutlined.color
                                })
                            }),
                            ...(ownerState.severity === "error" && {
                                ...(ownerState.variant === "standard" && {
                                    color: appTheme.alertError.color
                                }),
                                ...(ownerState.variant === "filled" && {
                                    color: appTheme.alertErrorFilled.color
                                }),
                                ...(ownerState.variant === "outlined" && {
                                    color: appTheme.alertErrorOutlined.color
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
                        color: afterEffectsAppColor.icon
                    }
                }
            }
        }
    });
}

export const afterEffectsTheme = afterEffects();

export const useAfterEffectsTheme = (...params: Parameters<typeof afterEffects>) => {
    return useMemo(() => afterEffects(...params), [params]);
}