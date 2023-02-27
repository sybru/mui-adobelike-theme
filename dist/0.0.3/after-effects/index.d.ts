import { afterEffectsAppColor } from './color';
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
export { afterEffectsAppColor as AfterEffectElementColor };
export declare const afterEffectsTheme: import("@mui/material/styles").Theme;
export declare const useAfterEffectsTheme: (appColor?: Partial<{
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
}> | undefined) => import("@mui/material/styles").Theme;
