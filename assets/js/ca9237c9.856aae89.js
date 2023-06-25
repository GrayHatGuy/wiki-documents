"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52804],{3905:(t,e,o)=>{o.d(e,{Zo:()=>l,kt:()=>k});var r=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var c=r.createContext({}),u=function(t){var e=r.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):s(s({},e),t)),o},l=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,l=a(t,["components","mdxType","originalType","parentName"]),d=u(o),m=n,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return o?r.createElement(k,s(s({ref:e},l),{},{components:o})):r.createElement(k,s({ref:e},l))}));function k(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=o.length,s=new Array(i);s[0]=m;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a[d]="string"==typeof t?t:n,s[1]=a;for(var u=2;u<i;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6542:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const i={description:"Joystick Control RGB Led",title:"Joystick Control RGB Led",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Joystick_Control_RGB_Led",last_update:{date:"2/15/2023",author:"jianjing Huang"}},s=void 0,a={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Joystick_Control_RGB_Led",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Joystick_Control_RGB_Led",title:"Joystick Control RGB Led",description:"Joystick Control RGB Led",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Joystick_Control_RGB_Led.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Joystick_Control_RGB_Led",permalink:"/Joystick_Control_RGB_Led",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Joystick_Control_RGB_Led.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Joystick Control RGB Led",title:"Joystick Control RGB Led",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Joystick_Control_RGB_Led",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"IR Remote",permalink:"/IR_Remote"},next:{title:"Light Sensor and LED Bar",permalink:"/Light_Sensor_and_LED_Bar"}},c={},u=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:u};function d(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use Joystick in some control occasion, such as control a toy car."),(0,n.kt)("p",null,"This demo will show you how to use joystick, and we need a Rgb Led else, when joystick in different location, Rgb Led will show different color."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Required\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Arduino")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Joystick")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"RGB LED"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Circuit\uff1a")),(0,n.kt)("p",null,"Joystick connect to A0, A1, RGB LED connect to D3, D9 and D10."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Joystick_Control_RGB_Led/img/Sidekick_38_1.png",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Code:")),(0,n.kt)("p",null,"Open Arduino IDE, click File -",">"," Sketchbook -",">"," joystick."),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);