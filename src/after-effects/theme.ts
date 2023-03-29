import { CSSObject } from '@mui/styled-engine'
import deepmerge from "@mui/utils/deepmerge"

type BorderCss = Pick<CSSObject,
| "border"
| "borderTop"
| "borderRight"
| "borderBottom"
| "borderLeft"
| "borderColor"
| "borderTopColor"
| "borderRightColor"
| "borderBottomColor"
| "borderLeftColor"
| "borderStyle"
| "borderTopStyle"
| "borderRightStyle"
| "borderBottomStyle"
| "borderLeftStyle"
| "borderWidth"
| "borderTopWidth"
| "borderRightWidth"
| "borderBottomWidth"
| "borderLeftWidth"
| "borderRadius"
| "borderTopRightRadius"
| "borderBottomRightRadius"
| "borderBottomLeftRadius"
| "borderTopLeftRadius"
>
export type AfterEffectsAppTheme = Partial<{
    surface: Partial<{
        standard:       CSSObject["backgroundColor"];
        light:          CSSObject["backgroundColor"];
        hover:          CSSObject["backgroundColor"];
        selected:       CSSObject["backgroundColor"];
        cta:            CSSObject["backgroundColor"];
        input:          CSSObject["backgroundColor"];
        inputFocused:   CSSObject["backgroundColor"];
        divider:        CSSObject["backgroundColor"];
    }>;
    border: Partial<{
        button:     BorderCss;
        chip:       BorderCss;
        input:      BorderCss;
        disabled:   BorderCss;
    }>;
    text: Partial<{
        standard:   CSSObject["color"];
        light:      CSSObject["color"];
        dark:       CSSObject["color"];
        highlight:  CSSObject["color"];
        cta:        CSSObject["color"];
        disabled:   CSSObject["color"];
        size:       CSSObject["fontSize"];
        labelSize:  CSSObject["fontSize"];
    }>;
    common: Partial<{
        primary:    CSSObject["color"];
        danger:     CSSObject["color"];
        disabled:   CSSObject["opacity"];
        divider:    CSSObject["color"];
        icon:       CSSObject["color"];
    }>;
}>;

export const afterEffectsAppTheme: AfterEffectsAppTheme = {
    surface: {
        standard:       "#272727",
        light:          "#454545",
        hover:          "rgba(255, 255, 255, 0.05)",
        selected:       "#4C4C4C",
        cta:            "#E8E8E8",
        input:          "#161616",
        inputFocused:   "#E8E8E8",
        divider:        "#1F1F1F"
    },
    border: {
        button: {
            borderColor: "#A4A4A4",
        },
        chip: {
            borderColor: "#A4A4A4",
        },
        disabled: {
            borderColor: "#464646",
        },
        input: {
            borderColor: "#313131"
        },
    },
    text: {
        standard:   "#A4A4A4",
        light:      "#E4E4E4",
        dark:       "#808080",
        highlight:  "#278CE7",
        cta:        "#272727",
        disabled:   "#464646",
    },
    common: {
        primary:    "#288CE7",
        danger:     "#F53C3C",
        disabled:   0.38,
        divider:    "#181818",
        icon:       "#A4A4A4"
    }
}

