import{u as S,j as t,_ as n}from"./use-plugin-data-CEVveJse.js";const b=e=>S("wptelegram_login",e),i=({attributes:e,className:o})=>{const u=b("assets"),{button_style:a,show_user_photo:c,corner_radius:g}=e;let l;a==="small"?l="100px":a==="medium"&&(l="150px");let r;return a==="small"?r="20px":a==="medium"&&(r="30px"),t.jsxs("div",{className:o,children:[t.jsx("img",{src:u.loginImageUrl,style:{borderRadius:`${g}px`,width:l},alt:""}),c?t.jsx("img",{src:u.loginAvatarUrl,style:{width:r},alt:""}):null]})},k=()=>[{label:n("Large"),value:"large"},{label:n("Medium"),value:"medium"},{label:n("Small"),value:"small"}];var h;const p=((h=window.wptelegram_login)==null?void 0:h.savedSettings)||{},B=({attributes:e,setAttributes:o,className:u})=>{const{button_style:a,show_user_photo:c,corner_radius:g,lang:l,show_if_user_is:r}={...p,...e};wp.element.useEffect(()=>{for(const s in p)s in e||o({[s]:p[s]})},[]);const m=b("uiData"),y=wp.element.useCallback(s=>o({button_style:s}),[o]),C=wp.element.useCallback(s=>o({show_user_photo:s}),[o]),f=wp.element.useCallback(s=>o({corner_radius:s}),[o]),j=wp.element.useCallback(s=>o({show_if_user_is:s}),[o]),v=wp.element.useCallback(s=>o({lang:s}),[o]);return t.jsxs(t.Fragment,{children:[t.jsx(wp.blockEditor.InspectorControls,{children:t.jsx(wp.components.PanelBody,{title:n("Button Settings"),children:t.jsxs(wp.components.Flex,{direction:"column",gap:4,children:[t.jsx(wp.components.RadioControl,{label:n("Button Style"),selected:a,onChange:y,options:k()}),t.jsx(wp.components.ToggleControl,{label:n("Show User Photo"),checked:c,onChange:C,__nextHasNoMarginBottom:!0}),t.jsx(wp.components.TextControl,{label:n("Corner Radius"),value:g||"",onChange:f,type:"number",min:"0",max:"20",__nextHasNoMarginBottom:!0}),t.jsx(wp.components.SelectControl,{label:n("Language"),value:l,onChange:v,options:m.lang,__nextHasNoMarginBottom:!0}),t.jsx(wp.components.SelectControl,{label:n("Show if user is"),value:r,onChange:j,options:m.show_if_user_is,__nextHasNoMarginBottom:!0})]})})}),t.jsx(i,{attributes:e,className:u})]})},N={button_style:{type:"string",default:"large"},show_user_photo:{type:"boolean",default:!0},corner_radius:{type:"string",default:"20"},show_if_user_is:{type:"string",default:"0"}},x={button_style:{type:"string"},show_user_photo:{type:"boolean"},corner_radius:{type:"string"},show_if_user_is:{type:"string"}},_={...x,lang:{type:"string"}};var w;const d=((w=window.wptelegram_login)==null?void 0:w.savedSettings)||{};wp.blocks.registerBlockType("wptelegram/login",{title:n("WP Telegram Login"),icon:"smartphone",category:"wptelegram",attributes:_,edit:B,save(e){return t.jsx(i,{attributes:e.attributes,className:""})},deprecated:[{attributes:N,save(e){return t.jsx(i,{attributes:e.attributes,className:""})}},{attributes:x,migrate(e){return{...d,...e}},save(e){return t.jsx(i,{attributes:e.attributes,className:""})}},{attributes:_,migrate(e){return{...d,...e}},save(e){return t.jsx(i,{attributes:e.attributes,className:""})}}]});
//# sourceMappingURL=blocks-B6GhD9wM.js.map