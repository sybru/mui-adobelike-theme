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

export const AfterEffectElementColor = {
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

const AfterEffects = {
    surface: {
        color: text,
        backgroundColor: surface
    },
    divider: {
        backgroundColor: divider
    },
    textField: {
        color: text,
        backgroundColor: inputSurface,
        borderColor: inputBorder,
    },
    textFieldFocused: {
        color: textCta,
        backgroundColor: inputSurfaceFocused,
        borderColor: inputBorder,
    },
    textFieldDisabled: {
        color: textDisabled,
        backgroundColor: inputSurface,
        borderColor: inputBorder,
    },
    textFieldLabel: {
        color: text,
    },
    textFieldLabelFocused: {
        color: textCta,
    },
    textFieldLabelDisabled: {
        color: textDisabled,
    },
    button: {
        
    },
    buttonPrimaryContained: {
        color: textLight,
        backgroundColor: primary
    },
    buttonDangerContained: {
        color: textLight,
        backgroundColor: danger
    },
    buttonPrimaryOutlined: {
        color: primary,
        borderColor: primary
    },
    buttonDangerOutlined: {
        color: danger,
        borderColor: danger
    },
    buttonCta: {
        color: text,
        backgroundColor: surface,
        borderColor: text,
    },
    buttonCtaHover: {
        color: textCta,
        backgroundColor: surfaceHover,
        borderColor: surfaceHover,
    },
    buttonDisabled: {
        color: textDisabled,
        backgroundColor: "transparent",
        borderColor: textDisabled,
    },
    toggleButton: {

    },
    toggleButtonSelected: {
        backgroundColor: inputSurface,
        borderColor: inputBorder
    },
    toggleButtonIconSelected: {
        color: textHighlight
    },
    checkbox: {
        color: text,
    },
    checkboxHover: {
        color: textLight,
    },
    checkboxDisabled: {
        color: textDisabled,
    },
    radioButton: {
        color: text,
    },
    radioButtonHover: {
        color: textLight,
    },
    radioButtonChecked: {
        color: primary,
    },
    list: {
        backgroundColor: surface
    },
    listItem: {
        color: text,
        backgroundColor: surface
    },
    listItemSelected: {
        color: text,
        backgroundColor: surfaceSelected
    },
    listItemButton: {
        color: text,
        backgroundColor: surface
    },
    listItemButtonSelected: {
        color: text,
        backgroundColor: surfaceSelected
    },
    menu: {
        backgroundColor: surface
    },
    menuItem: {
        color: text,
        backgroundColor: surface
    },
    select: {
        color: text,
        backgroundColor: inputSurface,
        borderColor: inputBorder,
    },
    sliderThumb: {
        color:          surface,
        borderColor:    "#8A8A8A",
    },
    sliderThumbActive: {
        color:          primary,
        borderColor:    primary,
    },
    sliderRail: {
        color:          "#454545",
    },
    tabs: {

    },
    tabsIndicator: {
        backgroundColor: textLight
    },
    tab: {
        color: text,
    },
    tabSelected: {
        color: textLight,
    },
    accordion: {

    },
    accordionIcon: {
        color: icon
    },
    alertInfo: {
        color: AfterEffectElementColor.text
    },
    alertInfoFilled: {
        color: AfterEffectElementColor.textCta,
        backgroundColor: AfterEffectElementColor.surfaceCta,
    },
    alertInfoOutlined: {
        color: AfterEffectElementColor.text,
        borderColor: AfterEffectElementColor.text,
    },
    alertSuccess: {
        color: AfterEffectElementColor.textHighlight
    },
    alertSuccessFilled: {
        color: AfterEffectElementColor.textLight,
        backgroundColor: AfterEffectElementColor.primary,
    },
    alertSuccessOutlined: {
        color: AfterEffectElementColor.primary,
        borderColor: AfterEffectElementColor.primary,
    },
    alertError: {
        color: AfterEffectElementColor.danger
    },
    alertErrorFilled: {
        color: AfterEffectElementColor.textLight,
        backgroundColor: AfterEffectElementColor.danger,
    },
    alertErrorOutlined: {
        color: AfterEffectElementColor.danger,
        borderColor: AfterEffectElementColor.danger,
    }
} as const;

export const Color = {
    AfterEffects
}