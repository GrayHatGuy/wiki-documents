"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[69404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),_=o,m=p["".concat(s,".").concat(_)]||p[_]||d[_]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=_;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},92633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={description:"Button",title:"Button",keywords:["SenseCAP Indicator ESP32 Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_ESP32_Button",last_update:{date:"5/23/2023",author:"Thomas"}},a="**Button**",c={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/Button",id:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/Button",title:"Button",description:"Button",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/Button.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3",slug:"/SenseCAP_Indicator_ESP32_Button",permalink:"/SenseCAP_Indicator_ESP32_Button",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/Button.md",tags:[],version:"current",lastUpdatedBy:"Thomas",lastUpdatedAt:16848e5,formattedLastUpdatedAt:"May 23, 2023",frontMatter:{description:"Button",title:"Button",keywords:["SenseCAP Indicator ESP32 Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_ESP32_Button",last_update:{date:"5/23/2023",author:"Thomas"}},sidebar:"ProductSidebar",previous:{title:"BLE",permalink:"/SenseCAP_Indicator_ESP32_BLE"},next:{title:"LoRa\xae",permalink:"/SenseCAP_Indicator_ESP32_LoRa"}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"button"},(0,o.kt)("strong",{parentName:"h1"},"Button")),(0,o.kt)("p",null,"This code initializes the board, registers two button event callbacks, and specifies the button events to be handled. When the user presses the button, the corresponding callback function will be called.\nThe ESP_LOGI() function is used to print a message to the console indicating which button event occurred."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n#include "esp_log.h"\n#include "bsp_board.h"\n#include "bsp_btn.h"\n\n\nstatic void __btn_click_callback(void* arg)\n{\n    ESP_LOGI("btn", "Click");\n\n}\n\nstatic void __btn_double_click_callback(void* arg)\n{\n    ESP_LOGI("btn", "Double Click");\n}\n\nvoid app_main(void)\n{\n    ESP_ERROR_CHECK(bsp_board_init());\n\n    /*\n     * Button Event types you can use:\n     *     BUTTON_PRESS_DOWN\n     *     BUTTON_PRESS_UP\n     *     BUTTON_PRESS_REPEAT\n     *     BUTTON_SINGLE_CLICK\n     *     BUTTON_DOUBLE_CLICK\n     *     BUTTON_LONG_PRESS_START\n     *     BUTTON_LONG_PRESS_HOLD\n     */\n    bsp_btn_register_callback( BOARD_BTN_ID_USER, BUTTON_SINGLE_CLICK, __btn_click_callback, NULL);\n    bsp_btn_register_callback( BOARD_BTN_ID_USER, BUTTON_DOUBLE_CLICK, __btn_double_click_callback, NULL);\n}\n\n')),(0,o.kt)("h1",{id:"tech-support"},(0,o.kt)("strong",{parentName:"h1"},"Tech Support")),(0,o.kt)("p",null,"Don't worry, we've got you covered! Please visit our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/cPpeuQMM"},"Seeed Official Discord Channel")," to ask your questions! "),(0,o.kt)("p",null,"If you have large order or customization requirement, please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}p.isMDXComponent=!0}}]);