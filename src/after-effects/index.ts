import { useMemo } from 'react'
import createTheme from '@mui/material/styles/createTheme'
import { PaletteColor } from '@mui/material/styles'
import { afterEffectsElementTheme } from './theme'
export { afterEffectsAppTheme } from './theme'
export { afterEffectsElementTheme }
export type { AfterEffectsAppTheme, AfterEffectsElementTheme } from './theme'

declare module "@mui/material/styles" {
    interface Palette {
        "adobe-primary"?: PaletteColor;
        "adobe-danger"?: PaletteColor;
    }
    interface PaletteOptions {
        "adobe-primary"?: PaletteColor;
        "adobe-danger"?: PaletteColor;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        "adobe-cta": true;
    }
    interface ButtonPropsColorOverrides {
        "adobe-primary":    true;
        "adobe-danger":     true;
    }
}

declare module '@mui/material/Chip' {
    interface ChipPropsVariantOverrides {
        "adobe-cta": true;
    }
    interface ChipPropsColorOverrides {
        "adobe-primary":    true;
        "adobe-danger":     true;
    }
}

const afterEffects = (...[params]: Parameters<typeof afterEffectsElementTheme>): ReturnType<typeof createTheme> => {
    const { appTheme, elementTheme } = afterEffectsElementTheme(params);
    const { palette } = createTheme();
    return createTheme({
        palette: {
            "adobe-primary": palette.augmentColor({
                color: {
                    main: appTheme?.common?.primary as string,
                }
            }),
            "adobe-danger": palette.augmentColor({
                color: {
                    main: appTheme?.common?.danger as string
                }
            })
        },
        typography: {
            allVariants: {
                fontSize: "0.85rem"
            }
        },
        components: {
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
                        ...elementTheme.accordionSummary,
                        "&.Mui-expanded": {
                            ...elementTheme.accordionSummaryExpanded
                        }
                    },
                    content: {
                        margin: 0,
                        "&.Mui-expanded": {
                            margin: 0,
                        }
                    },
                    expandIconWrapper: {
                        ...elementTheme.accordionIcon,
                        "&.Mui-expanded": {
                            ...elementTheme.accordionIconExpanded,
                            // transform: "rotate(90deg)",
                        },
                        "& .MuiSvgIcon-root": {
                            fontSize: "inherit"
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
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        ...elementTheme.paper
                    }
                }
            },
            MuiAlert: {
                styleOverrides: {
                    standard: {
                        ...elementTheme.paper
                    },
                    standardSuccess: {
                        ...elementTheme.alertSuccess
                    },
                    standardError: {
                        ...elementTheme.alertError
                    },
                    outlined: {
                        ...elementTheme.alertInfoOutlined
                    },
                    outlinedSuccess: {
                        ...elementTheme.alertSuccessOutlined
                    },
                    outlinedError: {
                        ...elementTheme.alertErrorOutlined
                    },
                    filled: {
                        ...elementTheme.alertInfoFilled
                    },
                    filledSuccess: {
                        ...elementTheme.alertSuccessFilled
                    },
                    filledError: {
                        ...elementTheme.alertErrorFilled
                    },
                    icon: ({ ownerState }) => ({
                        "& .MuiSvgIcon-root": {
                            ...(ownerState.severity === "info" && {
                                ...(ownerState.variant === "standard" && {
                                    color: elementTheme.alertInfo?.color
                                }),
                                ...(ownerState.variant === "filled" && {
                                    color: elementTheme.alertInfoFilled?.color
                                }),
                                ...(ownerState.variant === "outlined" && {
                                    color: elementTheme.alertInfoOutlined?.color
                                })
                            }),
                            ...(ownerState.severity === "success" && {
                                ...(ownerState.variant === "standard" && {
                                    color: elementTheme.alertSuccess?.color
                                }),
                                ...(ownerState.variant === "filled" && {
                                    color: elementTheme.alertSuccessFilled?.color
                                }),
                                ...(ownerState.variant === "outlined" && {
                                    color: elementTheme.alertSuccessOutlined?.color
                                })
                            }),
                            ...(ownerState.severity === "error" && {
                                ...(ownerState.variant === "standard" && {
                                    color: elementTheme.alertError?.color
                                }),
                                ...(ownerState.variant === "filled" && {
                                    color: elementTheme.alertErrorFilled?.color
                                }),
                                ...(ownerState.variant === "outlined" && {
                                    color: elementTheme.alertErrorOutlined?.color
                                })
                            })
                        }
                        
                    })
                }
            },
            MuiAlertTitle: {

            },
            MuiBreadcrumbs: {
                styleOverrides: {
                    root: {
                        "& li > button": {
                            ...elementTheme.breadcrumbsCollapse
                        },
                        "& li > button:hover": {
                            ...elementTheme.breadcrumbsCollapseHover
                        }
                    },
                    separator: {
                        ...elementTheme.breadcrumbsSeparator,
                        "&:hover": {
                            ...elementTheme.breadcrumbsSeparatorHover,
                        }
                    }
                }
            },
            MuiButton: {
                variants: [
                    {
                        props: { color: "adobe-primary" },
                        style: {}
                    },
                    {
                        props: { color: "adobe-danger" },
                        style: {}
                    },
                    {
                        props: { variant: "adobe-cta" },
                        style: {}
                    }
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
                        ...(ownerState.variant === "adobe-cta" && {
                            ...elementTheme.buttonCta,
                            "&:hover": {
                                ...elementTheme.buttonCtaHover,
                            }
                        }),
                        ...(ownerState.variant === "contained" && {
                            ...(ownerState.color === "adobe-primary" && {
                                ...elementTheme.buttonPrimaryContained,
                                "&:hover": {
                                    ...elementTheme.buttonPrimaryContained
                                }
                            }),
                            ...(ownerState.color === "adobe-danger" && {
                                ...elementTheme.buttonDangerContained,
                                "&:hover": {
                                    ...elementTheme.buttonDangerContained
                                }
                            })
                        }),
                        ...(ownerState.variant === "outlined" && {
                            borderStyle: "solid",
                            borderWidth: "1px",

                            ...(ownerState.color === "adobe-primary" && {
                                ...elementTheme.buttonPrimaryOutlined,
                                "&:hover": {
                                    ...elementTheme.buttonPrimaryOutlined,
                                }
                            }),
                            ...(ownerState.color === "adobe-danger" && {
                                ...elementTheme.buttonDangerOutlined,
                                "&:hover": {
                                    ...elementTheme.buttonDangerOutlined,
                                }
                            })
                        }),
                        ...(ownerState.variant === "text" && {
                            ...(ownerState.color === "adobe-primary" && {
                                ...elementTheme.buttonPrimary,
                                "&:hover": {
                                    ...elementTheme.buttonPrimary,
                                }
                            }),
                            ...(ownerState.color === "adobe-danger" && {
                                ...elementTheme.buttonDanger,
                                "&:hover": {
                                    ...elementTheme.buttonDanger,
                                }
                            })
                        }),
                        "&.Mui-disabled": {
                            ...elementTheme.buttonDisabled,
                            borderStyle: "solid",
                            borderWidth: "1px",
                        }
                    }),
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
                            ...elementTheme.checkbox,
                        },
                        "&:hover .MuiSvgIcon-root": {
                            ...elementTheme.checkboxHover,
                        },
                        "&.Mui-checked:hover .MuiSvgIcon-root": {
                            ...elementTheme.checkboxHover,
                        },
                        "&.Mui-disabled .MuiSvgIcon-root": {
                            ...elementTheme.checkboxDisabled,
                        }
                    }
                }
            },
            MuiChip: {
                variants: [
                    {
                        props: { color: "adobe-primary" },
                        style: {}
                    },
                    {
                        props: { color: "adobe-danger" },
                        style: {}
                    },
                    {
                        props: { variant: "adobe-cta" },
                        style: {}
                    }
                ],
                styleOverrides: {
                    root: ({ ownerState }) => ({
                        ...elementTheme.chipFilled,
                        "& .MuiChip-deleteIcon": {
                            color: appTheme.text?.light
                        },
                        "& .MuiChip-deleteIcon:hover": {
                            color: appTheme.text?.light
                        },
                        ...(ownerState.variant === "adobe-cta" && {
                            ...elementTheme.chipCta,
                            "&:hover": {
                                ...elementTheme.chipCtaHover,
                            },
                            "&:hover .MuiChip-deleteIcon": {
                                color: elementTheme.chipCtaHover?.color
                            },
                            "&:hover .MuiChip-deleteIcon:hover": {
                                color: elementTheme.chipCtaHover?.color
                            },
                        })
                    }),
                    filled: ({ ownerState }) => ({
                        ...elementTheme.chipFilled,
                        "& .MuiChip-deleteIcon": {
                            color: appTheme.text?.light
                        },
                        "& .MuiChip-deleteIcon:hover": {
                            color: appTheme.text?.light
                        },
                        ...(ownerState.color === "adobe-primary" && {
                            ...elementTheme.chipPrimaryFilled,
                        }),
                        ...(ownerState.color === "adobe-danger" && {
                            ...elementTheme.chipDangerFilled,
                        })
                    }),
                    outlined: ({ ownerState }) => ({
                        ...elementTheme.chipOutlined,
                        "& .MuiChip-deleteIcon": {
                            color: appTheme.text?.light
                        },
                        "& .MuiChip-deleteIcon:hover": {
                            color: appTheme.text?.light
                        },
                        ...(ownerState.color === "adobe-primary" && {
                            ...elementTheme.chipPrimaryOutlined,
                        }),
                        ...(ownerState.color === "adobe-danger" && {
                            ...elementTheme.chipDangerOutlined,
                        }),

                    }),
                }
            },
            MuiDialog: {
                styleOverrides: {
                    root: {
                        ...elementTheme.dialogBackdrop
                    },
                    paper: {
                        ...elementTheme.dialog
                    },
                }
            },       
            MuiDialogContent: {
                styleOverrides: {
                    root: ({ ownerState }) => ({
                        ...elementTheme.dialogContent,
                        ...(ownerState.dividers && {
                            borderTopColor: elementTheme.divider?.backgroundColor,
                            borderBottomColor: elementTheme.divider?.backgroundColor
                        })
                    })
                }
            },
            MuiDialogContentText: {
                styleOverrides: {
                    root: {
                        ...elementTheme.dialogContentText
                    }
                }
            },
            MuiDialogActions: {
                styleOverrides: {
                    root: {
                        ...elementTheme.dialogActions
                    }
                }
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        ...elementTheme.divider,
                    }
                }
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        padding:    "8px",
                        gap:        "16px",
                        ...elementTheme.drawer,
                    }
                }
            },
            MuiFilledInput: {
                defaultProps: {
                    disableUnderline: true,
                }
            },
            MuiFormGroup: {
                styleOverrides: {
                    root: {
                        ...elementTheme.formGroup
                    }
                }
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        ...elementTheme.formLabel,
                        "&.Mui-focused": {
                            ...elementTheme.formLabelFocused,
                        },
                        "&.Mui-disabled": {
                            ...elementTheme.formLabelDisabled,
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
                        ...elementTheme.textField,
                        padding: "3px 8px",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        borderRadius: "4px",
                        "&:focus": {
                            ...elementTheme.textFieldFocused,
                            ...(ownerState.readOnly && {
                                ...elementTheme.textField,
                            }),
                        },
                        "&.Mui-disabled": {
                            ...elementTheme.textFieldDisabled,
                            WebkitTextFillColor: elementTheme.textFieldDisabled?.color
                        },
                    })
                }
            },
            MuiInput: {
                defaultProps: {
                    disableUnderline: true,
                }
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        ...elementTheme.iconButton
                    }
                }
            },
            MuiLink: {
                styleOverrides: {
                    root: {
                        cursor: "pointer",
                        ...elementTheme.link
                    }
                }
            },
            MuiList: {
                styleOverrides: {
                    root: {
                        padding: 0,
                        ...elementTheme.list
                        // backgroundColor: theme.list?.backgroundColor
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
                        ...elementTheme.listItem,
                        "&:hover": {
                            ...elementTheme.listItemHover,
                        },
                        "&.Mui-selected": {
                            ...elementTheme.listItemSelected,
                        },
                        "&.Mui-selected:hover": {
                            ...elementTheme.listItemSelected,
                        },
                        "&.MuiListItemButton-divider:not(:last-child)": {
                            ...elementTheme.divider
                            // borderBottomColor: theme.divider?.backgroundColor
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
                        ...elementTheme.listItem,
                        transition: "none",
                        "& .MuiListItemText-root": {
                            margin: 0,
                        },
                        "& .MuiListItemText-root span": {
                            
                        },
                        "&:hover": {
                            ...elementTheme.listItemHover,
                        },
                        "&.Mui-selected": {
                            ...elementTheme.listItemSelected,
                        },
                        "&.Mui-selected:hover": {
                            ...elementTheme.listItemSelected,
                        },
                        "&.MuiListItemButton-divider:not(:last-child)": {
                            borderBottomColor: elementTheme.divider?.backgroundColor
                        }
                    }
                }
            },
            MuiMenu: {
                styleOverrides: {
                    paper: {
                        ...elementTheme.menu
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
                        ...elementTheme.listItem,
                        "&:hover": {
                            ...elementTheme.menuItemHover,
                        },
                        "&.Mui-selected": {
                            ...elementTheme.menuItemSelected,
                        },
                        "&.Mui-selected.Mui-focusVisible": {
                            ...elementTheme.menuItemSelected,
                        },
                        "&.Mui-selected:hover": {
                            ...elementTheme.menuItemSelected,
                        },
                        "&:not(:last-child)": {
                            borderBottomColor: elementTheme.divider?.backgroundColor
                        }
                    },
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
            MuiPaper: {
                defaultProps: {
                    elevation: 0
                },
                styleOverrides: {
                    root: {
                        ...elementTheme.paper,
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
                            borderColor: elementTheme.radioButton?.color,
                        }
                        return {
                            padding: "2px",
                            "& .MuiSvgIcon-root": {
                                visibility: "hidden"
                            },
                            "&:after": after,
                            "&:hover:after": {
                                ...after,
                                borderColor: elementTheme.radioButtonHover?.color,
                            },
                            "&.Mui-checked:after": {
                                ...after,
                                backgroundColor: elementTheme.radioButtonChecked?.color,
                                borderColor: elementTheme.radioButtonChecked?.color,
                            }
                        }
                    }
                }
            },
            MuiSelect: {
                styleOverrides: {
                    select: {
                        "&.MuiInput-input:focus": {
                            // color: theme.select?.color,
                            // backgroundColor: theme.select?.backgroundColor
                            ...elementTheme.select
                        },
                        "&.MuiOutlinedInput-input:focus": {
                            // color: theme.select?.color,
                            // backgroundColor: theme.select?.backgroundColor
                            ...elementTheme.select
                        },
                        "&.MuiFilledInput-input:focus": {
                            // color: theme.select?.color,
                            // backgroundColor: theme.select?.backgroundColor
                            ...elementTheme.select
                        }
                    },
                    icon: {
                        ...elementTheme.select,
                        // color: theme.select?.color
                    }
                }
            },
            MuiSlider: {
                styleOverrides: {
                    root: {
                        ...elementTheme.sliderRail,
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
                        borderStyle:    "solid",
                        borderWidth:    "2px",
                        boxShadow:      `0 0 0 2px ${elementTheme.sliderThumb?.color}`,
                        ...elementTheme.sliderThumb,
                        "&.Mui-active": {
                            boxShadow:      `0 0 0 2px ${elementTheme.sliderThumb?.color}`,
                            ...elementTheme.sliderThumbActive,
                        },
                        "&.Mui-focusVisible": {
                            boxShadow:      `0 0 0 2px ${elementTheme.sliderThumb?.color}`,
                        },
                        "&:before": {
                            boxShadow:      "none",
                        },
                        "&:hover": {
                            boxShadow:      `0 0 0 2px ${elementTheme.sliderThumb?.color}`,
                        }
                    }
                }
            },
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        ...elementTheme?.icon
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
                        ...elementTheme.tab,
                        "&.Mui-selected": {
                            ...elementTheme.tabSelected,
                        }
                    },
                }
            },
            MuiTabs: {
                styleOverrides: {
                    root: {
                        minHeight: 0
                    },
                    indicator: {
                        transition: "none",
                        ...elementTheme.tabsIndicator,
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: ({ ownerState }) => ({
                        "& .MuiInputLabel-root": {
                            ...elementTheme.textFieldLabel
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            ...(!ownerState.InputProps?.readOnly && {
                                ...elementTheme.textFieldLabelFocused
                            })
                        },
                        "& .MuiInputLabel-root.Mui-disabled": {
                            ...elementTheme.textFieldLabelDisabled
                        },
                        ...(ownerState.variant === "standard" && {
                            "& .MuiInputLabel-root.Mui-focused": {
                                ...elementTheme.textFieldLabel
                            }
                        })
                    })
                }
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        ...elementTheme.tooltip
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
                        ...elementTheme.toggleButton,
                        "&.Mui-selected": {
                            borderStyle: "solid",
                            borderWidth: "1px",
                            ...elementTheme.toggleButtonSelected,
                        },
                        "&.Mui-selected *": {
                            ...elementTheme.toggleButtonSelected
                        }
                    }
                }
            },
        }
    });
}

export const afterEffectsTheme = afterEffects();

export const useAfterEffectsTheme = (...params: Parameters<typeof afterEffects>) => {
    return useMemo(() => afterEffects(...params), [params]);
}