const surface               = "#272727" as const;
const surfaceSelected       = "#4C4C4C" as const
const surfaceHover          = "#E8E8E8" as const;
const surfaceCta            = "#E8E8E8";
const text                  = "#A4A4A4" as const;
const textLight             = "#E4E4E4" as const;
const textHighlight         = "#278CE7" as const;
const textCta               = "#272727" as const;
const textDisabled          = "#464646" as const;
const inputSurface          = "#161616" as const;
const inputSurfaceFocused   = surfaceHover;
const inputBorder           = "#313131" as const;
const primary               = "#288CE7" as const;
const danger                = "#F53C3C" as const;
const divider               = "#1F1F1F" as const;
const icon                  = text;

export const afterEffectsAppColor = {
    surface,
    surfaceSelected,
    surfaceHover,
    surfaceCta,
    text,
    textLight,
    textHighlight,
    textCta,
    textDisabled,
    inputSurface,
    inputSurfaceFocused,
    inputBorder,
    primary,
    danger,
    divider,
    icon
}

export const afterEffectsElementColor = (appColor?: Partial<typeof afterEffectsAppColor>) => {
    const color = { ...afterEffectsAppColor, ...appColor }
    return {
        surface: {
            color: color.text,
            backgroundColor: color.surface
        },
        divider: {
            backgroundColor: color.divider
        },
        textField: {
            color: color.text,
            backgroundColor: color.inputSurface,
            borderColor: color.inputBorder,
        },
        textFieldFocused: {
            color: color.textCta,
            backgroundColor: color.inputSurfaceFocused,
            borderColor: color.inputBorder,
        },
        textFieldDisabled: {
            color: color.textDisabled,
            backgroundColor: color.inputSurface,
            borderColor: color.inputBorder,
        },
        textFieldLabel: {
            color: color.text,
        },
        textFieldLabelFocused: {
            color: color.textCta,
        },
        textFieldLabelDisabled: {
            color: color.textDisabled,
        },
        button: {
            
        },
        buttonPrimaryContained: {
            color: color.textLight,
            backgroundColor: color.primary
        },
        buttonDangerContained: {
            color: color.textLight,
            backgroundColor: color.danger
        },
        buttonPrimaryOutlined: {
            color: color.primary,
            borderColor: color.primary
        },
        buttonDangerOutlined: {
            color: color.danger,
            borderColor: color.danger
        },
        buttonCta: {
            color: color.text,
            backgroundColor: color.surface,
            borderColor: color.text,
        },
        buttonCtaHover: {
            color: color.textCta,
            backgroundColor: color.surfaceHover,
            borderColor: color.surfaceHover,
        },
        buttonDisabled: {
            color: color.textDisabled,
            backgroundColor: "transparent",
            borderColor: color.textDisabled,
        },
        toggleButton: {
    
        },
        toggleButtonSelected: {
            backgroundColor: color.inputSurface,
            borderColor: color.inputBorder
        },
        toggleButtonIconSelected: {
            color: color.textHighlight
        },
        checkbox: {
            color: color.text,
        },
        checkboxHover: {
            color: color.textLight,
        },
        checkboxDisabled: {
            color: color.textDisabled,
        },
        radioButton: {
            color: color.text,
        },
        radioButtonHover: {
            color: color.textLight,
        },
        radioButtonChecked: {
            color: color.primary,
        },
        list: {
            backgroundColor: color.surface
        },
        listItem: {
            color: text,
            backgroundColor: color.surface
        },
        listItemSelected: {
            color: text,
            backgroundColor: color.surfaceSelected
        },
        listItemSelectedText: {
            color: textCta,
            backgroundColor: color.surfaceCta
        },
        menu: {
            backgroundColor: color.surface
        },
        menuItem: {
            color: color.text,
            backgroundColor: color.surface
        },
        select: {
            color: color.text,
            backgroundColor: color.inputSurface,
            borderColor: color.inputBorder,
        },
        sliderThumb: {
            color:          color.surface,
            borderColor:    "#8A8A8A",
        },
        sliderThumbActive: {
            color:          color.primary,
            borderColor:    color.primary,
        },
        sliderRail: {
            color:          "#454545",
        },
        tabs: {
    
        },
        tabsIndicator: {
            backgroundColor: color.textLight
        },
        tab: {
            color: color.text,
        },
        tabSelected: {
            color: color.textLight,
        },
        accordion: {
    
        },
        accordionIcon: {
            color: color.icon
        },
        alertInfo: {
            color: color.text
        },
        alertInfoFilled: {
            color: color.textCta,
            backgroundColor: color.surfaceCta,
        },
        alertInfoOutlined: {
            color: color.text,
            borderColor: color.text,
        },
        alertSuccess: {
            color: color.textHighlight
        },
        alertSuccessFilled: {
            color: color.textLight,
            backgroundColor: color.primary,
        },
        alertSuccessOutlined: {
            color: color.primary,
            borderColor: color.primary,
        },
        alertError: {
            color: color.danger
        },
        alertErrorFilled: {
            color: color.textLight,
            backgroundColor: color.danger,
        },
        alertErrorOutlined: {
            color: color.danger,
            borderColor: color.danger,
        }
    }   
};