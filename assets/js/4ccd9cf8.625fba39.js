"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76632],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(i),h=n,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||s;return i?r.createElement(m,o(o({ref:t},d),{},{components:i})):r.createElement(m,o({ref:t},d))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,o=new Array(s);o[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:n,o[1]=a;for(var p=2;p<s;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},84575:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=i(87462),n=(i(67294),i(3905));const s={description:"RGBW_Stripe_WireLess_Shield_V1.0",title:"RGBW Stripe WireLess Shield V1.0",tags:["Shield"],keywords:["Shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RGBW_Stripe_WireLess_Shield_V1.0",last_update:{date:"02/02/2023",author:"Eico"},no_comments:!1},o=void 0,a={unversionedId:"Top_Brand/Arduino/shield/RGBW_Stripe_WireLess_Shield_V1.0",id:"Top_Brand/Arduino/shield/RGBW_Stripe_WireLess_Shield_V1.0",title:"RGBW Stripe WireLess Shield V1.0",description:"RGBW_Stripe_WireLess_Shield_V1.0",source:"@site/docs/Top_Brand/Arduino/shield/RGBW_Stripe_WireLess_Shield_V1.0.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/RGBW_Stripe_WireLess_Shield_V1.0",permalink:"/RGBW_Stripe_WireLess_Shield_V1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/RGBW_Stripe_WireLess_Shield_V1.0.md",tags:[{label:"Shield",permalink:"/tags/shield"}],version:"current",lastUpdatedBy:"Eico",lastUpdatedAt:1675296e3,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{description:"RGBW_Stripe_WireLess_Shield_V1.0",title:"RGBW Stripe WireLess Shield V1.0",tags:["Shield"],keywords:["Shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RGBW_Stripe_WireLess_Shield_V1.0",last_update:{date:"02/02/2023",author:"Eico"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Grove Shield for Arduino Nano",permalink:"/Grove_Shield_for_Arduino_Nano"},next:{title:"Renbotics Servo Shield Rev",permalink:"/Renbotics_ServoShield_Rev"}},l={},p=[{value:"Feature",id:"feature",level:2},{value:"Layout and schematics",id:"layout-and-schematics",level:2},{value:"Libraries",id:"libraries",level:2},{value:"Necessary libraries",id:"necessary-libraries",level:3},{value:"Demo code (example)",id:"demo-code-example",level:3},{value:"Version Tracker",id:"version-tracker",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_rev1_face.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"RGBW Stripe WireLess Shield has 4 PWM output to connect RGBW LED Strip.\nAnyone can handle a load of 1.5 A with a voltage of 5 to 24 V.\nIntegrated control in 5 Arduino easily provide power from the input power supply.\nSelf-renewing fuse protects LED Strip overcurrent.\nFor remote control RGB tape used popular transceiver nRF24L01+.\nThe most interesting is that the board has a memory, and you can now update the firmware of your Arduino through the air!"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_top.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/depot/RGBW-Strip-WireLess-Shield-V10-p-2629.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Built on Arduino-compatible architecture (DualOptiboot)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Compatibility with 12 - 24V RGB LED Strip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"4 PWM output (RGBW)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On board 64kb SPI flash / E2prom (for OTA firmware updates)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Built-in Auto LED RF activity (for nRF24L01 +)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Mini  transceiver 2.4G nRF24L01 +")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Self-renewing fuse")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Built-in button")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"GROVE-compatible connector: I2C"))),(0,n.kt)("h2",{id:"layout-and-schematics"},"Layout and schematics"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW-top.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW-bottom.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/Scheme_RGBW.PNG",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{id:"libraries"},"Libraries"),(0,n.kt)("h3",{id:"necessary-libraries"},"Necessary libraries"),(0,n.kt)("h3",{id:"demo-code-example"},"Demo code (example)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"\nint L_RED = 6;\nint L_GREEN = 9;\nint L_BLUE = 3;\nint L_WHITE = 5;\n\nint brightness = 0;\nint fadeAmount = 5;\n\nvoid setup()  {\n  pinMode(L_RED, OUTPUT);\n  pinMode(L_GREEN, OUTPUT);\n  pinMode(L_BLUE, OUTPUT);\n  pinMode(L_WHITE, OUTPUT);\n}\n\nvoid loop()  {\n  // RED\n  analogWrite(L_RED, brightness);\n  brightness = brightness + fadeAmount;\n  if (brightness == 0 || brightness == 255) {\n    fadeAmount = -fadeAmount ;\n  }\n  // GREEN\n  analogWrite(L_GREEN, brightness);\n  brightness = brightness + fadeAmount;\n  if (brightness == 0 || brightness == 255) {\n    fadeAmount = -fadeAmount ;\n  }\n  // BLUE\n  analogWrite(L_BLUE, brightness);\n  brightness = brightness + fadeAmount;\n  if (brightness == 0 || brightness == 255) {\n    fadeAmount = -fadeAmount ;\n  }\n  // WHITE\n  analogWrite(L_WHITE, brightness);\n  brightness = brightness + fadeAmount;\n  if (brightness == 0 || brightness == 255) {\n    fadeAmount = -fadeAmount ;\n  }\n}\n")),(0,n.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,n.kt)("table",{cellPadding:5,cellSpacing:0},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{width:150}," ",(0,n.kt)("strong",null,"Revision")),(0,n.kt)("td",{width:450}," ",(0,n.kt)("strong",null,"Description")),(0,n.kt)("td",{width:80}," ",(0,n.kt)("strong",null,"Release"))),(0,n.kt)("tr",{style:{fontSize:"90%"}},(0,n.kt)("td",null," 1.0 rev 1"),(0,n.kt)("td",null," Public version"),(0,n.kt)("td",null," 19.11.2015")))),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);