export type AfterEffectsElementTheme = Partial<{
    accordion: CSSObject;
    accordionSummary: CSSObject;
    accordionSummaryExpanded: CSSObject;
    accordionIcon: CSSObject;
    accordionIconExpanded: CSSObject;
    alertInfo: CSSObject;
    alertInfoFilled: CSSObject;
    alertInfoOutlined: CSSObject;
    alertSuccess: CSSObject;
    alertSuccessFilled: CSSObject;
    alertSuccessOutlined: CSSObject;
    alertError: CSSObject;
    alertErrorFilled: CSSObject;
    alertErrorOutlined: CSSObject;
    breadcrumbs: CSSObject;
    breadcrumbsCollapse: CSSObject;
    breadcrumbsCollapseHover: CSSObject;
    breadcrumbsSeparator: CSSObject;
    breadcrumbsSeparatorHover: CSSObject;
    button: CSSObject;
    buttonPrimary: CSSObject;
    buttonDanger: CSSObject;
    buttonDangerContained: CSSObject;
    buttonDangerOutlined: CSSObject;
    buttonPrimaryContained: CSSObject;
    buttonPrimaryOutlined: CSSObject;
    buttonCta: CSSObject;
    buttonCtaHover: CSSObject;
    buttonDisabled: CSSObject;
    checkbox: CSSObject;
    checkboxHover: CSSObject;
    checkboxDisabled: CSSObject;
    chipCta: CSSObject;
    chipCtaHover: CSSObject;
    chipFilled: CSSObject;
    chipOutlined: CSSObject;
    chipDangerFilled: CSSObject;
    chipDangerOutlined: CSSObject;
    chipPrimaryFilled: CSSObject;
    chipPrimaryOutlined: CSSObject;
    dialog: CSSObject;
    dialogBackdrop: CSSObject;
    dialogTitle: CSSObject;
    dialogContent: CSSObject;
    dialogContentText: CSSObject;
    dialogActions: CSSObject;
    divider: CSSObject;
    drawer: CSSObject;
    formGroup: CSSObject;
    formLabel: CSSObject;
    formLabelFocused: CSSObject;
    formLabelDisabled: CSSObject;
    icon: CSSObject;
    iconButton: CSSObject;
    link: CSSObject;
    list: CSSObject;
    listItem: CSSObject;
    listItemHover: CSSObject;
    listItemSelected: CSSObject;
    listItemSelectedText: CSSObject;
    menu: CSSObject;
    menuItem: CSSObject;
    menuItemHover: CSSObject;
    menuItemSelected: CSSObject;
    paper: CSSObject;
    radioButton: CSSObject;
    radioButtonHover: CSSObject;
    radioButtonChecked: CSSObject;
    select: CSSObject;
    sliderThumb: CSSObject;
    sliderThumbActive: CSSObject;
    sliderRail: CSSObject;
    tab: CSSObject;
    tabSelected: CSSObject;
    tabs: CSSObject;
    tabsIndicator: CSSObject;
    textField: CSSObject;
    textFieldFocused: CSSObject;
    textFieldDisabled: CSSObject;
    textFieldLabel: CSSObject;
    textFieldLabelFocused: CSSObject;
    textFieldLabelDisabled: CSSObject;
    tooltip: CSSObject;
    toggleButton: CSSObject;
    toggleButtonSelected: CSSObject;
    toggleButtonIconSelected: CSSObject;
}>

