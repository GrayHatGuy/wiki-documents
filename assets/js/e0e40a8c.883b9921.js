"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31599],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=o.createContext({}),s=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),h=i,y=c["".concat(d,".").concat(h)]||c[h]||p[h]||a;return r?o.createElement(y,n(n({ref:t},u),{},{components:r})):o.createElement(y,n({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,n[1]=l;for(var s=2;s<a;s++)n[s]=r[s];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},29060:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),i=(r(67294),r(3905));const a={description:"How to install an Arduino library",title:"How to install an Arduino library",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/How_to_install_Arduino_Library",last_update:{date:"02/02/2023",author:"w0x7ce"},no_comments:!1},n=void 0,l={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_install_Arduino_Library",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_install_Arduino_Library",title:"How to install an Arduino library",description:"How to install an Arduino library",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_install_Arduino_Library.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/How_to_install_Arduino_Library",permalink:"/How_to_install_Arduino_Library",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_install_Arduino_Library.md",tags:[{label:"Tutorial",permalink:"/tags/tutorial"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1675296e3,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{description:"How to install an Arduino library",title:"How to install an Arduino library",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/How_to_install_Arduino_Library",last_update:{date:"02/02/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"How to Add Seeed boards to Arduino IDE",permalink:"/Seeed_Arduino_Boards"},next:{title:"How to use and write a library",permalink:"/How_to_use_and_write_a_library"}},d={},s=[{value:"Download the Library",id:"download-the-library",level:2},{value:"1.Download in the product page",id:"1download-in-the-product-page",level:3},{value:"2.Download from github",id:"2download-from-github",level:3},{value:"Add the library",id:"add-the-library",level:2},{value:"1.Add ZIP Library",id:"1add-zip-library",level:3},{value:"2.Add Library folder manually",id:"2add-library-folder-manually",level:3},{value:"Check",id:"check",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"This tutorial is based on Arduino 1.6.9.\n"))),(0,i.kt)("p",null,"Here we will show you how to install an Arduino library. You should notice that almost all of our library was stored at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio"},"Github"),". We will provide Arduino library when a product need a library. For some simple product, there is no need to write a library such as Grove - Button."),(0,i.kt)("h2",{id:"download-the-library"},"Download the Library"),(0,i.kt)("p",null,"There are two ways to download a Arduino library."),(0,i.kt)("h3",{id:"1download-in-the-product-page"},"1.Download in the product page"),(0,i.kt)("p",null,"Normally, if a product needs a library, you will find a download library button bar like this below:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/OLED_Display_96X96/archive/master.zip"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/library.png",alt:"enter image description here"}))),(0,i.kt)("p",null,"Click on the button to start downloading. Seconds you will get a package."),(0,i.kt)("h3",{id:"2download-from-github"},"2.Download from github"),(0,i.kt)("p",null,"If you need to download from a Github page, then you can click on the ",(0,i.kt)("strong",{parentName:"p"},"Clone or download >Download ZIP")," button to get the library package."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Tutorial_Add_Arduino_Library/images/github_download.png",alt:"enter image description here"})),(0,i.kt)("h2",{id:"add-the-library"},"Add the library"),(0,i.kt)("p",null,"Also there are two ways to add a library to Arduino IDE."),(0,i.kt)("h3",{id:"1add-zip-library"},"1.Add ZIP Library"),(0,i.kt)("p",null,"Since you have downloaded the zip Library, open your Arduino IDE, click on ",(0,i.kt)("strong",{parentName:"p"},"Sketch > Include Library > Add .ZIP Library"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png",alt:"enter image description here"})),(0,i.kt)("p",null,"Choose the zip file you just downloaded\uff0cand if the library install correct, you will see ",(0,i.kt)("strong",{parentName:"p"},"Library added to your libraries")," in the notice window. Which means the library is installed successfully."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png",alt:null})),(0,i.kt)("h3",{id:"2add-library-folder-manually"},"2.Add Library folder manually"),(0,i.kt)("p",null,"Sometimes you can not add a ZIP library correctly, because the root folder of the Zip Library lacks of .cpp or .h file, the Arduino can not recognize. Then you can Unzip the zip file and copy the Library folder into the following path ",(0,i.kt)("strong",{parentName:"p"},"...\\Arduino\\libraries"),". ",(0,i.kt)("strong",{parentName:"p"},"....","*","* is the path you setup Arduino. In my case is "),"D:\\Workwork\\Software\\Arduino\\libraries**."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png",alt:null})),(0,i.kt)("h3",{id:"check"},"Check"),(0,i.kt)("p",null,"Then let's check if the library install correctly."),(0,i.kt)("p",null,"When you add a library successfully, there will be a demo in the Example. In this case, click on ",(0,i.kt)("strong",{parentName:"p"},"File > Example > OLED_Display_96x96-master > OLED_Hello_World")," to open an example, click on the Verify button, if there's no error, congratulation, the library is installed perfectly. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/successlly.png",alt:"enter image description here"})),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);