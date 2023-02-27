import { afterEffectsAppColor, afterEffectsElementColor } from './color';
export { afterEffectsAppColor, afterEffectsElementColor };
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        "adobe-primary-contained": true;
        "adobe-danger-contained": true;
        "adobe-primary-outlined": true;
        "adobe-danger-outlined": true;
        "adobe-cta": true;
        "adobe-inherit": true;
    }
}
export declare const afterEffectsTheme: import("@mui/material/styles").Theme;
export declare const useAfterEffectsTheme: (params?: {
    appColor?: {
        surface: "#272727";
        surfaceSelected: "#4C4C4C";
        surfaceHover: "#E8E8E8";
        surfaceCta: string;
        text: "#A4A4A4";
        textLight: "#E4E4E4";
        textHighlight: "#278CE7";
        textCta: "#272727";
        textDisabled: "#464646";
        inputSurface: "#161616";
        inputSurfaceFocused: "#E8E8E8";
        inputBorder: "#313131";
        primary: "#288CE7";
        danger: "#F53C3C";
        divider: "#1F1F1F";
        icon: "#A4A4A4";
    } | undefined;
    elementColor?: {
        surface: {
            color: "#A4A4A4";
            backgroundColor: "#272727";
        };
        divider: {
            backgroundColor: "#1F1F1F";
        };
        textField: {
            color: "#A4A4A4";
            backgroundColor: "#161616";
            borderColor: "#313131";
        };
        textFieldFocused: {
            color: "#272727";
            backgroundColor: "#E8E8E8";
            borderColor: "#313131";
        };
        textFieldDisabled: {
            color: "#464646";
            backgroundColor: "#161616";
            borderColor: "#313131";
        };
        textFieldLabel: {
            color: "#A4A4A4";
        };
        textFieldLabelFocused: {
            color: "#272727";
        };
        textFieldLabelDisabled: {
            color: "#464646";
        };
        button: {};
        buttonPrimaryContained: {
            color: "#E4E4E4";
            backgroundColor: "#288CE7";
        };
        buttonDangerContained: {
            color: "#E4E4E4";
            backgroundColor: "#F53C3C";
        };
        buttonPrimaryOutlined: {
            color: "#288CE7";
            borderColor: "#288CE7";
        };
        buttonDangerOutlined: {
            color: "#F53C3C";
            borderColor: "#F53C3C";
        };
        buttonCta: {
            color: "#A4A4A4";
            backgroundColor: "#272727";
            borderColor: "#A4A4A4";
        };
        buttonCtaHover: {
            color: "#272727";
            backgroundColor: "#E8E8E8";
            borderColor: "#E8E8E8";
        };
        buttonDisabled: {
            color: "#464646";
            backgroundColor: string;
            borderColor: "#464646";
        };
        toggleButton: {};
        toggleButtonSelected: {
            backgroundColor: "#161616";
            borderColor: "#313131";
        };
        toggleButtonIconSelected: {
            color: "#278CE7";
        };
        checkbox: {
            color: "#A4A4A4";
        };
        checkboxHover: {
            color: "#E4E4E4";
        };
        checkboxDisabled: {
            color: "#464646";
        };
        radioButton: {
            color: "#A4A4A4";
        };
        radioButtonHover: {
            color: "#E4E4E4";
        };
        radioButtonChecked: {
            color: "#288CE7";
        };
        list: {
            backgroundColor: "#272727";
        };
        listItem: {
            color: "#A4A4A4";
            backgroundColor: "#272727";
        };
        listItemSelected: {
            color: "#A4A4A4";
            backgroundColor: "#4C4C4C";
        };
        listItemSelectedText: {
            color: "#272727";
            backgroundColor: string;
        };
        menu: {
            backgroundColor: "#272727";
        };
        menuItem: {
            color: "#A4A4A4";
            backgroundColor: "#272727";
        };
        select: {
            color: "#A4A4A4";
            backgroundColor: "#161616";
            borderColor: "#313131";
        };
        sliderThumb: {
            color: "#272727";
            borderColor: string;
        };
        sliderThumbActive: {
            color: "#288CE7";
            borderColor: "#288CE7";
        };
        sliderRail: {
            color: string;
        };
        tabs: {};
        tabsIndicator: {
            backgroundColor: "#E4E4E4";
        };
        tab: {
            color: "#A4A4A4";
        };
        tabSelected: {
            color: "#E4E4E4";
        };
        accordion: {};
        accordionIcon: {
            color: "#A4A4A4";
        };
        alertInfo: {
            color: "#A4A4A4";
        };
        alertInfoFilled: {
            color: "#272727";
            backgroundColor: string;
        };
        alertInfoOutlined: {
            color: "#A4A4A4";
            borderColor: "#A4A4A4";
        };
        alertSuccess: {
            color: "#278CE7";
        };
        alertSuccessFilled: {
            color: "#E4E4E4";
            backgroundColor: "#288CE7";
        };
        alertSuccessOutlined: {
            color: "#288CE7";
            borderColor: "#288CE7";
        };
        alertError: {
            color: "#F53C3C";
        };
        alertErrorFilled: {
            color: "#E4E4E4";
            backgroundColor: "#F53C3C";
        };
        alertErrorOutlined: {
            color: "#F53C3C";
            borderColor: "#F53C3C";
        };
    } | undefined;
} | undefined) => import("@mui/material/styles").Theme;