const mergeElementTheme: (appTheme: Partial<AfterEffectsAppTheme>) => Required<AfterEffectsElementTheme> = (appTheme) => {
    const textField = {
        color: appTheme.text?.standard,
        backgroundColor: appTheme.surface?.input,
        fontSize: appTheme.text?.size,
        ...appTheme.border?.input
    }

    return {
        accordion: {

        },
        accordionSummary: {
            minHeight: 0,
            flexDirection: "row-reverse",
            color: appTheme.common?.icon,
            gap: "4px"
        },
        accordionSummaryExpanded: {
            minHeight: 0,
        },
        accordionIcon: {
            margin: 0,
            transition: "none",
            fontSize: "0.75rem"
        },
        accordionIconExpanded: {
            margin: 0,
        },
        alertInfo: {
            color: appTheme.text?.standard
        },
        alertInfoFilled: {
            color: appTheme.text?.cta,
            backgroundColor: appTheme.surface?.cta,
        },
        alertInfoOutlined: {
            color: appTheme.text?.standard,
            borderColor: appTheme.text?.standard,
        },
        alertSuccess: {
            color: appTheme.text?.highlight
        },
        alertSuccessFilled: {
            color: appTheme.text?.light,
            backgroundColor: appTheme.common?.primary,
        },
        alertSuccessOutlined: {
            color: appTheme.common?.primary,
            borderColor: appTheme.common?.primary,
        },
        alertError: {
            color: appTheme.common?.danger
        },
        alertErrorFilled: {
            color: appTheme.text?.light,
            backgroundColor: appTheme.common?.danger,
        },
        alertErrorOutlined: {
            color: appTheme.common?.danger,
            borderColor: appTheme.common?.danger,
        },
        breadcrumbs: {

        },
        breadcrumbsCollapse: {
            color: appTheme.text?.standard,
            backgroundColor: appTheme.surface?.standard,
        },
        breadcrumbsCollapseHover: {
            backgroundColor: appTheme.surface?.light,
        },
        breadcrumbsSeparator: {
            color: appTheme.text?.standard,
        },
        breadcrumbsSeparatorHover: {
            
        },
        button: {
            
        },
        buttonDanger: {
            color: appTheme.common?.danger,
            backgroundColor: "transparent",
        },
        buttonDangerContained: {
            color: appTheme.text?.light,
            backgroundColor: appTheme.common?.danger
        },
        buttonDangerOutlined: {
            color: appTheme.common?.danger,
            backgroundColor: "transparent",
            borderColor: appTheme.common?.danger
        },
        buttonPrimary: {
            color: appTheme.common?.primary,
            backgroundColor: "transparent",
        },
        buttonPrimaryContained: {
            color: appTheme.text?.light,
            backgroundColor: appTheme.common?.primary
        },
        buttonPrimaryOutlined: {
            color: appTheme.common?.primary,
            backgroundColor: "transparent",
            borderColor: appTheme.common?.primary
        },
        buttonCta: {
            color: appTheme.text?.standard,
            backgroundColor: "transparent",
            borderStyle: "solid",
            borderWidth: "1px",
            transition: "none",
            ...appTheme.border?.button,
        },
        buttonCtaHover: {
            color: appTheme.text?.cta,
            backgroundColor: appTheme.surface?.cta,
            borderColor: appTheme.surface?.cta
        },
        buttonDisabled: {
            color: appTheme.text?.disabled,
            backgroundColor: "transparent",
            ...appTheme.border?.disabled
        },
        checkbox: {
            color: appTheme.text?.standard,
        },
        checkboxHover: {
            color: appTheme.text?.light,
        },
        checkboxDisabled: {
            color: appTheme.text?.disabled,
        },
        chipCta: {
            color: appTheme.text?.standard,
            backgroundColor: "transparent",
            borderStyle: "solid",
            borderWidth: "1px",
            transition: "none",
            ...appTheme.border?.chip,
        },
        chipCtaHover: {
            color: appTheme.text?.cta,
            backgroundColor: appTheme.surface?.cta,
            borderColor: appTheme.text?.cta
        },
        chipFilled: {
            color: appTheme.text?.standard,
            backgroundColor: appTheme.surface?.light,
        },
        chipOutlined: {
            color: appTheme.text?.standard,
            backgroundColor: "transparent",
            borderColor: appTheme.text?.standard
        },
        chipDangerFilled: {
            color: appTheme.text?.light,
            backgroundColor: appTheme.common?.danger
        },
        chipDangerOutlined: {
            color: appTheme.common?.danger,
            backgroundColor: "transparent",
            borderColor: appTheme.common?.danger
        },
        chipPrimaryFilled: {
            color: appTheme.text?.light,
            backgroundColor: appTheme.common?.primary
        },
        chipPrimaryOutlined: {
            color: appTheme.common?.primary,
            backgroundColor: "transparent",
            borderColor: appTheme.common?.primary
        },
        dialog: {
            color: appTheme.text?.standard,
            backgroundColor: appTheme.surface?.standard
        },
        dialogBackdrop: {
            
        },
        dialogTitle: {

        },
        dialogContent: {

        },
        dialogContentText: {
            color: appTheme.text?.standard,
        },
        dialogActions: {

        },
        divider: {
            backgroundColor: appTheme.surface?.divider
        },
        drawer: {
            backgroundColor: appTheme.surface?.standard
        },
        formGroup: {
            gap: "4px"
        },
        formLabel: {
            color: appTheme.text?.standard,
            fontSize: appTheme.text?.labelSize
        },
        formLabelFocused: {
            color: appTheme.text?.standard,
        },
        formLabelDisabled: {
            color: appTheme.text?.disabled,
        },
        icon: {
            color: appTheme.common?.icon
        },
        iconButton: {
            padding: 0,
            color: appTheme.common?.icon,
        },
        link: {
            color: appTheme.text?.highlight,
        },
        list: {
            backgroundColor: appTheme.surface?.standard
        },
        listItem: {
            padding: "4px 12px",
            color: appTheme.text?.standard,
        },
        listItemHover: {
            backgroundColor: appTheme.surface?.hover
        },
        listItemSelected: {
            backgroundColor: appTheme.surface?.selected
        },
        listItemSelectedText: {
            color: appTheme.text?.cta,
            backgroundColor: appTheme.surface?.cta
        },
        menu: {
            backgroundColor: appTheme.surface?.standard
        },
        menuItem: {
            color: appTheme.text?.standard,
        },
        menuItemHover: {
            backgroundColor: appTheme.surface?.hover
        },
        menuItemSelected: {
            backgroundColor: appTheme.surface?.selected
        },
        radioButton: {
            color: appTheme.text?.standard,
        },
        radioButtonHover: {
            color: appTheme.text?.light,
        },
        radioButtonChecked: {
            color: appTheme.common?.primary,
        },
        select: {
            color: appTheme.text?.standard,
            backgroundColor: appTheme.surface?.input,
            ...appTheme.border?.input,
        },
        sliderThumb: {
            color:          appTheme.surface?.standard,
            borderColor:    "#8A8A8A",
        },
        sliderThumbActive: {
            color:          appTheme.common?.primary,
            borderColor:    appTheme.common?.primary
        },
        sliderRail: {
            color:          appTheme.surface?.light,
        },
        paper: {
            color: appTheme.text?.standard,
            backgroundColor: appTheme.surface?.standard,
        },
        tab: {
            color: appTheme.text?.dark,
        },
        tabSelected: {
            color: appTheme.text?.light,
        },
        tabs: {
    
        },
        tabsIndicator: {
            backgroundColor: appTheme.text?.light
        },
        textField,
        textFieldFocused: {
            ...textField,
            color: appTheme.text?.cta,
            backgroundColor: appTheme.surface?.inputFocused,
        },
        textFieldDisabled: {
            ...textField,
            color: appTheme.text?.disabled,
            backgroundColor: appTheme.surface?.input,
        },
        textFieldLabel: {
            color: appTheme.text?.standard,
        },
        textFieldLabelFocused: {
            color: appTheme.text?.cta,
        },
        textFieldLabelDisabled: {
            color: appTheme.text?.disabled,
        },
        tooltip: {
            backgroundColor: appTheme.surface?.light,
        },
        toggleButton: {
            color: appTheme.text?.standard,
            backgroundColor: appTheme.surface?.standard,
            // ...appTheme.border?.input
        },
        toggleButtonSelected: {
            color: appTheme.text?.highlight,
            backgroundColor: appTheme.surface?.input,
            ...appTheme.border?.input
        },
        toggleButtonIconSelected: {
            // color: appTheme.text?.highlight
        },
    }
}

export const afterEffectsElementTheme = (options?: {
    appTheme?: AfterEffectsAppTheme;
    elementTheme?: AfterEffectsElementTheme;
}) => {
    const _appTheme = deepmerge<AfterEffectsAppTheme>(afterEffectsAppTheme, options?.appTheme);
    const _elementTheme = mergeElementTheme(_appTheme);
    return {
        appTheme: _appTheme,
        elementTheme: deepmerge<AfterEffectsElementTheme>(_elementTheme, options?.elementTheme)
    }
}