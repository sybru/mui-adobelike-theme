!function(e,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o(require("@mui/material/styles/createTheme"),require("@mui/utils/deepmerge"),require("react"));else if("function"==typeof define&&define.amd)define(["@mui/material/styles/createTheme","@mui/utils/deepmerge","react"],o);else{var i="object"==typeof exports?o(require("@mui/material/styles/createTheme"),require("@mui/utils/deepmerge"),require("react")):o(e["@mui/material/styles/createTheme"],e["@mui/utils/deepmerge"],e.react);for(var t in i)("object"==typeof exports?exports:e)[t]=i[t]}}(self,((e,o,i)=>(()=>{"use strict";var t={867:function(e,o,i){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(o,"__esModule",{value:!0}),o.useAfterEffectsTheme=o.afterEffectsTheme=o.afterEffectsElementTheme=o.afterEffectsAppTheme=void 0;const r=i(156),l=t(i(49)),d=i(355);Object.defineProperty(o,"afterEffectsElementTheme",{enumerable:!0,get:function(){return d.afterEffectsElementTheme}});var n=i(355);Object.defineProperty(o,"afterEffectsAppTheme",{enumerable:!0,get:function(){return n.afterEffectsAppTheme}});const a=(...[e])=>{var o,i,t,r,n,a,s,c;const{appTheme:u,elementTheme:v}=(0,d.afterEffectsElementTheme)(e),{palette:b}=(0,l.default)();return(0,l.default)({palette:{"adobe-primary":b.augmentColor({color:{main:null===(o=null==u?void 0:u.common)||void 0===o?void 0:o.primary}}),"adobe-danger":b.augmentColor({color:{main:null===(i=null==u?void 0:u.common)||void 0===i?void 0:i.danger}})},typography:{allVariants:{fontSize:"0.85rem"}},components:{MuiAccordion:{styleOverrides:{root:{"&.Mui-expanded":{margin:0},"&:before":{backgroundColor:"transparent"},"& .MuiCollapse-root":{transition:"none"}}}},MuiAccordionSummary:{styleOverrides:{root:Object.assign(Object.assign({},v.accordionSummary),{"&.Mui-expanded":Object.assign({},v.accordionSummaryExpanded)}),content:{margin:0,"&.Mui-expanded":{margin:0}},expandIconWrapper:Object.assign(Object.assign({},v.accordionIcon),{"&.Mui-expanded":Object.assign({},v.accordionIconExpanded),"& .MuiSvgIcon-root":{fontSize:"inherit"}})}},MuiAccordionDetails:{styleOverrides:{root:{padding:"4px 25px"}}},MuiAppBar:{styleOverrides:{root:Object.assign({},v.paper)}},MuiAlert:{styleOverrides:{standard:Object.assign({},v.paper),standardSuccess:Object.assign({},v.alertSuccess),standardError:Object.assign({},v.alertError),outlined:Object.assign({},v.alertInfoOutlined),outlinedSuccess:Object.assign({},v.alertSuccessOutlined),outlinedError:Object.assign({},v.alertErrorOutlined),filled:Object.assign({},v.alertInfoFilled),filledSuccess:Object.assign({},v.alertSuccessFilled),filledError:Object.assign({},v.alertErrorFilled),icon:({ownerState:e})=>{var o,i,t,r,l,d,n,a,s;return{"& .MuiSvgIcon-root":Object.assign(Object.assign(Object.assign({},"info"===e.severity&&Object.assign(Object.assign(Object.assign({},"standard"===e.variant&&{color:null===(o=v.alertInfo)||void 0===o?void 0:o.color}),"filled"===e.variant&&{color:null===(i=v.alertInfoFilled)||void 0===i?void 0:i.color}),"outlined"===e.variant&&{color:null===(t=v.alertInfoOutlined)||void 0===t?void 0:t.color})),"success"===e.severity&&Object.assign(Object.assign(Object.assign({},"standard"===e.variant&&{color:null===(r=v.alertSuccess)||void 0===r?void 0:r.color}),"filled"===e.variant&&{color:null===(l=v.alertSuccessFilled)||void 0===l?void 0:l.color}),"outlined"===e.variant&&{color:null===(d=v.alertSuccessOutlined)||void 0===d?void 0:d.color})),"error"===e.severity&&Object.assign(Object.assign(Object.assign({},"standard"===e.variant&&{color:null===(n=v.alertError)||void 0===n?void 0:n.color}),"filled"===e.variant&&{color:null===(a=v.alertErrorFilled)||void 0===a?void 0:a.color}),"outlined"===e.variant&&{color:null===(s=v.alertErrorOutlined)||void 0===s?void 0:s.color}))}}}},MuiAlertTitle:{},MuiBreadcrumbs:{styleOverrides:{root:{"& li > button":Object.assign({},v.breadcrumbsCollapse),"& li > button:hover":Object.assign({},v.breadcrumbsCollapseHover)},separator:Object.assign(Object.assign({},v.breadcrumbsSeparator),{"&:hover":Object.assign({},v.breadcrumbsSeparatorHover)})}},MuiButton:{variants:[{props:{color:"adobe-primary"},style:{}},{props:{color:"adobe-danger"},style:{}},{props:{variant:"adobe-cta"},style:{}}],defaultProps:{variant:"contained",disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,disableElevation:!0},styleOverrides:{root:({ownerState:e})=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({borderRadius:"1000000px",padding:"0 12px"},"adobe-cta"===e.variant&&Object.assign(Object.assign({},v.buttonCta),{"&:hover":Object.assign({},v.buttonCtaHover)})),"contained"===e.variant&&Object.assign(Object.assign({},"adobe-primary"===e.color&&Object.assign(Object.assign({},v.buttonPrimaryContained),{"&:hover":Object.assign({},v.buttonPrimaryContained)})),"adobe-danger"===e.color&&Object.assign(Object.assign({},v.buttonDangerContained),{"&:hover":Object.assign({},v.buttonDangerContained)}))),"outlined"===e.variant&&Object.assign(Object.assign({borderStyle:"solid",borderWidth:"1px"},"adobe-primary"===e.color&&Object.assign(Object.assign({},v.buttonPrimaryOutlined),{"&:hover":Object.assign({},v.buttonPrimaryOutlined)})),"adobe-danger"===e.color&&Object.assign(Object.assign({},v.buttonDangerOutlined),{"&:hover":Object.assign({},v.buttonDangerOutlined)}))),"text"===e.variant&&Object.assign(Object.assign({},"adobe-primary"===e.color&&Object.assign(Object.assign({},v.buttonPrimary),{"&:hover":Object.assign({},v.buttonPrimary)})),"adobe-danger"===e.color&&Object.assign(Object.assign({},v.buttonDanger),{"&:hover":Object.assign({},v.buttonDanger)}))),{"&.Mui-disabled":Object.assign(Object.assign({},v.buttonDisabled),{borderStyle:"solid",borderWidth:"1px"})})}},MuiCheckbox:{defaultProps:{disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},styleOverrides:{root:{padding:0,"& .MuiSvgIcon-root":Object.assign({},v.checkbox),"&:hover .MuiSvgIcon-root":Object.assign({},v.checkboxHover),"&.Mui-checked:hover .MuiSvgIcon-root":Object.assign({},v.checkboxHover),"&.Mui-disabled .MuiSvgIcon-root":Object.assign({},v.checkboxDisabled)}}},MuiChip:{variants:[{props:{color:"adobe-primary"},style:{}},{props:{color:"adobe-danger"},style:{}},{props:{variant:"adobe-cta"},style:{}}],styleOverrides:{root:({ownerState:e})=>{var o,i,t,r;return Object.assign(Object.assign(Object.assign({},v.chipFilled),{"& .MuiChip-deleteIcon":{color:null===(o=u.text)||void 0===o?void 0:o.light},"& .MuiChip-deleteIcon:hover":{color:null===(i=u.text)||void 0===i?void 0:i.light}}),"adobe-cta"===e.variant&&Object.assign(Object.assign({},v.chipCta),{"&:hover":Object.assign({},v.chipCtaHover),"&:hover .MuiChip-deleteIcon":{color:null===(t=v.chipCtaHover)||void 0===t?void 0:t.color},"&:hover .MuiChip-deleteIcon:hover":{color:null===(r=v.chipCtaHover)||void 0===r?void 0:r.color}}))},filled:({ownerState:e})=>{var o,i;return Object.assign(Object.assign(Object.assign(Object.assign({},v.chipFilled),{"& .MuiChip-deleteIcon":{color:null===(o=u.text)||void 0===o?void 0:o.light},"& .MuiChip-deleteIcon:hover":{color:null===(i=u.text)||void 0===i?void 0:i.light}}),"adobe-primary"===e.color&&Object.assign({},v.chipPrimaryFilled)),"adobe-danger"===e.color&&Object.assign({},v.chipDangerFilled))},outlined:({ownerState:e})=>{var o,i;return Object.assign(Object.assign(Object.assign(Object.assign({},v.chipOutlined),{"& .MuiChip-deleteIcon":{color:null===(o=u.text)||void 0===o?void 0:o.light},"& .MuiChip-deleteIcon:hover":{color:null===(i=u.text)||void 0===i?void 0:i.light}}),"adobe-primary"===e.color&&Object.assign({},v.chipPrimaryOutlined)),"adobe-danger"===e.color&&Object.assign({},v.chipDangerOutlined))}}},MuiDialog:{styleOverrides:{root:Object.assign({},v.dialogBackdrop),paper:Object.assign({},v.dialog)}},MuiDialogContent:{styleOverrides:{root:({ownerState:e})=>{var o,i;return Object.assign(Object.assign({},v.dialogContent),e.dividers&&{borderTopColor:null===(o=v.divider)||void 0===o?void 0:o.backgroundColor,borderBottomColor:null===(i=v.divider)||void 0===i?void 0:i.backgroundColor})}}},MuiDialogContentText:{styleOverrides:{root:Object.assign({},v.dialogContentText)}},MuiDialogActions:{styleOverrides:{root:Object.assign({},v.dialogActions)}},MuiDivider:{styleOverrides:{root:Object.assign({},v.divider)}},MuiDrawer:{styleOverrides:{paper:Object.assign({padding:"8px",gap:"16px"},v.drawer)}},MuiFilledInput:{defaultProps:{disableUnderline:!0}},MuiFormGroup:{styleOverrides:{root:Object.assign({},v.formGroup)}},MuiFormLabel:{styleOverrides:{root:Object.assign(Object.assign({},v.formLabel),{"&.Mui-focused":Object.assign({},v.formLabelFocused),"&.Mui-disabled":Object.assign({},v.formLabelDisabled)})}},MuiInputBase:{styleOverrides:{root:{"& :after":{borderBottom:"none"},"& .Mui-focused:after":{transform:"none"}},input:({ownerState:e})=>{var o;return Object.assign(Object.assign({},v.textField),{padding:"3px 8px",borderStyle:"solid",borderWidth:"1px",borderRadius:"4px","&:focus":Object.assign(Object.assign({},v.textFieldFocused),e.readOnly&&Object.assign({},v.textField)),"&.Mui-disabled":Object.assign(Object.assign({},v.textFieldDisabled),{WebkitTextFillColor:null===(o=v.textFieldDisabled)||void 0===o?void 0:o.color})})}}},MuiInput:{defaultProps:{disableUnderline:!0}},MuiIconButton:{styleOverrides:{root:Object.assign({},v.iconButton)}},MuiLink:{styleOverrides:{root:Object.assign({cursor:"pointer"},v.link)}},MuiList:{styleOverrides:{root:Object.assign({padding:0},v.list)}},MuiListItem:{defaultProps:{divider:!0},styleOverrides:{root:Object.assign(Object.assign({padding:"3px 12px"},v.listItem),{"&:hover":Object.assign({},v.listItemHover),"&.Mui-selected":Object.assign({},v.listItemSelected),"&.Mui-selected:hover":Object.assign({},v.listItemSelected),"&.MuiListItemButton-divider:not(:last-child)":Object.assign({},v.divider)})}},MuiListItemButton:{defaultProps:{disableRipple:!0,disableTouchRipple:!0,divider:!0},styleOverrides:{root:Object.assign(Object.assign({padding:"3px 12px"},v.listItem),{transition:"none","& .MuiListItemText-root":{margin:0},"& .MuiListItemText-root span":{},"&:hover":Object.assign({},v.listItemHover),"&.Mui-selected":Object.assign({},v.listItemSelected),"&.Mui-selected:hover":Object.assign({},v.listItemSelected),"&.MuiListItemButton-divider:not(:last-child)":{borderBottomColor:null===(t=v.divider)||void 0===t?void 0:t.backgroundColor}})}},MuiMenu:{styleOverrides:{paper:Object.assign({},v.menu)}},MuiMenuItem:{defaultProps:{disableRipple:!0,disableTouchRipple:!0,divider:!0},styleOverrides:{root:Object.assign(Object.assign({minHeight:0,padding:"3px 24px"},v.listItem),{"&:hover":Object.assign({},v.menuItemHover),"&.Mui-selected":Object.assign({},v.menuItemSelected),"&.Mui-selected.Mui-focusVisible":Object.assign({},v.menuItemSelected),"&.Mui-selected:hover":Object.assign({},v.menuItemSelected),"&:not(:last-child)":{borderBottomColor:null===(r=v.divider)||void 0===r?void 0:r.backgroundColor}})}},MuiOutlinedInput:{styleOverrides:{root:{"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderWidth:0}},notchedOutline:{borderWidth:0}}},MuiPaper:{defaultProps:{elevation:0},styleOverrides:{root:Object.assign({},v.paper)}},MuiRadio:{defaultProps:{disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},styleOverrides:{root:()=>{var e,o,i,t;const r={content:"''",position:"absolute",width:"1rem",height:"1rem",borderStyle:"solid",borderWidth:"2px",borderRadius:"50%",borderColor:null===(e=v.radioButton)||void 0===e?void 0:e.color};return{padding:"2px","& .MuiSvgIcon-root":{visibility:"hidden"},"&:after":r,"&:hover:after":Object.assign(Object.assign({},r),{borderColor:null===(o=v.radioButtonHover)||void 0===o?void 0:o.color}),"&.Mui-checked:after":Object.assign(Object.assign({},r),{backgroundColor:null===(i=v.radioButtonChecked)||void 0===i?void 0:i.color,borderColor:null===(t=v.radioButtonChecked)||void 0===t?void 0:t.color})}}}},MuiSelect:{styleOverrides:{select:{"&.MuiInput-input:focus":Object.assign({},v.select),"&.MuiOutlinedInput-input:focus":Object.assign({},v.select),"&.MuiFilledInput-input:focus":Object.assign({},v.select)},icon:Object.assign({},v.select)}},MuiSlider:{styleOverrides:{root:Object.assign({},v.sliderRail),rail:{opacity:1},track:{display:"none"},thumb:Object.assign(Object.assign({width:"17px",height:"17px",borderStyle:"solid",borderWidth:"2px",boxShadow:`0 0 0 2px ${null===(n=v.sliderThumb)||void 0===n?void 0:n.color}`},v.sliderThumb),{"&.Mui-active":Object.assign({boxShadow:`0 0 0 2px ${null===(a=v.sliderThumb)||void 0===a?void 0:a.color}`},v.sliderThumbActive),"&.Mui-focusVisible":{boxShadow:`0 0 0 2px ${null===(s=v.sliderThumb)||void 0===s?void 0:s.color}`},"&:before":{boxShadow:"none"},"&:hover":{boxShadow:`0 0 0 2px ${null===(c=v.sliderThumb)||void 0===c?void 0:c.color}`}})}},MuiSvgIcon:{styleOverrides:{root:Object.assign({},null==v?void 0:v.icon)}},MuiTab:{defaultProps:{disableRipple:!0,disableTouchRipple:!0,disableFocusRipple:!0},styleOverrides:{root:Object.assign(Object.assign({minHeight:0,padding:"4px 6px"},v.tab),{"&.Mui-selected":Object.assign({},v.tabSelected)})}},MuiTabs:{styleOverrides:{root:{minHeight:0},indicator:Object.assign({transition:"none"},v.tabsIndicator)}},MuiTextField:{styleOverrides:{root:({ownerState:e})=>{var o;return Object.assign({"& .MuiInputLabel-root":Object.assign({},v.textFieldLabel),"& .MuiInputLabel-root.Mui-focused":Object.assign({},!(null===(o=e.InputProps)||void 0===o?void 0:o.readOnly)&&Object.assign({},v.textFieldLabelFocused)),"& .MuiInputLabel-root.Mui-disabled":Object.assign({},v.textFieldLabelDisabled)},"standard"===e.variant&&{"& .MuiInputLabel-root.Mui-focused":Object.assign({},v.textFieldLabel)})}}},MuiTooltip:{styleOverrides:{tooltip:Object.assign({},v.tooltip)}},MuiToggleButton:{defaultProps:{disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},styleOverrides:{root:Object.assign(Object.assign({padding:"3px",borderColor:"transparent"},v.toggleButton),{"&.Mui-selected":Object.assign({borderStyle:"solid",borderWidth:"1px"},v.toggleButtonSelected),"&.Mui-selected *":Object.assign({},v.toggleButtonSelected)})}}}})};o.afterEffectsTheme=a(),o.useAfterEffectsTheme=(...e)=>(0,r.useMemo)((()=>a(...e)),[e])},355:function(e,o,i){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(o,"__esModule",{value:!0}),o.afterEffectsElementTheme=o.afterEffectsAppTheme=void 0;const r=t(i(210));o.afterEffectsAppTheme={surface:{standard:"#272727",light:"#454545",hover:"rgba(255, 255, 255, 0.05)",selected:"#4C4C4C",cta:"#E8E8E8",input:"#161616",inputFocused:"#E8E8E8",divider:"#1F1F1F"},border:{button:{borderColor:"#A4A4A4"},chip:{borderColor:"#A4A4A4"},disabled:{borderColor:"#464646"},input:{borderColor:"#313131"}},text:{standard:"#A4A4A4",light:"#E4E4E4",dark:"#808080",highlight:"#278CE7",cta:"#272727",disabled:"#464646"},common:{primary:"#288CE7",danger:"#F53C3C",disabled:.38,divider:"#181818",icon:"#A4A4A4"}},o.afterEffectsElementTheme=e=>{const i=(0,r.default)(o.afterEffectsAppTheme,null==e?void 0:e.appTheme),t=(e=>{var o,i,t,r,l,d,n,a,s,c,u,v,b,g,p,m,O,h,j,f,x,C,y,M,S,I,k,T,F,E,A,D,B,P,L,H,R,w,W,_,z,q,$,G,V,U,J,K,N,Q,X,Y,Z,ee,oe,ie,te,re,le,de,ne,ae,se,ce,ue,ve,be,ge,pe,me,Oe,he,je,fe,xe,Ce,ye,Me,Se,Ie,ke,Te,Fe,Ee,Ae,De,Be,Pe,Le,He,Re,we,We,_e,ze,qe,$e,Ge,Ve,Ue,Je,Ke,Ne,Qe,Xe,Ye,Ze,eo,oo,io,to;const ro=Object.assign({color:null===(o=e.text)||void 0===o?void 0:o.standard,backgroundColor:null===(i=e.surface)||void 0===i?void 0:i.input,fontSize:null===(t=e.text)||void 0===t?void 0:t.size},null===(r=e.border)||void 0===r?void 0:r.input);return{accordion:{},accordionSummary:{minHeight:0,flexDirection:"row-reverse",color:null===(l=e.common)||void 0===l?void 0:l.icon,gap:"4px"},accordionSummaryExpanded:{minHeight:0},accordionIcon:{margin:0,transition:"none",fontSize:"0.75rem"},accordionIconExpanded:{margin:0},alertInfo:{color:null===(d=e.text)||void 0===d?void 0:d.standard},alertInfoFilled:{color:null===(n=e.text)||void 0===n?void 0:n.cta,backgroundColor:null===(a=e.surface)||void 0===a?void 0:a.cta},alertInfoOutlined:{color:null===(s=e.text)||void 0===s?void 0:s.standard,borderColor:null===(c=e.text)||void 0===c?void 0:c.standard},alertSuccess:{color:null===(u=e.text)||void 0===u?void 0:u.highlight},alertSuccessFilled:{color:null===(v=e.text)||void 0===v?void 0:v.light,backgroundColor:null===(b=e.common)||void 0===b?void 0:b.primary},alertSuccessOutlined:{color:null===(g=e.common)||void 0===g?void 0:g.primary,borderColor:null===(p=e.common)||void 0===p?void 0:p.primary},alertError:{color:null===(m=e.common)||void 0===m?void 0:m.danger},alertErrorFilled:{color:null===(O=e.text)||void 0===O?void 0:O.light,backgroundColor:null===(h=e.common)||void 0===h?void 0:h.danger},alertErrorOutlined:{color:null===(j=e.common)||void 0===j?void 0:j.danger,borderColor:null===(f=e.common)||void 0===f?void 0:f.danger},breadcrumbs:{},breadcrumbsCollapse:{color:null===(x=e.text)||void 0===x?void 0:x.standard,backgroundColor:null===(C=e.surface)||void 0===C?void 0:C.standard},breadcrumbsCollapseHover:{backgroundColor:null===(y=e.surface)||void 0===y?void 0:y.light},breadcrumbsSeparator:{color:null===(M=e.text)||void 0===M?void 0:M.standard},breadcrumbsSeparatorHover:{},button:{},buttonDanger:{color:null===(S=e.common)||void 0===S?void 0:S.danger,backgroundColor:"transparent"},buttonDangerContained:{color:null===(I=e.text)||void 0===I?void 0:I.light,backgroundColor:null===(k=e.common)||void 0===k?void 0:k.danger},buttonDangerOutlined:{color:null===(T=e.common)||void 0===T?void 0:T.danger,backgroundColor:"transparent",borderColor:null===(F=e.common)||void 0===F?void 0:F.danger},buttonPrimary:{color:null===(E=e.common)||void 0===E?void 0:E.primary,backgroundColor:"transparent"},buttonPrimaryContained:{color:null===(A=e.text)||void 0===A?void 0:A.light,backgroundColor:null===(D=e.common)||void 0===D?void 0:D.primary},buttonPrimaryOutlined:{color:null===(B=e.common)||void 0===B?void 0:B.primary,backgroundColor:"transparent",borderColor:null===(P=e.common)||void 0===P?void 0:P.primary},buttonCta:Object.assign({color:null===(L=e.text)||void 0===L?void 0:L.standard,backgroundColor:"transparent",borderStyle:"solid",borderWidth:"1px",transition:"none"},null===(H=e.border)||void 0===H?void 0:H.button),buttonCtaHover:{color:null===(R=e.text)||void 0===R?void 0:R.cta,backgroundColor:null===(w=e.surface)||void 0===w?void 0:w.cta,borderColor:null===(W=e.surface)||void 0===W?void 0:W.cta},buttonDisabled:Object.assign({color:null===(_=e.text)||void 0===_?void 0:_.disabled,backgroundColor:"transparent"},null===(z=e.border)||void 0===z?void 0:z.disabled),checkbox:{color:null===(q=e.text)||void 0===q?void 0:q.standard},checkboxHover:{color:null===($=e.text)||void 0===$?void 0:$.light},checkboxDisabled:{color:null===(G=e.text)||void 0===G?void 0:G.disabled},chipCta:Object.assign({color:null===(V=e.text)||void 0===V?void 0:V.standard,backgroundColor:"transparent",borderStyle:"solid",borderWidth:"1px",transition:"none"},null===(U=e.border)||void 0===U?void 0:U.chip),chipCtaHover:{color:null===(J=e.text)||void 0===J?void 0:J.cta,backgroundColor:null===(K=e.surface)||void 0===K?void 0:K.cta,borderColor:null===(N=e.text)||void 0===N?void 0:N.cta},chipFilled:{color:null===(Q=e.text)||void 0===Q?void 0:Q.standard,backgroundColor:null===(X=e.surface)||void 0===X?void 0:X.light},chipOutlined:{color:null===(Y=e.text)||void 0===Y?void 0:Y.standard,backgroundColor:"transparent",borderColor:null===(Z=e.text)||void 0===Z?void 0:Z.standard},chipDangerFilled:{color:null===(ee=e.text)||void 0===ee?void 0:ee.light,backgroundColor:null===(oe=e.common)||void 0===oe?void 0:oe.danger},chipDangerOutlined:{color:null===(ie=e.common)||void 0===ie?void 0:ie.danger,backgroundColor:"transparent",borderColor:null===(te=e.common)||void 0===te?void 0:te.danger},chipPrimaryFilled:{color:null===(re=e.text)||void 0===re?void 0:re.light,backgroundColor:null===(le=e.common)||void 0===le?void 0:le.primary},chipPrimaryOutlined:{color:null===(de=e.common)||void 0===de?void 0:de.primary,backgroundColor:"transparent",borderColor:null===(ne=e.common)||void 0===ne?void 0:ne.primary},dialog:{color:null===(ae=e.text)||void 0===ae?void 0:ae.standard,backgroundColor:null===(se=e.surface)||void 0===se?void 0:se.standard},dialogBackdrop:{},dialogTitle:{},dialogContent:{},dialogContentText:{color:null===(ce=e.text)||void 0===ce?void 0:ce.standard},dialogActions:{},divider:{backgroundColor:null===(ue=e.surface)||void 0===ue?void 0:ue.divider},drawer:{backgroundColor:null===(ve=e.surface)||void 0===ve?void 0:ve.standard},formGroup:{gap:"4px"},formLabel:{color:null===(be=e.text)||void 0===be?void 0:be.standard,fontSize:null===(ge=e.text)||void 0===ge?void 0:ge.labelSize},formLabelFocused:{color:null===(pe=e.text)||void 0===pe?void 0:pe.standard},formLabelDisabled:{color:null===(me=e.text)||void 0===me?void 0:me.disabled},icon:{color:null===(Oe=e.common)||void 0===Oe?void 0:Oe.icon},iconButton:{padding:0,color:null===(he=e.common)||void 0===he?void 0:he.icon},link:{color:null===(je=e.text)||void 0===je?void 0:je.highlight},list:{backgroundColor:null===(fe=e.surface)||void 0===fe?void 0:fe.standard},listItem:{padding:"4px 12px",color:null===(xe=e.text)||void 0===xe?void 0:xe.standard},listItemHover:{backgroundColor:null===(Ce=e.surface)||void 0===Ce?void 0:Ce.hover},listItemSelected:{backgroundColor:null===(ye=e.surface)||void 0===ye?void 0:ye.selected},listItemSelectedText:{color:null===(Me=e.text)||void 0===Me?void 0:Me.cta,backgroundColor:null===(Se=e.surface)||void 0===Se?void 0:Se.cta},menu:{backgroundColor:null===(Ie=e.surface)||void 0===Ie?void 0:Ie.standard},menuItem:{color:null===(ke=e.text)||void 0===ke?void 0:ke.standard},menuItemHover:{backgroundColor:null===(Te=e.surface)||void 0===Te?void 0:Te.hover},menuItemSelected:{backgroundColor:null===(Fe=e.surface)||void 0===Fe?void 0:Fe.selected},radioButton:{color:null===(Ee=e.text)||void 0===Ee?void 0:Ee.standard},radioButtonHover:{color:null===(Ae=e.text)||void 0===Ae?void 0:Ae.light},radioButtonChecked:{color:null===(De=e.common)||void 0===De?void 0:De.primary},select:Object.assign({color:null===(Be=e.text)||void 0===Be?void 0:Be.standard,backgroundColor:null===(Pe=e.surface)||void 0===Pe?void 0:Pe.input},null===(Le=e.border)||void 0===Le?void 0:Le.input),sliderThumb:{color:null===(He=e.surface)||void 0===He?void 0:He.standard,borderColor:"#8A8A8A"},sliderThumbActive:{color:null===(Re=e.common)||void 0===Re?void 0:Re.primary,borderColor:null===(we=e.common)||void 0===we?void 0:we.primary},sliderRail:{color:null===(We=e.surface)||void 0===We?void 0:We.light},paper:{color:null===(_e=e.text)||void 0===_e?void 0:_e.standard,backgroundColor:null===(ze=e.surface)||void 0===ze?void 0:ze.standard},tab:{color:null===(qe=e.text)||void 0===qe?void 0:qe.dark},tabSelected:{color:null===($e=e.text)||void 0===$e?void 0:$e.light},tabs:{},tabsIndicator:{backgroundColor:null===(Ge=e.text)||void 0===Ge?void 0:Ge.light},textField:ro,textFieldFocused:Object.assign(Object.assign({},ro),{color:null===(Ve=e.text)||void 0===Ve?void 0:Ve.cta,backgroundColor:null===(Ue=e.surface)||void 0===Ue?void 0:Ue.inputFocused}),textFieldDisabled:Object.assign(Object.assign({},ro),{color:null===(Je=e.text)||void 0===Je?void 0:Je.disabled,backgroundColor:null===(Ke=e.surface)||void 0===Ke?void 0:Ke.input}),textFieldLabel:{color:null===(Ne=e.text)||void 0===Ne?void 0:Ne.standard},textFieldLabelFocused:{color:null===(Qe=e.text)||void 0===Qe?void 0:Qe.cta},textFieldLabelDisabled:{color:null===(Xe=e.text)||void 0===Xe?void 0:Xe.disabled},tooltip:{backgroundColor:null===(Ye=e.surface)||void 0===Ye?void 0:Ye.light},toggleButton:{color:null===(Ze=e.text)||void 0===Ze?void 0:Ze.standard,backgroundColor:null===(eo=e.surface)||void 0===eo?void 0:eo.standard},toggleButtonSelected:Object.assign({color:null===(oo=e.text)||void 0===oo?void 0:oo.highlight,backgroundColor:null===(io=e.surface)||void 0===io?void 0:io.input},null===(to=e.border)||void 0===to?void 0:to.input),toggleButtonIconSelected:{}}})(i);return{appTheme:i,elementTheme:(0,r.default)(t,null==e?void 0:e.elementTheme)}}},49:o=>{o.exports=e},210:e=>{e.exports=o},156:e=>{e.exports=i}},r={};return function e(o){var i=r[o];if(void 0!==i)return i.exports;var l=r[o]={exports:{}};return t[o].call(l.exports,l,l.exports,e),l.exports}(867)})()));