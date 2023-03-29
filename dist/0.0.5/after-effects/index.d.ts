import { PaletteColor } from '@mui/material/styles';
import { afterEffectsElementTheme } from './theme';
export { afterEffectsAppTheme } from './theme';
export { afterEffectsElementTheme };
export type { AfterEffectsAppTheme, AfterEffectsElementTheme } from './theme';
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
        "adobe-primary": true;
        "adobe-danger": true;
    }
}
declare module '@mui/material/Chip' {
    interface ChipPropsVariantOverrides {
        "adobe-cta": true;
    }
    interface ChipPropsColorOverrides {
        "adobe-primary": true;
        "adobe-danger": true;
    }
}
export declare const afterEffectsTheme: import("@mui/material/styles").Theme;
export declare const useAfterEffectsTheme: (options?: {
    appTheme?: Partial<{
        surface: Partial<{
            standard: string[] | import("csstype").Property.BackgroundColor | import("csstype").Property.BackgroundColor[] | undefined;
            light: string[] | import("csstype").Property.BackgroundColor | import("csstype").Property.BackgroundColor[] | undefined;
            hover: string[] | import("csstype").Property.BackgroundColor | import("csstype").Property.BackgroundColor[] | undefined;
            selected: string[] | import("csstype").Property.BackgroundColor | import("csstype").Property.BackgroundColor[] | undefined;
            cta: string[] | import("csstype").Property.BackgroundColor | import("csstype").Property.BackgroundColor[] | undefined;
            input: string[] | import("csstype").Property.BackgroundColor | import("csstype").Property.BackgroundColor[] | undefined;
            inputFocused: string[] | import("csstype").Property.BackgroundColor | import("csstype").Property.BackgroundColor[] | undefined;
            divider: string[] | import("csstype").Property.BackgroundColor | import("csstype").Property.BackgroundColor[] | undefined;
        }>;
        border: Partial<{
            button: {
                borderBottomColor?: string[] | import("csstype").Property.BorderBottomColor | import("csstype").Property.BorderBottomColor[] | undefined;
                borderBottomLeftRadius?: (string | (string & {}))[] | import("csstype").Property.BorderBottomLeftRadius<string | number> | NonNullable<import("csstype").Property.BorderBottomLeftRadius<string | number> | undefined>[] | undefined;
                borderBottomRightRadius?: (string | (string & {}))[] | import("csstype").Property.BorderBottomRightRadius<string | number> | NonNullable<import("csstype").Property.BorderBottomRightRadius<string | number> | undefined>[] | undefined;
                borderBottomStyle?: import("csstype").Property.BorderBottomStyle | NonNullable<import("csstype").Property.BorderBottomStyle | undefined>[] | import("csstype").Property.BorderBottomStyle[] | undefined;
                borderBottomWidth?: string[] | import("csstype").Property.BorderBottomWidth<string | number> | NonNullable<import("csstype").Property.BorderBottomWidth<string | number> | undefined>[] | undefined;
                borderLeftColor?: string[] | import("csstype").Property.BorderLeftColor | import("csstype").Property.BorderLeftColor[] | undefined;
                borderLeftStyle?: import("csstype").Property.BorderLeftStyle | NonNullable<import("csstype").Property.BorderLeftStyle | undefined>[] | import("csstype").Property.BorderLeftStyle[] | undefined;
                borderLeftWidth?: string[] | import("csstype").Property.BorderLeftWidth<string | number> | NonNullable<import("csstype").Property.BorderLeftWidth<string | number> | undefined>[] | undefined;
                borderRightColor?: string[] | import("csstype").Property.BorderRightColor | import("csstype").Property.BorderRightColor[] | undefined;
                borderRightStyle?: import("csstype").Property.BorderRightStyle | NonNullable<import("csstype").Property.BorderRightStyle | undefined>[] | import("csstype").Property.BorderRightStyle[] | undefined;
                borderRightWidth?: string[] | import("csstype").Property.BorderRightWidth<string | number> | NonNullable<import("csstype").Property.BorderRightWidth<string | number> | undefined>[] | undefined;
                borderTopColor?: string[] | import("csstype").Property.BorderTopColor | import("csstype").Property.BorderTopColor[] | undefined;
                borderTopLeftRadius?: (string | (string & {}))[] | import("csstype").Property.BorderTopLeftRadius<string | number> | NonNullable<import("csstype").Property.BorderTopLeftRadius<string | number> | undefined>[] | undefined;
                borderTopRightRadius?: (string | (string & {}))[] | import("csstype").Property.BorderTopRightRadius<string | number> | NonNullable<import("csstype").Property.BorderTopRightRadius<string | number> | undefined>[] | undefined;
                borderTopStyle?: import("csstype").Property.BorderTopStyle | NonNullable<import("csstype").Property.BorderTopStyle | undefined>[] | import("csstype").Property.BorderTopStyle[] | undefined;
                borderTopWidth?: string[] | import("csstype").Property.BorderTopWidth<string | number> | NonNullable<import("csstype").Property.BorderTopWidth<string | number> | undefined>[] | undefined;
                border?: (string | (string & {}))[] | import("csstype").Property.Border<string | number> | NonNullable<import("csstype").Property.Border<string | number> | undefined>[] | undefined;
                borderBottom?: (string | (string & {}))[] | import("csstype").Property.BorderBottom<string | number> | NonNullable<import("csstype").Property.BorderBottom<string | number> | undefined>[] | undefined;
                borderColor?: string[] | import("csstype").Property.BorderColor | import("csstype").Property.BorderColor[] | undefined;
                borderLeft?: (string | (string & {}))[] | import("csstype").Property.BorderLeft<string | number> | NonNullable<import("csstype").Property.BorderLeft<string | number> | undefined>[] | undefined;
                borderRadius?: (string | (string & {}))[] | import("csstype").Property.BorderRadius<string | number> | NonNullable<import("csstype").Property.BorderRadius<string | number> | undefined>[] | undefined;
                borderRight?: (string | (string & {}))[] | import("csstype").Property.BorderRight<string | number> | NonNullable<import("csstype").Property.BorderRight<string | number> | undefined>[] | undefined;
                borderStyle?: string[] | import("csstype").Property.BorderStyle | import("csstype").Property.BorderStyle[] | undefined;
                borderTop?: (string | (string & {}))[] | import("csstype").Property.BorderTop<string | number> | NonNullable<import("csstype").Property.BorderTop<string | number> | undefined>[] | undefined;
                borderWidth?: (string | (string & {}))[] | import("csstype").Property.BorderWidth<string | number> | NonNullable<import("csstype").Property.BorderWidth<string | number> | undefined>[] | undefined;
            };
            chip: {
                borderBottomColor?: string[] | import("csstype").Property.BorderBottomColor | import("csstype").Property.BorderBottomColor[] | undefined;
                borderBottomLeftRadius?: (string | (string & {}))[] | import("csstype").Property.BorderBottomLeftRadius<string | number> | NonNullable<import("csstype").Property.BorderBottomLeftRadius<string | number> | undefined>[] | undefined;
                borderBottomRightRadius?: (string | (string & {}))[] | import("csstype").Property.BorderBottomRightRadius<string | number> | NonNullable<import("csstype").Property.BorderBottomRightRadius<string | number> | undefined>[] | undefined;
                borderBottomStyle?: import("csstype").Property.BorderBottomStyle | NonNullable<import("csstype").Property.BorderBottomStyle | undefined>[] | import("csstype").Property.BorderBottomStyle[] | undefined;
                borderBottomWidth?: string[] | import("csstype").Property.BorderBottomWidth<string | number> | NonNullable<import("csstype").Property.BorderBottomWidth<string | number> | undefined>[] | undefined;
                borderLeftColor?: string[] | import("csstype").Property.BorderLeftColor | import("csstype").Property.BorderLeftColor[] | undefined;
                borderLeftStyle?: import("csstype").Property.BorderLeftStyle | NonNullable<import("csstype").Property.BorderLeftStyle | undefined>[] | import("csstype").Property.BorderLeftStyle[] | undefined;
                borderLeftWidth?: string[] | import("csstype").Property.BorderLeftWidth<string | number> | NonNullable<import("csstype").Property.BorderLeftWidth<string | number> | undefined>[] | undefined;
                borderRightColor?: string[] | import("csstype").Property.BorderRightColor | import("csstype").Property.BorderRightColor[] | undefined;
                borderRightStyle?: import("csstype").Property.BorderRightStyle | NonNullable<import("csstype").Property.BorderRightStyle | undefined>[] | import("csstype").Property.BorderRightStyle[] | undefined;
                borderRightWidth?: string[] | import("csstype").Property.BorderRightWidth<string | number> | NonNullable<import("csstype").Property.BorderRightWidth<string | number> | undefined>[] | undefined;
                borderTopColor?: string[] | import("csstype").Property.BorderTopColor | import("csstype").Property.BorderTopColor[] | undefined;
                borderTopLeftRadius?: (string | (string & {}))[] | import("csstype").Property.BorderTopLeftRadius<string | number> | NonNullable<import("csstype").Property.BorderTopLeftRadius<string | number> | undefined>[] | undefined;
                borderTopRightRadius?: (string | (string & {}))[] | import("csstype").Property.BorderTopRightRadius<string | number> | NonNullable<import("csstype").Property.BorderTopRightRadius<string | number> | undefined>[] | undefined;
                borderTopStyle?: import("csstype").Property.BorderTopStyle | NonNullable<import("csstype").Property.BorderTopStyle | undefined>[] | import("csstype").Property.BorderTopStyle[] | undefined;
                borderTopWidth?: string[] | import("csstype").Property.BorderTopWidth<string | number> | NonNullable<import("csstype").Property.BorderTopWidth<string | number> | undefined>[] | undefined;
                border?: (string | (string & {}))[] | import("csstype").Property.Border<string | number> | NonNullable<import("csstype").Property.Border<string | number> | undefined>[] | undefined;
                borderBottom?: (string | (string & {}))[] | import("csstype").Property.BorderBottom<string | number> | NonNullable<import("csstype").Property.BorderBottom<string | number> | undefined>[] | undefined;
                borderColor?: string[] | import("csstype").Property.BorderColor | import("csstype").Property.BorderColor[] | undefined;
                borderLeft?: (string | (string & {}))[] | import("csstype").Property.BorderLeft<string | number> | NonNullable<import("csstype").Property.BorderLeft<string | number> | undefined>[] | undefined;
                borderRadius?: (string | (string & {}))[] | import("csstype").Property.BorderRadius<string | number> | NonNullable<import("csstype").Property.BorderRadius<string | number> | undefined>[] | undefined;
                borderRight?: (string | (string & {}))[] | import("csstype").Property.BorderRight<string | number> | NonNullable<import("csstype").Property.BorderRight<string | number> | undefined>[] | undefined;
                borderStyle?: string[] | import("csstype").Property.BorderStyle | import("csstype").Property.BorderStyle[] | undefined;
                borderTop?: (string | (string & {}))[] | import("csstype").Property.BorderTop<string | number> | NonNullable<import("csstype").Property.BorderTop<string | number> | undefined>[] | undefined;
                borderWidth?: (string | (string & {}))[] | import("csstype").Property.BorderWidth<string | number> | NonNullable<import("csstype").Property.BorderWidth<string | number> | undefined>[] | undefined;
            };
            input: {
                borderBottomColor?: string[] | import("csstype").Property.BorderBottomColor | import("csstype").Property.BorderBottomColor[] | undefined;
                borderBottomLeftRadius?: (string | (string & {}))[] | import("csstype").Property.BorderBottomLeftRadius<string | number> | NonNullable<import("csstype").Property.BorderBottomLeftRadius<string | number> | undefined>[] | undefined;
                borderBottomRightRadius?: (string | (string & {}))[] | import("csstype").Property.BorderBottomRightRadius<string | number> | NonNullable<import("csstype").Property.BorderBottomRightRadius<string | number> | undefined>[] | undefined;
                borderBottomStyle?: import("csstype").Property.BorderBottomStyle | NonNullable<import("csstype").Property.BorderBottomStyle | undefined>[] | import("csstype").Property.BorderBottomStyle[] | undefined;
                borderBottomWidth?: string[] | import("csstype").Property.BorderBottomWidth<string | number> | NonNullable<import("csstype").Property.BorderBottomWidth<string | number> | undefined>[] | undefined;
                borderLeftColor?: string[] | import("csstype").Property.BorderLeftColor | import("csstype").Property.BorderLeftColor[] | undefined;
                borderLeftStyle?: import("csstype").Property.BorderLeftStyle | NonNullable<import("csstype").Property.BorderLeftStyle | undefined>[] | import("csstype").Property.BorderLeftStyle[] | undefined;
                borderLeftWidth?: string[] | import("csstype").Property.BorderLeftWidth<string | number> | NonNullable<import("csstype").Property.BorderLeftWidth<string | number> | undefined>[] | undefined;
                borderRightColor?: string[] | import("csstype").Property.BorderRightColor | import("csstype").Property.BorderRightColor[] | undefined;
                borderRightStyle?: import("csstype").Property.BorderRightStyle | NonNullable<import("csstype").Property.BorderRightStyle | undefined>[] | import("csstype").Property.BorderRightStyle[] | undefined;
                borderRightWidth?: string[] | import("csstype").Property.BorderRightWidth<string | number> | NonNullable<import("csstype").Property.BorderRightWidth<string | number> | undefined>[] | undefined;
                borderTopColor?: string[] | import("csstype").Property.BorderTopColor | import("csstype").Property.BorderTopColor[] | undefined;
                borderTopLeftRadius?: (string | (string & {}))[] | import("csstype").Property.BorderTopLeftRadius<string | number> | NonNullable<import("csstype").Property.BorderTopLeftRadius<string | number> | undefined>[] | undefined;
                borderTopRightRadius?: (string | (string & {}))[] | import("csstype").Property.BorderTopRightRadius<string | number> | NonNullable<import("csstype").Property.BorderTopRightRadius<string | number> | undefined>[] | undefined;
                borderTopStyle?: import("csstype").Property.BorderTopStyle | NonNullable<import("csstype").Property.BorderTopStyle | undefined>[] | import("csstype").Property.BorderTopStyle[] | undefined;
                borderTopWidth?: string[] | import("csstype").Property.BorderTopWidth<string | number> | NonNullable<import("csstype").Property.BorderTopWidth<string | number> | undefined>[] | undefined;
                border?: (string | (string & {}))[] | import("csstype").Property.Border<string | number> | NonNullable<import("csstype").Property.Border<string | number> | undefined>[] | undefined;
                borderBottom?: (string | (string & {}))[] | import("csstype").Property.BorderBottom<string | number> | NonNullable<import("csstype").Property.BorderBottom<string | number> | undefined>[] | undefined;
                borderColor?: string[] | import("csstype").Property.BorderColor | import("csstype").Property.BorderColor[] | undefined;
                borderLeft?: (string | (string & {}))[] | import("csstype").Property.BorderLeft<string | number> | NonNullable<import("csstype").Property.BorderLeft<string | number> | undefined>[] | undefined;
                borderRadius?: (string | (string & {}))[] | import("csstype").Property.BorderRadius<string | number> | NonNullable<import("csstype").Property.BorderRadius<string | number> | undefined>[] | undefined;
                borderRight?: (string | (string & {}))[] | import("csstype").Property.BorderRight<string | number> | NonNullable<import("csstype").Property.BorderRight<string | number> | undefined>[] | undefined;
                borderStyle?: string[] | import("csstype").Property.BorderStyle | import("csstype").Property.BorderStyle[] | undefined;
                borderTop?: (string | (string & {}))[] | import("csstype").Property.BorderTop<string | number> | NonNullable<import("csstype").Property.BorderTop<string | number> | undefined>[] | undefined;
                borderWidth?: (string | (string & {}))[] | import("csstype").Property.BorderWidth<string | number> | NonNullable<import("csstype").Property.BorderWidth<string | number> | undefined>[] | undefined;
            };
            disabled: {
                borderBottomColor?: string[] | import("csstype").Property.BorderBottomColor | import("csstype").Property.BorderBottomColor[] | undefined;
                borderBottomLeftRadius?: (string | (string & {}))[] | import("csstype").Property.BorderBottomLeftRadius<string | number> | NonNullable<import("csstype").Property.BorderBottomLeftRadius<string | number> | undefined>[] | undefined;
                borderBottomRightRadius?: (string | (string & {}))[] | import("csstype").Property.BorderBottomRightRadius<string | number> | NonNullable<import("csstype").Property.BorderBottomRightRadius<string | number> | undefined>[] | undefined;
                borderBottomStyle?: import("csstype").Property.BorderBottomStyle | NonNullable<import("csstype").Property.BorderBottomStyle | undefined>[] | import("csstype").Property.BorderBottomStyle[] | undefined;
                borderBottomWidth?: string[] | import("csstype").Property.BorderBottomWidth<string | number> | NonNullable<import("csstype").Property.BorderBottomWidth<string | number> | undefined>[] | undefined;
                borderLeftColor?: string[] | import("csstype").Property.BorderLeftColor | import("csstype").Property.BorderLeftColor[] | undefined;
                borderLeftStyle?: import("csstype").Property.BorderLeftStyle | NonNullable<import("csstype").Property.BorderLeftStyle | undefined>[] | import("csstype").Property.BorderLeftStyle[] | undefined;
                borderLeftWidth?: string[] | import("csstype").Property.BorderLeftWidth<string | number> | NonNullable<import("csstype").Property.BorderLeftWidth<string | number> | undefined>[] | undefined;
                borderRightColor?: string[] | import("csstype").Property.BorderRightColor | import("csstype").Property.BorderRightColor[] | undefined;
                borderRightStyle?: import("csstype").Property.BorderRightStyle | NonNullable<import("csstype").Property.BorderRightStyle | undefined>[] | import("csstype").Property.BorderRightStyle[] | undefined;
                borderRightWidth?: string[] | import("csstype").Property.BorderRightWidth<string | number> | NonNullable<import("csstype").Property.BorderRightWidth<string | number> | undefined>[] | undefined;
                borderTopColor?: string[] | import("csstype").Property.BorderTopColor | import("csstype").Property.BorderTopColor[] | undefined;
                borderTopLeftRadius?: (string | (string & {}))[] | import("csstype").Property.BorderTopLeftRadius<string | number> | NonNullable<import("csstype").Property.BorderTopLeftRadius<string | number> | undefined>[] | undefined;
                borderTopRightRadius?: (string | (string & {}))[] | import("csstype").Property.BorderTopRightRadius<string | number> | NonNullable<import("csstype").Property.BorderTopRightRadius<string | number> | undefined>[] | undefined;
                borderTopStyle?: import("csstype").Property.BorderTopStyle | NonNullable<import("csstype").Property.BorderTopStyle | undefined>[] | import("csstype").Property.BorderTopStyle[] | undefined;
                borderTopWidth?: string[] | import("csstype").Property.BorderTopWidth<string | number> | NonNullable<import("csstype").Property.BorderTopWidth<string | number> | undefined>[] | undefined;
                border?: (string | (string & {}))[] | import("csstype").Property.Border<string | number> | NonNullable<import("csstype").Property.Border<string | number> | undefined>[] | undefined;
                borderBottom?: (string | (string & {}))[] | import("csstype").Property.BorderBottom<string | number> | NonNullable<import("csstype").Property.BorderBottom<string | number> | undefined>[] | undefined;
                borderColor?: string[] | import("csstype").Property.BorderColor | import("csstype").Property.BorderColor[] | undefined;
                borderLeft?: (string | (string & {}))[] | import("csstype").Property.BorderLeft<string | number> | NonNullable<import("csstype").Property.BorderLeft<string | number> | undefined>[] | undefined;
                borderRadius?: (string | (string & {}))[] | import("csstype").Property.BorderRadius<string | number> | NonNullable<import("csstype").Property.BorderRadius<string | number> | undefined>[] | undefined;
                borderRight?: (string | (string & {}))[] | import("csstype").Property.BorderRight<string | number> | NonNullable<import("csstype").Property.BorderRight<string | number> | undefined>[] | undefined;
                borderStyle?: string[] | import("csstype").Property.BorderStyle | import("csstype").Property.BorderStyle[] | undefined;
                borderTop?: (string | (string & {}))[] | import("csstype").Property.BorderTop<string | number> | NonNullable<import("csstype").Property.BorderTop<string | number> | undefined>[] | undefined;
                borderWidth?: (string | (string & {}))[] | import("csstype").Property.BorderWidth<string | number> | NonNullable<import("csstype").Property.BorderWidth<string | number> | undefined>[] | undefined;
            };
        }>;
        text: Partial<{
            standard: import("csstype").Property.Color | string[] | import("csstype").Property.Color[] | undefined;
            light: import("csstype").Property.Color | string[] | import("csstype").Property.Color[] | undefined;
            dark: import("csstype").Property.Color | string[] | import("csstype").Property.Color[] | undefined;
            highlight: import("csstype").Property.Color | string[] | import("csstype").Property.Color[] | undefined;
            cta: import("csstype").Property.Color | string[] | import("csstype").Property.Color[] | undefined;
            disabled: import("csstype").Property.Color | string[] | import("csstype").Property.Color[] | undefined;
            size: import("csstype").Property.FontSize<string | number> | (string | (string & {}))[] | NonNullable<import("csstype").Property.FontSize<string | number> | undefined>[] | undefined;
            labelSize: import("csstype").Property.FontSize<string | number> | (string | (string & {}))[] | NonNullable<import("csstype").Property.FontSize<string | number> | undefined>[] | undefined;
        }>;
        common: Partial<{
            primary: import("csstype").Property.Color | string[] | import("csstype").Property.Color[] | undefined;
            danger: import("csstype").Property.Color | string[] | import("csstype").Property.Color[] | undefined;
            disabled: ((string & {}) | import("csstype").Globals)[] | import("csstype").Property.Opacity | NonNullable<import("csstype").Property.Opacity | undefined>[] | undefined;
            divider: import("csstype").Property.Color | string[] | import("csstype").Property.Color[] | undefined;
            icon: import("csstype").Property.Color | string[] | import("csstype").Property.Color[] | undefined;
        }>;
    }> | undefined;
    elementTheme?: Partial<{
        accordion: import("@mui/styled-engine").CSSObject;
        accordionSummary: import("@mui/styled-engine").CSSObject;
        accordionSummaryExpanded: import("@mui/styled-engine").CSSObject;
        accordionIcon: import("@mui/styled-engine").CSSObject;
        accordionIconExpanded: import("@mui/styled-engine").CSSObject;
        alertInfo: import("@mui/styled-engine").CSSObject;
        alertInfoFilled: import("@mui/styled-engine").CSSObject;
        alertInfoOutlined: import("@mui/styled-engine").CSSObject;
        alertSuccess: import("@mui/styled-engine").CSSObject;
        alertSuccessFilled: import("@mui/styled-engine").CSSObject;
        alertSuccessOutlined: import("@mui/styled-engine").CSSObject;
        alertError: import("@mui/styled-engine").CSSObject;
        alertErrorFilled: import("@mui/styled-engine").CSSObject;
        alertErrorOutlined: import("@mui/styled-engine").CSSObject;
        breadcrumbs: import("@mui/styled-engine").CSSObject;
        breadcrumbsCollapse: import("@mui/styled-engine").CSSObject;
        breadcrumbsCollapseHover: import("@mui/styled-engine").CSSObject;
        breadcrumbsSeparator: import("@mui/styled-engine").CSSObject;
        breadcrumbsSeparatorHover: import("@mui/styled-engine").CSSObject;
        button: import("@mui/styled-engine").CSSObject;
        buttonPrimary: import("@mui/styled-engine").CSSObject;
        buttonDanger: import("@mui/styled-engine").CSSObject;
        buttonDangerContained: import("@mui/styled-engine").CSSObject;
        buttonDangerOutlined: import("@mui/styled-engine").CSSObject;
        buttonPrimaryContained: import("@mui/styled-engine").CSSObject;
        buttonPrimaryOutlined: import("@mui/styled-engine").CSSObject;
        buttonCta: import("@mui/styled-engine").CSSObject;
        buttonCtaHover: import("@mui/styled-engine").CSSObject;
        buttonDisabled: import("@mui/styled-engine").CSSObject;
        checkbox: import("@mui/styled-engine").CSSObject;
        checkboxHover: import("@mui/styled-engine").CSSObject;
        checkboxDisabled: import("@mui/styled-engine").CSSObject;
        chipCta: import("@mui/styled-engine").CSSObject;
        chipCtaHover: import("@mui/styled-engine").CSSObject;
        chipFilled: import("@mui/styled-engine").CSSObject;
        chipOutlined: import("@mui/styled-engine").CSSObject;
        chipDangerFilled: import("@mui/styled-engine").CSSObject;
        chipDangerOutlined: import("@mui/styled-engine").CSSObject;
        chipPrimaryFilled: import("@mui/styled-engine").CSSObject;
        chipPrimaryOutlined: import("@mui/styled-engine").CSSObject;
        dialog: import("@mui/styled-engine").CSSObject;
        dialogBackdrop: import("@mui/styled-engine").CSSObject;
        dialogTitle: import("@mui/styled-engine").CSSObject;
        dialogContent: import("@mui/styled-engine").CSSObject;
        dialogContentText: import("@mui/styled-engine").CSSObject;
        dialogActions: import("@mui/styled-engine").CSSObject;
        divider: import("@mui/styled-engine").CSSObject;
        drawer: import("@mui/styled-engine").CSSObject;
        formGroup: import("@mui/styled-engine").CSSObject;
        formLabel: import("@mui/styled-engine").CSSObject;
        formLabelFocused: import("@mui/styled-engine").CSSObject;
        formLabelDisabled: import("@mui/styled-engine").CSSObject;
        icon: import("@mui/styled-engine").CSSObject;
        iconButton: import("@mui/styled-engine").CSSObject;
        link: import("@mui/styled-engine").CSSObject;
        list: import("@mui/styled-engine").CSSObject;
        listItem: import("@mui/styled-engine").CSSObject;
        listItemHover: import("@mui/styled-engine").CSSObject;
        listItemSelected: import("@mui/styled-engine").CSSObject;
        listItemSelectedText: import("@mui/styled-engine").CSSObject;
        menu: import("@mui/styled-engine").CSSObject;
        menuItem: import("@mui/styled-engine").CSSObject;
        menuItemHover: import("@mui/styled-engine").CSSObject;
        menuItemSelected: import("@mui/styled-engine").CSSObject;
        paper: import("@mui/styled-engine").CSSObject;
        radioButton: import("@mui/styled-engine").CSSObject;
        radioButtonHover: import("@mui/styled-engine").CSSObject;
        radioButtonChecked: import("@mui/styled-engine").CSSObject;
        select: import("@mui/styled-engine").CSSObject;
        sliderThumb: import("@mui/styled-engine").CSSObject;
        sliderThumbActive: import("@mui/styled-engine").CSSObject;
        sliderRail: import("@mui/styled-engine").CSSObject;
        tab: import("@mui/styled-engine").CSSObject;
        tabSelected: import("@mui/styled-engine").CSSObject;
        tabs: import("@mui/styled-engine").CSSObject;
        tabsIndicator: import("@mui/styled-engine").CSSObject;
        textField: import("@mui/styled-engine").CSSObject;
        textFieldFocused: import("@mui/styled-engine").CSSObject;
        textFieldDisabled: import("@mui/styled-engine").CSSObject;
        textFieldLabel: import("@mui/styled-engine").CSSObject;
        textFieldLabelFocused: import("@mui/styled-engine").CSSObject;
        textFieldLabelDisabled: import("@mui/styled-engine").CSSObject;
        tooltip: import("@mui/styled-engine").CSSObject;
        toggleButton: import("@mui/styled-engine").CSSObject;
        toggleButtonSelected: import("@mui/styled-engine").CSSObject;
        toggleButtonIconSelected: import("@mui/styled-engine").CSSObject;
    }> | undefined;
} | undefined) => import("@mui/material/styles").Theme;
